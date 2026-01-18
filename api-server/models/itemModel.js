// Mock data for items
let items = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    name: "Mechanical Gaming Keyboard",
    description: "RGB backlit mechanical keyboard with blue switchess",
    price: 129.99,
    image:
      "https://s3-eu-west-1.amazonaws.com/backcslimages/newsite/product-images/1500-1500/STANDIVARIUS-piano-2-top.jpg",
    category: "Computers",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 5,
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
    id: 6,
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

let nextId = 7;

module.exports = {
  getAllItems: () => items,
  getItemById: (id) => items.find((item) => item.id === parseInt(id)),
  addItem: (itemData) => {
    const newItem = {
      id: nextId++,
      ...itemData,
      rating: 0,
      inStock: true,
    };
    items.push(newItem);
    return newItem;
  },
  updateItem: (id, itemData) => {
    const index = items.findIndex((item) => item.id === parseInt(id));
    if (index !== -1) {
      items[index] = { ...items[index], ...itemData };
      return items[index];
    }
    return null;
  },
  deleteItem: (id) => {
    const index = items.findIndex((item) => item.id === parseInt(id));
    if (index !== -1) {
      return items.splice(index, 1)[0];
    }
    return null;
  },
};
