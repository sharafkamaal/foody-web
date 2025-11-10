// pages/franchise.jsx
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Franchise() {
  const [showCertificate1, setShowCertificate1] = useState(false);
  const [showCertificate2, setShowCertificate2] = useState(false);

  return (
    <>
      <Head>
        <title>Franchise Opportunities - Shah&apos;s Halal Food UK</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a1522] mb-2">
              SHAH&apos;S HALAL OFFERING
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a1522]">
              FRANCHISE OPPORTUNITIES NATIONWIDE
            </h2>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-12 sm:mb-16 lg:mb-20">
            <a
              href="#questionnaire"
              className="bg-[#ea1228] text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded text-sm sm:text-base md:text-lg font-bold hover:bg-[#c11123] transition uppercase tracking-wide"
            >
              CLICK HERE FOR FRANCHISE QUESTIONNAIRE
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 lg:mb-20">
            {/* Stat 1 - Locations */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 sm:p-8 text-center hover:shadow-lg transition">
              <div className="text-[#ea1228] text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
                50+
              </div>
              <div className="text-[#0a1522] text-base sm:text-lg font-semibold">
                Locations
              </div>
            </div>

            {/* Stat 2 - Authentic Halal Food */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 sm:p-8 text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#ffd700] flex items-center justify-center">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 fill-[#0a1522]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
              <div className="text-[#0a1522] text-base sm:text-lg font-semibold">
                Authentic Halal Food
              </div>
            </div>

            {/* Stat 3 - NCASS Member */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 sm:p-8 text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-3 sm:mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="45" fill="#22c55e" />
                    <path
                      d="M30 50 L45 65 L70 35"
                      stroke="white"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="text-[#0a1522] text-base sm:text-lg font-semibold">
                I&apos;m a Member
              </div>
            </div>

            {/* Stat 4 - Years Experience */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 sm:p-8 text-center hover:shadow-lg transition">
              <div className="text-[#ea1228] text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
                20+
              </div>
              <div className="text-[#0a1522] text-base sm:text-lg font-semibold">
                Years Experience
              </div>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {/* Certificate 1 - Halal Certificate */}
            <div className="bg-gray-100 rounded-lg p-6 sm:p-8 lg:p-10 text-center">
              <div className="mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <svg
                    className="w-12 h-12 sm:w-14 sm:h-14 fill-[#ea1228]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#0a1522] text-lg sm:text-xl font-bold mb-2">
                HALAL CERTIFICATE
              </h3>
              <p className="text-[#0a1522] text-sm sm:text-base mb-4 sm:mb-6">
                HALAL EUROPE CERTIFICATE (2025-2026)
              </p>
              <button
                onClick={() => setShowCertificate1(true)}
                className="bg-[#ea1228] text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm sm:text-base font-bold hover:bg-[#c11123] transition uppercase"
              >
                PREVIEW
              </button>
            </div>

            {/* Certificate 2 - Islamic Certificate */}
            <div className="bg-gray-100 rounded-lg p-6 sm:p-8 lg:p-10 text-center">
              <div className="mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center shadow-md">
                  <svg
                    className="w-12 h-12 sm:w-14 sm:h-14 fill-[#ea1228]"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-[#0a1522] text-lg sm:text-xl font-bold mb-2">
                ISLAMIC CO-ORDINATING COUNCIL OF VICTORIA P/L
              </h3>
              <p className="text-[#0a1522] text-sm sm:text-base mb-4 sm:mb-6">
                I.C.C.V (2024-2027)
              </p>
              <button
                onClick={() => setShowCertificate2(true)}
                className="bg-[#ea1228] text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm sm:text-base font-bold hover:bg-[#c11123] transition uppercase"
              >
                PREVIEW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal 1 */}
      {showCertificate1 && (
        <CertificateModal
          title="HALAL EUROPE CERTIFICATE (2025-2026)"
          onClose={() => setShowCertificate1(false)}
        />
      )}

      {/* Certificate Modal 2 */}
      {showCertificate2 && (
        <CertificateModal
          title="ISLAMIC CO-ORDINATING COUNCIL OF VICTORIA P/L - I.C.C.V (2024-2027)"
          onClose={() => setShowCertificate2(false)}
        />
      )}
    </>
  );
}

// Certificate Modal Component
function CertificateModal({ title, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-lg">
          <h3 className="text-lg sm:text-xl font-bold text-[#0a1522]">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl font-bold transition"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8">
          <div className="bg-gray-100 rounded-lg p-4 sm:p-6 lg:p-8">
            <p className="text-center text-gray-600 text-sm sm:text-base mb-4">
              Certificate preview would be displayed here
            </p>
            <div className="aspect-[8.5/11] bg-white rounded shadow-lg flex items-center justify-center">
              <div className="text-center p-8">
                <svg
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 fill-gray-300"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
                <p className="text-gray-500 text-sm sm:text-base">
                  Certificate Document
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
