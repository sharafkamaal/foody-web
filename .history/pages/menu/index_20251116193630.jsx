import { useState } from "react";
import Image from "next/image";

export default function Menu() {
  const [active, setActive] = useState("platters");
  const [cart, setCart] = useState([]);

  // WORKING ADD TO CART FUNCTION
  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    console.log("Added to cart:", item);
  };

  // SIDEBAR CATEGORIES
  const sidebarCategories = [
    { key: "platters", name: "Platters", img: "/images/categories/platters.png" },
    { key: "gyros", name: "Gyros", img: "/images/categories/gyros.png" },
    { key: "salads", name: "Salads", img: "/images/categories/Salads.png" }, // Case sensitive
    { key: "philly", name: "Philly", img: "/images/categories/sandwiches.png" },
    { key: "extras", name: "Extras", img: "/images/categories/extras.png" },
    { key: "drinks", name: "Drinks", img: "/images/categories/drinks.png" },
  ];

  // MENU ITEMS
  const menuItems = {
    platters: [
      {
        id: 1,
        name: "Chicken Over Rice",
        price: "$8.99",
        desc:
          "Juicy chicken marinated, grilled to perfection served over our signature aromatic basmati rice with salad.",
        img: "/images/platters/chicken-over-rice.png",
      },
      {
        id: 2,
        name: "Lamb Over Rice",
        price: "$8.99",
        desc:
          "Ground lamb grilled to perfection served over aromatic basmati rice and salad.",
        img: "/images/platters/Lamb-over-rice.png",
      },
      {
        id: 3,
        name: "Chicken & Lamb Mix Over Rice",
        price: "$8.99",
        desc:
          "Chicken and lamb grilled to perfection served over basmati rice and salad.",
        img: "/images/platters/chicken-lamb-mix-over-rice.png",
      },
      {
        id: 4,
        name: "Falafel Over Rice",
        price: "$6.99",
        desc:
          "Crispy falafel patties served over aromatic basmati rice and salad.",
        img: "/images/platters/falafel-over-rice.png",
      },
    ],

    gyros: [
      {
        id: 5,
        name: "Chicken Gyro",
        price: "$7.99",
        desc:
          'Juicy chicken grilled and served over 8" pita with salad and white sauce.',
        img: "/images/gyros/chicken-gyro.png",
      },
      {
        id: 6,
        name: "Lamb Gyro",
        price: "$7.99",
        desc:
          'Ground lamb grilled over 8" pita with salad and white sauce.',
        img: "/images/gyros/lamb-gyro.png",
      },
      {
        id: 7,
        name: "Chicken & Lamb Mix Gyro",
        price: "$7.99",
        desc:
          'Mix of chicken and lamb over 8" pita with salad and white sauce.',
        img: "/images/gyros/chicken-lamb-mix-gyro.png",
      },
      {
        id: 8,
        name: "Falafel on Pita",
        price: "$6.99",
        desc: 'Crispy falafel over 8" pita with salad and white sauce.',
        img: "/images/falafel-pita.png",
      },
    ],

    salads: [
      {
        id: 9,
        name: "Chicken Salad",
        price: "$8.99",
        desc: "Chicken grilled and served over fresh salad greens.",
        img: "/images/salads/chicken-salad.png",
      },
      {
        id: 10,
        name: "Lamb Salad",
        price: "$8.99",
        desc: "Ground lamb served over salad greens.",
        img: "/images/salads/lamb-salad.png",
      },
      {
        id: 11,
        name: "Chicken & Lamb Mix Salad",
        price: "$8.99",
        desc: "Combination of chicken and lamb over salad greens.",
        img: "/images/salads/chicken-lamb-mix-salad.jpg",
      },
      {
        id: 12,
        name: "Falafel Salad",
        price: "$6.99",
        desc: "Crispy falafel served over fresh salad greens.",
        img: "/images/salads/falafel-over-salad.jpg",
      },
    ],

    philly: [
      {
        id: 13,
        name: "Philly Cheese Steak",
        price: "$6.99",
        desc:
          'Seasoned beef grilled with veggies in toasted 8" Philly bread.',
        img: "/images/sandwiches/philly-cheese-steak.jpg",
      },
      {
        id: 14,
        name: "Chicken Philly",
        price: "$6.99",
        desc:
          'Juicy chicken grilled with veggies in toasted 8" Philly bread.',
        img: "/images/sandwiches/chicken-philly.jpg",
      },
      {
        id: 15,
        name: "Lamb Philly",
        price: "$6.99",
        desc:
          'Ground lamb grilled with veggies in toasted 8" Philly bread.',
        img: "/images/sandwiches/lamb-philly.png",
      },
      {
        id: 16,
        name: "Mix Philly",
        price: "$6.99",
        desc:
          'Chicken and lamb grilled with veggies in toasted 8" Philly bread.',
        img: "/images/sandwiches/chicken-lamb-mix-philly.png",
      },
    ],

    extras: [
      { id: 17, name: "Meat", price: "$3", desc: "Extra meat", img: "/images/extras/meat.jpg" },
      { id: 18, name: "Rice", price: "$2", desc: "Extra rice", img: "/images/extras/rice.png" },
      { id: 19, name: "Pita", price: "$1", desc: "Fresh pita bread", img: "/images/extras/pita.png" },
      { id: 20, name: "Falafel", price: "$1", desc: "Falafel patty", img: "/images/extras/falafel.png" },
      { id: 21, name: "Cheese", price: "$1", desc: "Melted cheese", img: "/images/extras/cheese.png" },
      { id: 22, name: "White Sauce", price: "$1", desc: "Signature sauce", img: "/images/extras/white-sauce.png" },
      { id: 23, name: "Red Spicy Sauce", price: "50¢", desc: "Spicy red sauce", img: "/images/extras/red-spicy-sauce.png" },
    ],

    drinks: [
      { id: 24, name: "Soda", price: "$1", desc: "330ml can", img: "/images/drinks/soda-can.png" },
      { id: 25, name: "Water", price: "$1", desc: "500ml bottle", img: "/images/drinks/water-bottle.png" },
    ],
  };

  return (
    <section className="py-10 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-[#0a1522]">Our Menu</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-lg p-4 rounded-xl border">
              {sidebarCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActive(category.key)}
                  className={`w-full flex items-center gap-4 p-3 mb-2 rounded-lg transition-all ${
                    active === category.key ? "bg-gray-100" : "hover:bg-gray-100"
                  }`}
                >
                  <Image
                    src={category.img}
                    alt={category.name}
                    width={50}
                    height={50}
                    className="rounded-lg object-cover"
                  />
                  <span
                    className={`font-semibold ${
                      active === category.key ? "text-[#ea1228]" : "text-gray-700"
                    }`}
                  >
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* MENU ITEMS */}
          <div className="lg:col-span-3 bg-gray-50 p-8 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-[#ea1228] mb-6">
              {sidebarCategories.find((c) => c.key === active)?.name}
            </h3>

            <div className="grid gap-6">
              {menuItems[active].map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow border p-4 flex flex-col sm:flex-row gap-6"
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={180}
                    height={180}
                    className="rounded-lg object-cover"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xl font-bold">{item.name}</h4>
                      <p className="text-gray-600 mt-1">{item.desc}</p>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <span className="text-[#ea1228] text-2xl font-bold">{item.price}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-[#ea1228] text-white px-5 py-2 rounded-lg hover:bg-[#c11123] transition"
                      >
                        Add to Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
