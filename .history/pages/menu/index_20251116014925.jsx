import { useState } from "react";
import Image from "next/image";

const categoryImages = {
  platters: { jpg: "/images/categories/platters.jpg", png: "/images/categories/platters.png" },
  gyros: { jpg: "/images/categories/gyros.jpg", png: "/images/categories/gyros.png" },
  salads: { jpg: "/images/categories/salads.jpg", png: "/images/categories/salads.png" },
  philly: { jpg: "/images/categories/sandwiches.jpg", png: "/images/categories/sandwiches.png" },
  extras: { jpg: "/images/categories/extras.jpg", png: "/images/categories/extras.png" },
  drinks: { jpg: "/images/categories/drinks.jpg", png: "/images/categories/drinks.png" },
};

function getCategoryImage(category, type = "png") {
  const imageObj = categoryImages[category];
  if (!imageObj) return "/images/categories/default.png";
  return imageObj[type] || imageObj.jpg;
}

const categories = [
  { key: "platters", name: "Platters" },
  { key: "gyros", name: "Gyros" },
  { key: "salads", name: "Salads" },
  { key: "philly", name: "Philly Sandwiches" },
  { key: "extras", name: "Extras" },
  { key: "drinks", name: "Drinks" },
];

export default function MenuSidebarTest() {
  const [active, setActive] = useState("platters");

  return (
    <div className="p-5 max-w-xs">
      {categories.map((category) => (
        <button
          key={category.key}
          onClick={() => setActive(category.key)}
          className={`w-full flex items-center gap-4 p-3 mb-2 rounded-lg transition-all duration-300 relative ${
            active === category.key ? "bg-gray-50" : "hover:bg-gray-50"
          }`}
        >
          {active === category.key && (
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 rounded-r-full"></div>
          )}
          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
            <Image
              src={getCategoryImage(category.key)}
              alt={category.name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className={`text-left font-semibold text-base ${
              active === category.key ? "text-red-600" : "text-gray-700"
            }`}
          >
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
}
