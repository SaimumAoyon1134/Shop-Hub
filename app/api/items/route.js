import Item from "../../../api-server/models/Item";
import connectDB from "../../../api-server/config/db";
import seedItems from "../../../api-server/utils/seedItems";

// Global variable to track connection status
if (!global.dbConnected) {
  global.dbConnected = false;
}

// Seed database on first request
let isSeeded = false;
const ensureSeeded = async () => {
  if (!isSeeded) {
    // Ensure DB is connected before seeding
    await connectDB();
    global.dbConnected = true;
    await seedItems();
    isSeeded = true;
  }
};

// GET all items
export async function GET(request) {
  try {
    // Ensure database is seeded
    await ensureSeeded();

    const items = await Item.find({});
    return Response.json({
      success: true,
      data: items,
      count: items.length,
    });
  } catch (error) {
    return Response.json(
      { success: false, message: "Error fetching items", error: error.message },
      { status: 500 }
    );
  }
}

// POST create item
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, description, price, image, category } = body;

    // Validation
    if (!name || !description || !price) {
      return Response.json(
        {
          success: false,
          message: "Name, description, and price are required",
        },
        { status: 400 }
      );
    }

    const newItem = await Item.create({
      name,
      description,
      price: parseFloat(price),
      image:
        image ||
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      category: category || "General",
    });

    return Response.json(
      { success: true, message: "Item created successfully", data: newItem },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { success: false, message: "Error creating item", error: error.message },
      { status: 500 }
    );
  }
}
