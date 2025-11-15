import { useState } from "react";
import Image from "next/image";

// Category images with jpg/png options
const categoryImages = {
  platters: { jpg: "/images/categories/platter.jpg", png: "/images/categories/platter.png" },
  gyros: { jpg: "/images/categories/gyro.jpg", png: "/images/categories/gyro.png" },
  salads: { jpg: "/images/categories/salad.jpg", png: "/images/categories/salad.png" },
  philly: { jpg: "/images/categories/sandwich.jpg", png: "/images/categories/sandwich.png" },
  extras: { jpg: "/images/categories/extras.jpg", png: "/images/categories/extras.png" },
  drinks: { jpg: "/images/categories/drinks.jpg", png: "/images/categories/drinks.png" },
};

// Function to pick the image type
function getCategoryImage(category: keyof typeof categoryImages, type: "jpg" | "png" = "jpg") {
  const imageObj = categoryImages[category];
  if (!imageObj) return "/images/categories/default.png"; // fallback
  return imageObj[type] || imageObj.jpg;
}

// Categories list
const categories = [
  { key: "platters", name: "Platters" },
  { key: "gyros", name: "Gyros" },
  { key: "salads", name: "Salads" },
  { key: "philly", name: "Philly" },
  { key: "extras", name: "Extras" },
  { key: "drinks", name: "Drinks" },
];

// Menu items (truncated for brevity)
const menuItems = {
  platters: [
    { id: 1, name: "Chicken Over Rice", price: "$8.99", desc: "Juicy chicken served over rice.", img: "/images/platters/chicken-over-rice.png" },
    { id: 2, name: "Lamb Over Rice", price: "$8.99", desc: "Ground lamb over rice.", img: "/images/platters/lamb-over-rice.png" },
  ],
  gyros: [
    { id: 5, name: "Chicken Gyro", price: "$7.99", desc: "Juicy chicken in pita.", img: "/images/chicken-gyro.jpg" },
  ],
  salads: [
    { id: 9, name: "Chicken Salad", price: "$8.99", desc: "Fresh chicken over salad.", img: "/images/chicken-salad.jpg" },
  ],
  philly: [
    { id: 13, name: "Philly Cheese Steak", price: "$6.99", desc: "Classic Philly sandwich.", img: "/images/philly-cheese-steak.jpg" },
  ],
  extras: [
    { id: 17, name: "Meat", price: "$3", desc: "Extra portion of meat", img: "/images/meat.jpg" },
  ],
  drinks: [
    { id: 24, name: "Soda 330ml can", price: "$1", desc: "Refreshing soda", img: "/images/soda.jpg" },
  ],
};

export default function Menu() {
  const [active, setActive] = useState<keyof typeof menuItems>("platters");

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Menu Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1522] mb-4">
            Our Menu
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
            All dishes are made with aromatic extra-long grain basmati rice and served with our signature sauces.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden sticky top-24">
              <div className="p-4">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    onClick={() => setActive(category.key as keyof typeof menuItems)}
                    className={`w-full flex items-center gap-4 p-3 mb-2 rounded-lg transition-all duration-300 relative ${
                      active === category.key ? "bg-gray-50" : "hover:bg-gray-50"
                    }`}
                  >
                    {/* Active Indicator */}
                    {active === category.key && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ea1228] rounded-r-full"></div>
                    )}
                    {/* Image */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                      <Image
                        src={getCategoryImage(category.key as keyof typeof categoryImages, "png")}
                        alt={category.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className={`text-left font-semibold text-base ${active === category.key ? "text-[#ea1228]" : "text-gray-700"}`}>
                      {category.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8 lg:p-10 shadow-lg">
              <h3 className="text-[#ea1228] text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 uppercase tracking-wide border-b-2 border-[#ea1228] pb-4">
                {categories.find(c => c.key === active)?.name}
              </h3>

              <div className="space-y-6">
                {menuItems[active]?.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200">
                    <div className="flex flex-col sm:flex-row gap-6">
                      {/* Image */}
                      <div className="w-full sm:w-48 h-48 flex-shrink-0 overflow-hidden bg-gray-100">
                        <Image
                          src={item.img}
                          alt={item.name}
                          width={192}
                          height={192}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>

                      {/* Details */}
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
