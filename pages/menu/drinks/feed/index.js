// pages/menu/drinks.jsx
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function DrinksPage({ drinks }) {
  const [sortBy, setSortBy] = useState("default");

  // Sort drinks based on selection
  const sortedDrinks = [...drinks].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.title.localeCompare(b.title);
      case "name-desc":
        return b.title.localeCompare(a.title);
      case "calories-asc":
        return a.calories - b.calories;
      case "calories-desc":
        return b.calories - a.calories;
      default:
        return 0;
    }
  });

  return (
    <>
      <Head>
        <title>Drinks – Shah&apos;s Halal UK</title>
        <meta name="description" content="Browse our refreshing selection of drinks including ICE Cola, Mango, Orange, Lemon, Strawberry, Pro Max and Water" />
        <meta name="language" content="en-US" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0a1522] to-[#1a2532] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            Drinks
          </h1>
          <p className="text-gray-300 text-center mt-4 text-base sm:text-lg">
            Refreshing beverages to complement your meal
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Sort Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 sm:mb-12">
            <p className="text-gray-600 font-medium">
              Showing all <span className="font-bold text-[#ea1228]">{drinks.length}</span> results
            </p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#ea1228] focus:border-transparent text-sm sm:text-base"
              aria-label="Sort products"
            >
              <option value="default">Default sorting</option>
              <option value="name-asc">Sort by name: A-Z</option>
              <option value="name-desc">Sort by name: Z-A</option>
              <option value="calories-asc">Sort by calories: low to high</option>
              <option value="calories-desc">Sort by calories: high to low</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {sortedDrinks.map((drink) => (
              <Link
                key={drink.id}
                href={drink.link}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8">
                  <div className="relative w-full h-full">
                    <Image
                      src={drink.image}
                      alt={drink.title}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="font-bold text-sm sm:text-base lg:text-lg text-[#0a1522] group-hover:text-[#ea1228] transition-colors mb-2 line-clamp-2">
                    {drink.title}
                  </h3>
                  <p className="text-[#ea1228] font-bold text-sm sm:text-base">
                    {drink.calories} kcal
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mt-2 line-clamp-2">
                    {drink.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Drink Details Modal/Expandable Section - Optional */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0a1522] mb-6 text-center">
              Our Refreshing Drinks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedDrinks.map((drink) => (
                <div key={drink.id} className="border-b border-gray-200 pb-6 last:border-0">
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 relative flex-shrink-0 bg-gray-100 rounded-lg p-2">
                      <Image
                        src={drink.image}
                        alt={drink.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-[#0a1522] mb-1">
                        {drink.title}
                      </h3>
                      <p className="text-[#ea1228] font-semibold text-sm mb-2">
                        {drink.calories} kcal per {drink.size}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {drink.fullDescription}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Server-side data fetching
export async function getServerSideProps() {
  // Drinks data extracted from RSS feed
  const drinks = [
    {
      id: 1,
      title: "ICE Cola Can (330ml)",
      slug: "ice-classic-cola",
      link: "/menu/ice-classic-cola",
      image: "/images/drinks/cola-ice-can.png",
      calories: 44,
      size: "can",
      description: "A refreshing, guilt-free classic cola made with subtle caffeine for an extra boost.",
      fullDescription: "A refreshing, guilt-free classic cola made with subtle caffeine for an extra boost. Enjoy the effervescent bubbles and timeless taste in every sip! Perfect for those cola cravings.",
      pubDate: "2025-03-14T14:58:43Z"
    },
    {
      id: 2,
      title: "ICE Pro Max Can (330ml)",
      slug: "ice-pro",
      link: "/menu/ice-pro",
      image: "/images/drinks/cola-pro-ice-can.png",
      calories: 1,
      size: "can",
      description: "A refreshing, guilt-free drink designed to support your healthy lifestyle.",
      fullDescription: "A refreshing, guilt-free drink designed to support your healthy lifestyle. With zero sugars and essential nutrients, it delivers maximum flavor with minimal calories. Perfect for a refreshing pick-me-up without the guilt!",
      pubDate: "2025-03-14T15:32:32Z"
    },
    {
      id: 3,
      title: "ICE Orange Can (330ml)",
      slug: "ice-orange-can-330ml",
      link: "/menu/ice-orange-can-330ml",
      image: "/images/drinks/orange-ice-can.png",
      calories: 45,
      size: "can",
      description: "Savor the vibrant burst of citrus with ICE Orange.",
      fullDescription: "Savor the vibrant burst of citrus with ICE Orange, a refreshing blend of tangy orange zest and effervescent bubbles. Perfectly balanced for a crisp, energizing experience with every sip! Ideal for those who crave a fruity, fizzy refreshment.",
      pubDate: "2025-03-14T15:55:37Z"
    },
    {
      id: 4,
      title: "ICE Mango Can (330ml)",
      slug: "ice-mango",
      link: "/menu/ice-mango",
      image: "/images/drinks/mango-ice-can.png",
      calories: 45,
      size: "can",
      description: "Indulge in the tropical sweetness of ICE Mango.",
      fullDescription: "Indulge in the tropical sweetness of ICE Mango, a refreshing burst of sun-kissed mango flavor with every sip. Enjoy the effervescent magic of carbonation that elevates your senses, delivering a crisp and invigorating drink without the guilt. Perfect for a refreshing escape!",
      pubDate: "2025-03-14T15:56:23Z"
    },
    {
      id: 5,
      title: "Ice Strawberry Can (330ml)",
      slug: "ice-strawberry",
      link: "/menu/ice-strawberry",
      image: "/images/drinks/strawberry-ice-can.png",
      calories: 45,
      size: "can",
      description: "Savor the delightful fusion of sweet strawberries and effervescent bubbles.",
      fullDescription: "Savor the delightful fusion of sweet strawberries and effervescent bubbles in every sip. The Ice Strawberry is the perfect refreshment for anyone craving a fruity, guilt-free treat. Enjoy the refreshing taste and bubbly excitement in this vibrant drink!",
      pubDate: "2025-03-14T15:57:39Z"
    },
    {
      id: 6,
      title: "ICE Lemon Can (330ml)",
      slug: "ice-lemon",
      link: "/menu/ice-lemon",
      image: "/images/drinks/lemon-ice-can.png",
      calories: 45,
      size: "can",
      description: "Refresh your senses with the zesty and tangy taste of ICE Lemon.",
      fullDescription: "Refresh your senses with the zesty and tangy taste of ICE Lemon. A sparkling, citrus-infused drink that delivers the perfect balance of tart and refreshing, with every sip. Ideal for a crisp and energizing boost!",
      pubDate: "2025-03-14T16:01:33Z"
    },
    {
      id: 7,
      title: "Water 500ml",
      slug: "water",
      link: "/menu/water",
      image: "/images/drinks/water.png",
      calories: 0,
      size: "bottle",
      description: "Stay refreshed and hydrated with our pure, crisp water.",
      fullDescription: "Stay refreshed and hydrated with our pure, crisp water. Ideal for quenching your thirst, this 500ml bottle provides a clean and natural way to stay hydrated throughout the day. Perfect for on-the-go hydration!",
      pubDate: "2025-03-14T16:02:53Z"
    }
  ];

  return {
    props: {
      drinks
    }
  };
}
