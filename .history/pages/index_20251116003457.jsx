import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import FranchiseSection from "../components/Franchise/index";

export default function Index({ categoryList, productList }) {
  const [activeCategory, setActiveCategory] = useState("Platters");

  // Complete menu data with image URLs added
  const menuItems = {
    "Platters": [
      {
        id: 1,
        title: "Chicken Over Rice",
        price: 8.99,
        desc: "A delicious meal of juicy chicken marinated with finest herbs and spices grilled to perfection served over our signature aromatic extra-long grain basmati rice, salad.",
        category: "Platters",
        image: "/images/platters/chicken-over-rice.png",
      },
      {
        id: 2,
        title: "Lamb Over Rice",
        price: 8.99,
        desc: "Delicious meal of ground lamb marinated with finest herbs and spices grilled to perfection served over our signature aromatic basmati rice, salad.",
        category: "Platters",
        image: "/images/platters/lamb-over-rice.png",
      },
      {
        id: 3,
        title: "Chicken & Lamb Mix Over Rice",
        price: 8.99,
        desc: "Delicious meal of juicy chicken and ground lamb marinated with finest herbs and spices, grilled to perfection and served over our signature aromatic basmati rice and salad.",
        category: "Platters",
        image: "/images/platters/chicken-lamb-mix-over-rice.png",
      },
      {
        id: 4,
        title: "Falafel Over Rice",
        price: 6.99,
        desc: "Delicious meal of Crispy falafel patties marinated with finest herbs and spices, grilled to perfection and served over our signature aromatic basmati rice and salad.",
        category: "Platters",
        image: "/images/platters/falafel-over-rice.png",
      },
    ],
    "Gyros": [
      {
        id: 5,
        title: "Chicken Gyro",
        price: 7.99,
        desc: "Juicy chicken marinated with finest herbs and spices and grilled to perfection served over 8\" pita with salad and white sauce.",
        category: "Gyros",
        image: "/images/gyros/chicken-gyro.png",
      },
      {
        id: 6,
        title: "Lamb Gyro",
        price: 7.99,
        desc: "Ground lamb marinated with finest herbs and spices grilled to perfection, over 8\" pita with salad and white sauce.",
        category: "Gyros",
        image: "/images/gyros/lamb-gyro.png",
      },
      {
        id: 7,
        title: "Chicken & Lamb Mix Gyro",
        price: 7.99,
        desc: "Juicy chicken and ground lamb marinated with finest herbs and spices, grilled to perfection over 8\" pita with salad and white sauce.",
        category: "Gyros",
        image: "/images/gyros/chicken-lamb-mix-gyro.png",
      },
      {
        id: 8,
        title: "Falafel on Pita",
        price: 6.99,
        desc: "Fresh Crispy falafel wrapped and served over 8\" pita with salad and white sauce.",
        category: "Gyros",
        image: "/images/gyros/falafel-on-pita.png",
      },
    ],
    "Salads": [
      {
        id: 9,
        title: "Chicken Salad",
        price: 8.99,
        desc: "Juicy chicken marinated with finest herbs and spices grilled to perfection served over fresh salad greens with flavorful dressing.",
        category: "Salads",
        image: "/images/salads/chicken-salad.png",
      },
      {
        id: 10,
        title: "Lamb Salad",
        price: 8.99,
        desc: "Ground lamb marinated with finest herbs and spices grilled to perfection served over fresh salad greens with flavorful dressing.",
        category: "Salads",
        image: "/images/salads/lamb-salad.png",
      },
      {
        id: 11,
        title: "Chicken & Lamb Mix Salad",
        price: 8.99,
        desc: "Juicy chicken and Ground lamb marinated with finest herbs and spices grilled to perfection served over fresh salad greens with flavorful dressing.",
        category: "Salads",
        image: "/images/salads/chicken-lamb-mix-salad.jpg",
      },
      {
        id: 12,
        title: "Falafel Over Salad",
        price: 6.99,
        desc: "Fresh Crispy falafel served over fresh salad greens with flavorful dressing.",
        category: "Salads",
        image: "/images/salads/falafel-over-salad.png",
      },
    ],
    "Sandwiches": [
      {
        id: 13,
        title: "Philly Cheese Steak",
        price: 6.99,
        desc: "Classic Philly sandwich with seasoned beef marinated with finest herbs and spices grilled with onion and pepper to perfection, melted Cheese, mixed with lettuce, Tomatoes and Cucumber in a toasted 8\" Philly bread with flavorful dressing.",
        category: "Sandwiches",
        image: "/images/sandwiches/philly-cheese-steak.png",
      },
      {
        id: 14,
        title: "Chicken Philly",
        price: 6.99,
        desc: "Juicy chicken marinated with finest herbs and spices grilled with Onion and pepper to perfection, mixed with lettuce, Tomatoes and Cucumber, in a toasted 8\" Philly bread with flavorful dressing.",
        category: "Sandwiches",
        image: "/images/sandwiches/chicken-philly.png",
      },
      {
        id: 15,
        title: "Lamb Philly",
        price: 6.99,
        desc: "Ground lamb marinated with finest herbs and spices grilled with Onion and pepper to perfection, mixed with lettuce, Tomatoes and Cucumber, in a toasted 8\" Philly bread with flavorful dressing.",
        category: "Sandwiches",
        image: "/images/sandwiches/lamb-philly.png",
      },
      {
        id: 16,
        title: "Chicken & Lamb Mix Philly",
        price: 6.99,
        desc: "Juicy chicken and ground lamb marinated with finest herbs and spices, grilled with Onion and pepper to perfection, mixed with lettuce, Tomatoes and Cucumber, in a toasted 8\" Philly bread with flavorful dressing.",
        category: "Sandwiches",
        image: "/images/sandwiches/chicken-lamb-mix-philly.png",
      },
    ],
    "Extras": [
      { id: 17, title: "Meat", price: 3.0, desc: "Extra portion of your choice of meat", category: "Extras", image: "/images/extras/meat.png" },
      { id: 18, title: "Rice", price: 2.0, desc: "Extra aromatic basmati rice", category: "Extras", image: "/images/extras/rice.png" },
      { id: 19, title: "Pita", price: 1.0, desc: "Fresh 8\" pita bread", category: "Extras", image: "/images/extras/pita.png" },
      { id: 20, title: "Falafel", price: 1.0, desc: "Crispy falafel patty", category: "Extras", image: "/images/extras/falafel.png" },
      { id: 21, title: "Cheese", price: 1.0, desc: "Melted cheese", category: "Extras", image: "/images/extras/cheese.png" },
      { id: 22, title: "White Sauce", price: 1.0, desc: "Signature Royal White Sauce", category: "Extras", image: "/images/extras/white-sauce.png" },
      { id: 23, title: "Red Spicy Sauce", price: 0.5, desc: "Spicy Red Sauce", category: "Extras", image: "/images/extras/red-spicy-sauce.png" },
    ],
    "Drinks": [
      { id: 24, title: "Soda Can (330ml)", price: 1.0, desc: "Refreshing soda", category: "Drinks", image: "/images/drinks/soda-can.png" },
      { id: 25, title: "Water Bottle (500ml)", price: 1.0, desc: "Pure bottled water", category: "Drinks", image: "/images/drinks/water-bottle.png" },
    ],
  };

  // Filter items by active category
  const filteredProducts = menuItems[activeCategory] || [];

  return (
    <>
      <Head>
        <title>Shah&apos;s Halal Food UK - Home</title>
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1c1d1d] to-[#1a2532] min-h-[500px] sm:min-h-[600px] flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Welcome to Shah&apos;s Halal Food UK
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300">
              Authentic halal cuisine crafted with passion and tradition
            </p>
            <Link
              href="/menu"
              className="inline-block bg-[#ea1228] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-[#c11123] transition"
            >
              View Our Menu
            </Link>
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
            {productList &&
              productList.slice(0, 8).map((product) => (
                <div
                  key={product._id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
                >
                  <div className="aspect-square relative overflow-hidden bg-gray-100">
                    {product.img && (
                      <Image
                        src={product.img}
                        alt={product.title}
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-110 transition-transform duration-300"
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

      {/* MENU SECTION */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#000000]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Menu Title */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Menu
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto">
              All dishes are made with aromatic extra-long grain basmati rice and served with our signature Royal White Sauce and spicy Red Sauce, crafted fresh daily for the perfect flavor balance.
            </p>
          </div>

          {/* Category Icons Row */}
          <div className="pb-6 mb-12">
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-10 py-4">
              {Object.keys(menuItems).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`flex flex-col items-center gap-3 min-w-[100px] flex-shrink-0 transition-all duration-300 ${activeCategory === category
                      ? "scale-110"
                      : "hover:scale-105"
                    }`}
                >
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                    <div
                      className={`w-full h-full rounded-full p-[3px] ${activeCategory === category
                          ? "bg-gradient-to-br from-[#ffa500] via-[#ff8c00] to-[#ff7700]"
                          : "bg-gradient-to-br from-[#999999] via-[#888888] to-[#777777]"
                        }`}
                    >
                      <div className="w-full h-full rounded-full bg-[#0a0a0a] p-[2px]">
                        <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                          {/* ✅ Replace emoji with category image */}
                          <Image
                            src={`/images/categories/${category.toLowerCase()}.png`}
                            alt={category}
                            width={80}
                            height={80}
                            style={{ objectFit: "cover" }}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`text-sm font-medium text-center ${activeCategory === category
                        ? "text-[#ffa500]"
                        : "text-white"
                      }`}
                  >
                    {category}
                  </span>
                </button>
              ))}
            </div>
          </div>


          {/* Menu Items Display */}
          <div className="bg-[#060606] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
            <h3 className="text-[#ea1228] text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 uppercase tracking-wide border-b-2 border-[#ea1228] pb-4">
              {activeCategory}
            </h3>

            <div className="space-y-6">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#2c3338] rounded-lg p-5 sm:p-6 hover:bg-[#3a4451] transition-all duration-300 border-l-4 border-[#ea1228]"
                >
                  <div className="flex justify-between items-start gap-4 flex-wrap">
                    {/* ✅ Image Section (Fixed) */}
                    <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden border border-gray-700 relative">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={112} // ~ w-28 (Tailwind ≈ 7rem)
                          height={112}
                          style={{ objectFit: "cover", borderRadius: "8px" }}
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-700 flex items-center justify-center text-white">
                          No Image
                        </div>
                      )}
                    </div>

                    {/* Text Section */}
                    <div className="flex-1 min-w-[200px]">
                      <h4 className="text-white font-bold text-lg sm:text-xl mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Price and Button */}
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-[#ffa500] font-bold text-2xl whitespace-nowrap">
                        ${item.price.toFixed(2)}
                      </span>
                      <button className="bg-[#ea1228] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#c11123] transition-all duration-300 shadow-lg hover:shadow-xl">
                        Add to Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-8 pt-6 border-t border-gray-600 text-center">
              <Link
                href="/menu"
                className="inline-block bg-[#ea1228] text-white px-10 py-4 rounded-lg font-bold text-base sm:text-lg uppercase tracking-wide hover:bg-[#c11123] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                VIEW FULL MENU
              </Link>
            </div>
          </div>


          {/* Franchise Section */}
          <FranchiseSection />

          {/* CTA Section */}
          <section className="bg-[#ea1228] py-12 sm:py-16 lg:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
                Visit Us Today
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
                Experience the authentic taste of halal cuisine at any of our
                locations
              </p>
              <a
                href="/locations"
                className="inline-block bg-white text-[#ea1228] px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition"
              >
                Find a Location
              </a>
            </div>
          </section>
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
