import { useState } from "react";
import Image from "next/image";

// Sidebar categories as flat objects including image paths
const sidebarCategories = [
  { key: "platters", name: "Platters", img: "/images/categories/platters.png" },
  { key: "gyros", name: "Gyros", img: "/images/categories/gyros.png" },
  { key: "salads", name: "Salads", img: "/images/categories/Salads.png" }, // case-sensitive filename
  { key: "philly", name: "Philly", img: "/images/categories/sandwiches.png" },
  { key: "extras", name: "Extras", img: "/images/categories/extras.png" },
  { key: "drinks", name: "Drinks", img: "/images/categories/drinks.png" },
];

// Original menuItems grouped by category remain unchanged
const menuItems = {
  platters: [
    {
      id: 1,
      name: "Chicken Over Rice",
      price: "$8.99",
      desc:
        "A delicious meal of juicy chicken marinated with finest herbs and spices grilled to perfection served over our signature aromatic extra-long grain basmati rice, salad.",
      img: "/images/platters/chicken-over-rice.png",
    },
    {
      id: 2,
      name: "Lamb Over Rice",
      price: "$8.99",
      desc:
        "Delicious meal of ground lamb marinated with finest herbs and spices grilled to perfection served over our signature aromatic basmati rice, salad.",
      img: "/images/platters/Lamb-over-rice.png",
    },
    {
      id: 3,
      name: "Chicken & Lamb Mix Over Rice",
      price: "$8.99",
      desc:
        "Delicious meal of juicy chicken and ground lamb marinated, grilled to perfection and served over our signature aromatic basmati rice and salad.",
      img: "/images/platters/chicken-lamb-mix-over-rice.png",
    },
    {
      id: 4,
      name: "Falafel Over Rice",
      price: "$6.99",
      desc:
        "Delicious meal of crispy falafel patties marinated with finest herbs and spices, grilled to perfection and served over our signature aromatic basmati rice and salad.",
      img: "/images/platters/falafel-over-rice.png",
    },
  ],
  gyros: [
    {
      id: 5,
      name: "Chicken Gyro",
      price: "$7.99",
      desc:
        'Juicy chicken marinated with the finest herbs and spices, grilled to perfection and served over 8" pita with salad and white sauce.',
      img: "/images/gyros/chicken-gyro.png",
    },
    {
      id: 6,
      name: "Lamb Gyro",
      price: "$7.99",
      desc:
        'Ground lamb marinated with the finest herbs and spices, grilled to perfection, over 8" pita with salad and white sauce.',
      img: "/images/gyros/lamb-gyro.jpg",
    },
    {
      id: 7,
      name: "Chicken & Lamb Mix Gyro",
      price: "$7.99",
      desc:
        'Juicy chicken and ground lamb marinated with the finest herbs and spices, grilled to perfection over 8" pita with salad and white sauce.',
      img: "/images/chicken-lamb-mix-gyro.jpg",
    },
    {
      id: 8,
      name: "Falafel on Pita",
      price: "$6.99",
      desc: 'Fresh crispy falafel wrapped and served over 8" pita with salad and white sauce.',
      img: "/images/falafel-pita.jpg",
    },
  ],
  salads: [
    {
      id: 9,
      name: "Chicken Salad",
      price: "$8.99",
      desc:
        "Juicy chicken marinated with finest herbs and spices grilled to perfection served over fresh salad greens with flavorful dressing.",
      img: "/images/chicken-salad.jpg",
    },
    {
      id: 10,
      name: "Lamb Salad",
      price: "$8.99",
      desc:
        "Ground lamb marinated with finest herbs and spices grilled to perfection served over fresh salad greens with flavorful dressing.",
      img: "/images/lamb-salad.jpg",
    },
    {
      id: 11,
      name: "Chicken & Lamb Mix Salad",
      price: "$8.99",
      desc:
        "Juicy chicken and Ground lamb marinated, grilled to perfection served over fresh salad greens with flavorful dressing.",
      img: "/images/chicken-lamb-mix-salad.jpg",
    },
    {
      id: 12,
      name: "Falafel Over Salad",
      price: "$6.99",
      desc: "Fresh crispy falafel served over fresh salad greens with flavorful dressing.",
      img: "/images/falafel-over-salad.jpg",
    },
  ],
  philly: [
    {
      id: 13,
      name: "Philly Cheese Steak",
      price: "$6.99",
      desc:
        "Classic Philly sandwich with seasoned beef marinated with herbs and spices, grilled with onion and pepper to perfection, melted Cheese, lettuce, tomatoes and cucumber in a toasted 8\" Philly bread with dressing.",
      img: "/images/philly-cheese-steak.jpg",
    },
    {
      id: 14,
      name: "Chicken Philly",
      price: "$6.99",
      desc:
        "Juicy chicken marinated with herbs and spices, grilled with onion and pepper to perfection, lettuce, tomatoes and cucumber in a toasted 8\" Philly bread with dressing.",
      img: "/images/chicken-philly.jpg",
    },
    {
      id: 15,
      name: "Lamb Philly",
      price: "$6.99",
      desc:
        "Ground lamb marinated with herbs and spices, grilled with onion and pepper to perfection, lettuce, tomatoes and cucumber in toasted 8\" Philly bread with dressing.",
      img: "/images/lamb-philly.jpg",
    },
    {
      id: 16,
      name: "Chicken & Lamb Mix Philly",
      price: "$6.99",
      desc:
        "Juicy chicken and ground lamb marinated, grilled with onion and pepper to perfection, lettuce, tomatoes and cucumber in a toasted 8\" Philly bread with dressing.",
      img: "/images/chicken-lamb-mix-philly.jpg",
    },
  ],
  extras: [
    {
      id: 17,
      name: "Meat",
      price: "$3",
      desc: "Extra portion of your choice of meat",
      img: "/images/meat.jpg",
    },
    { id: 18, name: "Rice", price: "$2", desc: "Extra aromatic basmati rice", img: "/images/rice.jpg" },
    { id: 19, name: "Pita", price: "$1 each", desc: 'Fresh 8" pita bread', img: "/images/pita.jpg" },
    { id: 20, name: "Falafel", price: "$1 each", desc: "Crispy falafel patty", img: "/images/falafel.jpg" },
    { id: 21, name: "Cheese", price: "$1", desc: "Melted cheese", img: "/images/cheese.jpg" },
    { id: 22, name: "White Sauce", price: "$1", desc: "Signature Royal White Sauce", img: "/images/white-sauce.jpg" },
    { id: 23, name: "Red Spicy Sauce", price: "50¢", desc: "Spicy Red Sauce", img: "/images/red-sauce.jpg" },
  ],
  drinks: [
    { id: 24, name: "Soda 330ml can", price: "$1", desc: "Refreshing soda", img: "/images/soda.jpg" },
    { id: 25, name: "Water 500ml bottle", price: "$1", desc: "Pure bottled water", img: "/images/water.jpg" },
  ],
};

export default function Menu() {
  const [active, setActive] = useState("platters");

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Menu Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1522] mb-4">Our Menu</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
            All dishes are made with aromatic extra-long grain basmati rice and served with our signature Royal White Sauce and spicy Red Sauce
          </p>
        </div>

        {/* Sidebar + Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* LEFT SIDEBAR - Category Menu */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden sticky top-24">
              <div className="p-4">
                {sidebarCategories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setActive(category.key)}
                    className={`w-full flex items-center gap-4 p-3 mb-2 rounded-lg transition-all duration-300 relative ${
                      active === category.key ? "bg-gray-50" : "hover:bg-gray-50"
                    }`}
                  >
                    {/* Red Active Indicator */}
                    {active === category.key && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ea1228] rounded-r-full"></div>
                    )}

                    {/* Category Image */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                      <Image
                        src={category.img}
                        alt={category.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                        priority
                      />
                    </div>

                    {/* Category Name */}
                    <span
                      className={`text-left font-semibold text-base ${
                        active === category.key ? "text-[#ea1228]" : "text-gray-700"
                      }`}
                    >
                      {category.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - Menu Items */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 lg:p-10 shadow-lg">
              <h3 className="text-[#ea1228] text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 uppercase tracking-wide border-b-2 border-[#ea1228] pb-4">
                {sidebarCategories.find((c) => c.key === active)?.name}
              </h3>

              <div className="space-y-6">
                {menuItems[active]?.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200"
                  >
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Product Image */}
                      <div className="w-full sm:w-48 h-48 flex-shrink-0 overflow-hidden bg-gray-100">
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={192}
                          height={192}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                          priority
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
                        <div>
                          <h4 className="text-[#0a1522] font-bold text-lg sm:text-xl mb-2">{item.name}</h4>
                          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                        </div>

                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                          <span className="text-[#ea1228] font-bold text-2xl">{item.price}</span>
                          <button className="bg-[#ea1228] text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#c11123] transition-all duration-300 shadow-md hover:shadow-lg">
                            Add to Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View Full Menu Button */}
              <div className="mt-8 pt-6 border-t border-gray-300 text-center">
                <a
                  href="/full-menu"
                  className="inline-block bg-[#ea1228] text-white px-10 py-4 rounded-lg font-bold text-base sm:text-lg uppercase tracking-wide hover:bg-[#c11123] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  VIEW FULL MENU
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
