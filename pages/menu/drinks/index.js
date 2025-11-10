// pages/menu/drinks.jsx
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function DrinksPage() {
  const [sortBy, setSortBy] = useState("menu_order");

  // Sample drinks data - replace with your API call
  const drinks = [
    {
      id: 1,
      title: "ICE Cola Can (330ml)",
      image: "/images/drinks/cola-ice-can.png",
      slug: "ice-classic-cola"
    },
    {
      id: 2,
      title: "ICE Lemon Can (330ml)",
      image: "/images/drinks/lemon-ice-can.png",
      slug: "ice-lemon"
    },
    {
      id: 3,
      title: "ICE Mango Can (330ml)",
      image: "/images/drinks/mango-ice-can.png",
      slug: "ice-mango"
    },
    {
      id: 4,
      title: "ICE Orange Can (330ml)",
      image: "/images/drinks/orange-ice-can.png",
      slug: "ice-orange"
    },
    {
      id: 5,
      title: "ICE Pro Max Can (330ml)",
      image: "/images/drinks/cola-pro-ice-can.png",
      slug: "ice-pro"
    },
    {
      id: 6,
      title: "Ice Strawberry Can (330ml)",
      image: "/images/drinks/strawberry-ice-can.png",
      slug: "ice-strawberry"
    },
    {
      id: 7,
      title: "Water 500ml",
      image: "/images/drinks/water.png",
      slug: "water"
    }
  ];

  return (
    <>
      <Head>
        <title>Drinks – Shah&apos;s Halal UK</title>
        <meta name="description" content="Browse our refreshing selection of drinks at Shah&apos;s Halal Food UK" />
      </Head>

      {/* Products Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Sort Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <p className="text-gray-600">
              Showing all {drinks.length} results
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#ea1228]"
              aria-label="Sort products"
            >
              <option value="menu_order">Default sorting</option>
              <option value="popularity">Sort by popularity</option>
              <option value="date">Sort by latest</option>
              <option value="price">Sort by price: low to high</option>
              <option value="price-desc">Sort by price: high to low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
            {drinks.map((drink) => (
              <Link
                key={drink.id}
                href={`/menu/${drink.slug}`}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-square relative overflow-hidden bg-gray-100 p-4">
                  <Image
                    src={drink.image}
                    alt={drink.title}
                    layout="fill"
                    objectFit="contain"
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-base sm:text-lg text-[#0a1522] group-hover:text-[#ea1228] transition-colors">
                    {drink.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Optional: Fetch drinks from API
export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?category=drinks`);
    const drinks = await res.json();

    return {
      props: {
        drinks: drinks || []
      }
    };
  } catch (error) {
    return {
      props: {
        drinks: []
      }
    };
  }
}
