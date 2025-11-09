// pages/menu.jsx
import { useState } from "react";
import Layout from "../components/layout/Layout";
import axios from "axios";

export default function Menu({ categories, products }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <Layout title="Our Menu - Shah's Halal Food UK">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0a1522] to-[#1a2532] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Our Menu
          </h1>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition ${
                activeCategory === "all"
                  ? "bg-[#ea1228] text-white"
                  : "bg-white text-[#0a1522] hover:bg-gray-100"
              }`}
            >
              All Items
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                onClick={() => setActiveCategory(category.title)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition ${
                  activeCategory === category.title
                    ? "bg-[#ea1228] text-white"
                    : "bg-white text-[#0a1522] hover:bg-gray-100"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product._id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="aspect-square relative overflow-hidden bg-gray-100">
                  {product.img && (
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-[#0a1522]">
                    {product.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                    {product.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#ea1228] font-bold text-lg sm:text-xl">
                      £{product.prices?.[0]}
                    </span>
                    <button className="bg-[#ea1228] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#c11123] transition">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
    const product = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    
    return {
      props: {
        categories: res.data || [],
        products: product.data || [],
      },
    };
  } catch (error) {
    return {
      props: {
        categories: [],
        products: [],
      },
    };
  }
};
