import Item from "../../../models/Item";
import connectDB from "../../../../api-server/config/db";
import { Types } from "mongoose";

// Global variable to track connection status
if (!global.dbConnected) {
  global.dbConnected = false;
}

// Ensure DB is connected before using
const ensureConnection = async () => {
  if (!global.dbConnected) {
    await connectDB();
    global.dbConnected = true;
  }
};

// Helper function to extract ID from URL
function getIdFromUrl(url) {
  const urlObj = new URL(url);
  const parts = urlObj.pathname.split("/");
  return parts[parts.length - 1]; // The last part should be the ID
}

// GET item by ID
export async function GET(request, { params }) {
  try {
    console.log("GET /api/items/[id]: Starting request for ID:", params.id);

    // Ensure DB connection
    await ensureConnection();

    const { id } = params;
    console.log("GET /api/items/[id]: Looking for item with ID:", id);

    console.log("GET /api/items/[id]: Validating ID format:", id);

    // Attempt to find item regardless of ObjectId validity
    // Some items might have different ID formats
    let item;
    try {
      // First, try with the original id
      item = await Item.findById(id);

      // If not found and id is not a valid ObjectId, it might be from initial data
      if (!item && !Types.ObjectId.isValid(id)) {
        console.log(
          "GET /api/items/[id]: ID is not valid ObjectId, checking for other formats"
        );
        // If it's not a valid ObjectId, try finding by other fields
        // This handles cases where initial seed data might have different ID formats
        item = await Item.findOne({ id: id });
      }
    } catch (error) {
      console.error("GET /api/items/[id]: Error finding item:", error);
      return Response.json(
        {
          success: false,
          message: "Error fetching item",
          error: error.message,
        },
        { status: 500 }
      );
    }

    console.log("GET /api/items/[id]: Found item after search:", !!item);
    console.log("GET /api/items/[id]: Found item:", !!item);

    if (!item) {
      console.log("GET /api/items/[id]: Item not found for ID:", id);
      return Response.json(
        { success: false, message: "Item not found" },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      data: item,
    });
  } catch (error) {
    console.error("GET /api/items/[id]: Error:", error);
    return Response.json(
      { success: false, message: "Error fetching item", error: error.message },
      { status: 500 }
    );
  }
}

// PUT update item
export async function PUT(request, { params }) {
  try {
    // Ensure DB connection
    await ensureConnection();

    const { id } = params;
    const updateData = await request.json();

    const updatedItem = await Item.findByIdAndUpdate(id, updateData, {
      new: true, // Return updated document
      runValidators: true, // Run schema validators
    });

    if (!updatedItem) {
      return Response.json(
        { success: false, message: "Item not found" },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      message: "Item updated successfully",
      data: updatedItem,
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Error updating item", error: error.message },
      { status: 500 }
    );
  }
}

// DELETE item
export async function DELETE(request, { params }) {
  try {
    // Ensure DB connection
    await ensureConnection();

    const { id } = params;
    const deletedItem = await Item.findByIdAndDelete(id);

    if (!deletedItem) {
      return Response.json(
        { success: false, message: "Item not found" },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      message: "Item deleted successfully",
      data: deletedItem,
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Error deleting item", error: error.message },
      { status: 500 }
    );
  }
}
