"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-purple-500/10 to-transparent"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Discover Amazing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {" "}
                  Products
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Your one-stop destination for premium products. Browse thousands
                of items, find exactly what you need, and enjoy seamless
                shopping experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/items"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transform"
                >
                  Browse Products
                </Link>
                <Link
                  href="/login"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-gray-700 hover:border-gray-600 hover:shadow-lg hover:shadow-gray-500/20"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose ShopHub?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We provide the best shopping experience with cutting-edge
                features and exceptional service
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Lightning Fast
                </h3>
                <p className="text-gray-400">
                  Experience blazing fast loading times and smooth browsing with
                  our optimized platform
                </p>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Secure Shopping
                </h3>
                <p className="text-gray-400">
                  Your data is protected with enterprise-grade security and
                  encrypted transactions
                </p>
              </div>

              <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 group">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors duration-300">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Customer Love
                </h3>
                <p className="text-gray-400">
                  Join thousands of satisfied customers who trust us for their
                  shopping needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Popular Categories
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explore our wide range of product categories
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Electronics", icon: "💻", count: "1,240 items" },
                { name: "Fashion", icon: "👕", count: "890 items" },
                { name: "Home & Garden", icon: "🏠", count: "650 items" },
                { name: "Sports", icon: "⚽", count: "420 items" },
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer group"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{category.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied
                customers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Regular Customer",
                  content:
                    "The selection is amazing and delivery was super fast. Will definitely shop here again!",
                  avatar: "SJ",
                },
                {
                  name: "Mike Chen",
                  role: "Tech Enthusiast",
                  content:
                    "Found exactly what I was looking for at great prices. The website is easy to navigate.",
                  avatar: "MC",
                },
                {
                  name: "Emma Davis",
                  role: "Fashion Lover",
                  content:
                    "Best online shopping experience I've had. Quality products and excellent customer service.",
                  avatar: "ED",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, idx) => (
                      <svg
                        key={`${index}-testimonial-star-${idx}`}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "10K+", label: "Products" },
                { number: "50K+", label: "Happy Customers" },
                { number: "99%", label: "Satisfaction Rate" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Shopping?
            </h2>
            <p className="text-gray-300 mb-10 text-lg">
              Join thousands of satisfied customers and discover amazing
              products today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/items"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transform text-center"
              >
                Browse Products Now
              </Link>
              <Link
                href="/login"
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-gray-700 hover:border-gray-600 hover:shadow-lg hover:shadow-gray-500/20 text-center"
              >
                Create Free Account
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
