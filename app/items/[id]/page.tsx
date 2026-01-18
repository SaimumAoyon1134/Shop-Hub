"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Item, ApiResponse } from "../../types";
import { toast } from "react-hot-toast";

export default function ItemDetailPage() {
  const params = useParams();
  const router = useRouter();
  const itemId = params.id as string;

  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/items/${itemId}`);

        if (!response.ok) {
          if (response.status === 404) {
            router.push("/items");
            return;
          }
          throw new Error("Failed to fetch item");
        }

        const data: ApiResponse<Item> = await response.json();

        if (data.success && data.data) {
          setItem(data.data);
        } else {
          throw new Error(data.message || "Item not found");
        }
      } catch (err) {
        console.error("Error fetching item:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
        toast.error("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    if (itemId) {
      fetchItem();
    }
  }, [itemId, router]);

  const handleAddToCart = () => {
    if (!item) return;

    // In a real app, this would add to cart
    toast.success(`${item.name} added to cart!`);
  };

  const handleBuyNow = () => {
    if (!item) return;

    // In a real app, this would proceed to checkout
    toast.success(`Proceeding to checkout for ${item.name}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Loading product details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
          <div className="text-center max-w-md">
            <div className="text-red-500 text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Product Not Found
            </h2>
            <p className="text-gray-400 mb-6">
              {error || "The product you're looking for doesn't exist."}
            </p>
            <Link
              href="/items"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 inline-block"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link
            href="/items"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Products
          </Link>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="p-8">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-96 object-cover rounded-xl"
                />
                {!item.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-xl">
                    <span className="bg-red-600 text-white px-4 py-2 rounded-full text-lg font-medium">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Product Details */}
            <div className="p-8">
              <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {item.category}
                </span>
                <h1 className="text-3xl font-bold text-white mb-4">
                  {item.name}
                </h1>

                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(5)].map((_, idx) => (
                      <svg
                        key={`${item.id}-detail-star-${idx}`}
                        className={`w-5 h-5 ${
                          idx < Math.floor(item.rating)
                            ? "fill-current"
                            : "fill-none stroke-current"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-400">
                    {item.rating} • {Math.floor(Math.random() * 1000) + 50}{" "}
                    reviews
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-4xl font-bold text-white">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  {item.inStock && (
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-green-400 font-medium">
                        In Stock
                      </span>
                    </div>
                  )}
                </div>

                {item.inStock && (
                  <div className="mb-6">
                    <label className="block text-gray-300 mb-2">
                      Quantity:
                    </label>
                    <div className="flex items-center">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-l-lg flex items-center justify-center text-white transition-colors duration-300"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value={quantity}
                        onChange={(e) =>
                          setQuantity(
                            Math.max(
                              1,
                              Math.min(10, parseInt(e.target.value) || 1)
                            )
                          )
                        }
                        className="w-16 h-10 bg-gray-800 border-y border-gray-600 text-white text-center focus:outline-none"
                      />
                      <button
                        onClick={() => setQuantity(Math.min(10, quantity + 1))}
                        className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-r-lg flex items-center justify-center text-white transition-colors duration-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {item.inStock ? (
                  <>
                    <button
                      onClick={handleAddToCart}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/20"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={handleBuyNow}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
                    >
                      Buy Now
                    </button>
                  </>
                ) : (
                  <button
                    disabled
                    className="w-full bg-gray-600 text-gray-400 py-4 px-6 rounded-lg font-semibold cursor-not-allowed"
                  >
                    Out of Stock
                  </button>
                )}
              </div>

              {/* Product Features */}
              <div className="mt-10 pt-8 border-t border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Product Details
                </h3>
                <div className="grid grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <span className="font-medium">Category:</span>
                    <span className="ml-2">{item.category}</span>
                  </div>
                  <div>
                    <span className="font-medium">Rating:</span>
                    <span className="ml-2">{item.rating}/5</span>
                  </div>
                  <div>
                    <span className="font-medium">Availability:</span>
                    <span
                      className={`ml-2 ${
                        item.inStock ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {item.inStock ? "In Stock" : "Out of Stock"}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Product ID:</span>
                    <span className="ml-2">#{item.id}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Related Products
          </h2>
          <div className="text-center py-12 bg-gray-800/30 rounded-xl border border-gray-700">
            <p className="text-gray-400">Related products would appear here</p>
            <Link
              href="/items"
              className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Browse More Products
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
