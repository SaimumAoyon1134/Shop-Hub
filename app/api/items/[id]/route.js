import Item from "../../../../api-server/models/Item";
import connectDB from "../../../../api-server/config/db";

// Ensure DB connection
connectDB();

// Helper function to extract ID from URL
function getIdFromUrl(url) {
  const urlObj = new URL(url);
  const parts = urlObj.pathname.split("/");
  return parts[parts.length - 1]; // The last part should be the ID
}

// GET item by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;
    const item = await Item.findById(id);

    if (!item) {
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
    return Response.json(
      { success: false, message: "Error fetching item", error: error.message },
      { status: 500 }
    );
  }
}

// PUT update item
export async function PUT(request, { params }) {
  try {
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
