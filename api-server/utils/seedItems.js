const Item = require("../models/Item");

const seedItems = async () => {
  try {
    // Check if items already exist
    const existingItems = await Item.countDocuments();

    if (existingItems > 0) {
      console.log("Items already exist in database, skipping seed");
      return;
    }

    // Sample items to seed
    const sampleItems = [
      {
        name: "Wireless Bluetooth Headphones",
        description:
          "Premium noise-cancelling headphones with 30-hour battery life",
        price: 199.99,
        image:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        category: "Electronics",
        rating: 4.5,
        inStock: true,
      },
      {
        name: "Smart Fitness Watch",
        description: "Track your workouts, heart rate, and sleep patterns",
        price: 149.99,
        image:
          "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        category: "Wearables",
        rating: 4.2,
        inStock: true,
      },
      {
        name: "Portable Coffee Maker",
        description: "Compact coffee maker perfect for travel and office use",
        price: 89.99,
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
        category: "Home & Kitchen",
        rating: 4.0,
        inStock: false,
      },
      {
        name: "Mechanical Gaming Keyboard",
        description: "RGB backlit mechanical keyboard with blue switches",
        price: 129.99,
        image:
          "https://images.unsplash.com/photo-1595225476202-8e6e38720f8f?w=400&h=400&fit=crop",
        category: "Computers",
        rating: 4.7,
        inStock: true,
      },
      {
        name: "Yoga Mat Premium",
        description: "Eco-friendly non-slip yoga mat with carrying strap",
        price: 39.99,
        image:
          "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&h=400&fit=crop",
        category: "Sports",
        rating: 4.3,
        inStock: true,
      },
      {
        name: "Digital Camera Kit",
        description: "24MP mirrorless camera with 18-55mm lens kit",
        price: 599.99,
        image:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop",
        category: "Photography",
        rating: 4.6,
        inStock: true,
      },
    ];

    // Insert sample items
    await Item.insertMany(sampleItems);
    console.log(`Seeded ${sampleItems.length} items to database`);
  } catch (error) {
    console.error("Error seeding items:", error.message);
  }
};

module.exports = seedItems;
