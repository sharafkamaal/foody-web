// pages/index.jsx
import Head from "next/head";
import axios from "axios";
import FranchiseSection from "../components/Franchise/index";

export default function Index({ categoryList, productList }) {
  return (
    <>
      <Head>
        <title>Shah's Halal Food UK - Home</title>
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1522] to-[#1a2532] min-h-[500px] sm:min-h-[600px] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Welcome to Shah's Halal Food UK
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300">
              Authentic halal cuisine crafted with passion and tradition
            </p>
            <a 
              href="/menu" 
              className="inline-block bg-[#ea1228] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-[#c11123] transition"
            >
              View Our Menu
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#0a1522]">
            <span className="font-light">Our</span> Specialties
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {productList && productList.slice(0, 8).map((product) => (
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

      {/* Franchise Section */}
      <FranchiseSection />

      {/* CTA Section */}
      <section className="bg-[#ea1228] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Visit Us Today
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
            Experience the authentic taste of halal cuisine at any of our locations
          </p>
          <a 
            href="/locations" 
            className="inline-block bg-white text-[#ea1228] px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition"
          >
            Find a Location
          </a>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
    const product = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
    
    return {
      props: {
        categoryList: res.data || [],
        productList: product.data || [],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        categoryList: [],
        productList: [],
      },
    };
  }
};
