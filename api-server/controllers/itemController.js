const Item = require("../models/Item");
const connectDB = require("../config/db");
const seedItems = require("../utils/seedItems");

// Global variable to track connection status
if (!global.dbConnected) {
  global.dbConnected = false;
}

// Track if seeding has been performed
if (!global.itemsSeeded) {
  global.itemsSeeded = false;
}

// Function to ensure DB connection is ready
const ensureConnection = async () => {
  if (!global.dbConnected) {
    await connectDB();
    global.dbConnected = true;
  }
};

// Function to ensure items are seeded
const ensureSeeded = async () => {
  if (!global.itemsSeeded) {
    await ensureConnection();
    await seedItems();
    global.itemsSeeded = true;
  }
};

// Get all items
const getAllItems = async (req, res) => {
  try {
    // Ensure DB connection is ready and items are seeded
    await ensureSeeded();

    const items = await Item.find({});
    res.json({
      success: true,
      data: items,
      count: items.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching items",
      error: error.message,
    });
  }
};

// Get item by ID
const getItemById = async (req, res) => {
  try {
    // Ensure DB connection is ready
    await ensureConnection();

    const { id } = req.params;
    const item = await Item.findById(id);

    if (!item) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    res.json({
      success: true,
      data: item,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching item",
      error: error.message,
    });
  }
};

// Add new item
const addItem = async (req, res) => {
  try {
    // Ensure DB connection is ready
    await ensureConnection();

    const { name, description, price, image, category } = req.body;

    // Validation
    if (!name || !description || !price) {
      return res.status(400).json({
        success: false,
        message: "Name, description, and price are required",
      });
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

    res.status(201).json({
      success: true,
      message: "Item created successfully",
      data: newItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating item",
      error: error.message,
    });
  }
};

// Update item
const updateItem = async (req, res) => {
  try {
    // Ensure DB connection is ready
    await ensureConnection();

    const { id } = req.params;
    const updateData = req.body;

    const updatedItem = await Item.findByIdAndUpdate(id, updateData, {
      new: true, // Return updated document
      runValidators: true, // Run schema validators
    });

    if (!updatedItem) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    res.json({
      success: true,
      message: "Item updated successfully",
      data: updatedItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating item",
      error: error.message,
    });
  }
};

// Delete item
const deleteItem = async (req, res) => {
  try {
    // Ensure DB connection is ready
    await ensureConnection();

    const { id } = req.params;
    const deletedItem = await Item.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({
        success: false,
        message: "Item not found",
      });
    }

    res.json({
      success: true,
      message: "Item deleted successfully",
      data: deletedItem,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting item",
      error: error.message,
    });
  }
};

module.exports = {
  getAllItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem,
};
