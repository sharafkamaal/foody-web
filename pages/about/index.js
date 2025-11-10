// pages/about/index.js
export default function About() {
  return (
    <>
      

      {/* Content Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                Shah&apos;s Halal Food UK is your ultimate destination for authentic and flavourful halal cuisine. 
                Here, every bite is a celebration of rich spices, fresh ingredients, and culinary passion.
              </p>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0a1522] mb-4 sm:mb-6 mt-8 sm:mt-12">
                Our Story
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                From our sizzling platters to our savoury wraps, we craft each dish with care and tradition. 
                Join us for a mouthwatering journey, where every meal tells a story of quality and taste.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#0a1522] mb-4 sm:mb-6 mt-8 sm:mt-12">
                Our Values
              </h2>
              <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#ea1228] font-bold mr-3">✓</span>
                  <span>100% Halal certified ingredients</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ea1228] font-bold mr-3">✓</span>
                  <span>Fresh, quality produce</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ea1228] font-bold mr-3">✓</span>
                  <span>Traditional recipes with modern flair</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#ea1228] font-bold mr-3">✓</span>
                  <span>Exceptional customer service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
