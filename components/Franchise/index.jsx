// components/FranchiseSection.jsx
import { useState } from "react";

export default function FranchiseSection() {
    const [showCertificate1, setShowCertificate1] = useState(false);
    const [showCertificate2, setShowCertificate2] = useState(false);

    return (
        <>
            {/* Franchise Section - Mobile-First Responsive */}
            <section className="bg-white py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl">
                    
                    {/* Title - Compact & Responsive */}
                    <div className="text-center mb-6 sm:mb-8 md:mb-10">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1522] mb-2 leading-tight tracking-tight px-2">
                            SHAH'S HALAL OFFERING
                        </h2>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a1522] leading-tight tracking-tight px-2">
                            FRANCHISE OPPORTUNITIES NATIONWIDE
                        </h3>
                    </div>

                    {/* CTA Button - Responsive */}
                    <div className="flex justify-center mb-8 sm:mb-10 md:mb-14 px-2">
                        <a
                            href="/franchise-questionnaire"
                            className="bg-[#ea1228] text-white px-4 sm:px-6 md:px-10 py-2.5 sm:py-3 md:py-4 rounded text-xs sm:text-sm md:text-base font-bold hover:bg-[#c11123] transition-all duration-300 uppercase tracking-wide shadow-lg hover:shadow-xl text-center max-w-full"
                        >
                            CLICK HERE FOR FRANCHISE QUESTIONNAIRE
                        </a>
                    </div>

                    {/* Stats Grid - Fully Responsive */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-10 md:mb-14">
                        
                        {/* Stat 1 - Locations */}
                        <div className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center">
                            <div className="text-[#dcce05] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 leading-none">
                                50+
                            </div>
                            <div className="text-[#0a1522] text-sm sm:text-base md:text-lg font-semibold tracking-wide">
                                Locations
                            </div>
                        </div>

                        {/* Stat 2 - Authentic Halal Food */}
                        <div className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center">
                            <div className="flex justify-center items-center mb-2 sm:mb-3">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#f7f7f7] flex items-center justify-center overflow-hidden shadow-md">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center p-1">
                                        <img
                                            src="/images/thumbs/halal.png"
                                            alt="Authentic Halal Food"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-[#0a1522] text-sm sm:text-base md:text-lg font-semibold tracking-wide">
                                Authentic Halal Food
                            </div>
                        </div>

                        {/* Stat 3 - NCASS Member */}
                        <div className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center">
                            <div className="flex justify-center items-center mb-2 sm:mb-3">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
                                    <img
                                        src="/images/thumbs/ncass-logo.png"
                                        alt="NCASS Member"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                            <div className="text-[#0a1522] text-sm sm:text-base md:text-lg font-semibold tracking-wide">
                                I'm a Member
                            </div>
                        </div>

                        {/* Stat 4 - Years Experience */}
                        <div className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-6 md:p-8 text-center hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center">
                            <div className="text-[#ea1228] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 leading-none">
                                20+
                            </div>
                            <div className="text-[#0a1522] text-sm sm:text-base md:text-lg font-semibold tracking-wide">
                                Years Experience
                            </div>
                        </div>
                    </div>

                    {/* Certificates Section - Responsive */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                        
                        {/* Certificate 1 - Halal Certificate */}
                        <div className="bg-gray-50 rounded-lg p-5 sm:p-6 md:p-8 lg:p-10 text-center hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-center items-center mb-4 sm:mb-5">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-lg flex items-center justify-center shadow-lg">
                                    <svg
                                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 fill-[#ea1228]"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-[#0a1522] text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 tracking-wide leading-tight px-2">
                                HALAL CERTIFICATE
                            </h4>
                            <p className="text-[#0a1522] text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 font-medium px-2">
                                HALAL EUROPE CERTIFICATE (2025-2026)
                            </p>
                            <button
                                onClick={() => setShowCertificate1(true)}
                                className="bg-[#ea1228] text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded text-xs sm:text-sm md:text-base font-bold hover:bg-[#c11123] transition-all duration-300 uppercase tracking-wide shadow-md hover:shadow-lg"
                            >
                                PREVIEW
                            </button>
                        </div>

                        {/* Certificate 2 - Islamic Certificate */}
                        <div className="bg-gray-50 rounded-lg p-5 sm:p-6 md:p-8 lg:p-10 text-center hover:shadow-xl transition-all duration-300">
                            <div className="flex justify-center items-center mb-4 sm:mb-5">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-lg flex items-center justify-center shadow-lg">
                                    <svg
                                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 fill-[#ea1228]"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                                    </svg>
                                </div>
                            </div>
                            <h4 className="text-[#0a1522] text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 tracking-wide leading-tight px-2">
                                ISLAMIC CO-ORDINATING COUNCIL OF VICTORIA P/L
                            </h4>
                            <p className="text-[#0a1522] text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 font-medium px-2">
                                I.C.C.V (2024-2027)
                            </p>
                            <button
                                onClick={() => setShowCertificate2(true)}
                                className="bg-[#ea1228] text-white px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded text-xs sm:text-sm md:text-base font-bold hover:bg-[#c11123] transition-all duration-300 uppercase tracking-wide shadow-md hover:shadow-lg"
                            >
                                PREVIEW
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certificate Modals - Mobile Optimized */}
            {showCertificate1 && (
                <CertificateModal
                    title="HALAL EUROPE CERTIFICATE (2025-2026)"
                    onClose={() => setShowCertificate1(false)}
                />
            )}

            {showCertificate2 && (
                <CertificateModal
                    title="ISLAMIC CO-ORDINATING COUNCIL OF VICTORIA P/L - I.C.C.V (2024-2027)"
                    onClose={() => setShowCertificate2(false)}
                />
            )}
        </>
    );
}

// Certificate Modal Component - Fully Responsive
function CertificateModal({ title, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl my-4">
                
                {/* Modal Header - Compact */}
                <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between rounded-t-lg z-10">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[#0a1522] pr-4 leading-tight">
                        {title}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-700 text-2xl sm:text-3xl font-bold transition-colors duration-200 flex-shrink-0 w-8 h-8 flex items-center justify-center"
                        aria-label="Close modal"
                    >
                        ×
                    </button>
                </div>

                {/* Modal Content - Responsive */}
                <div className="p-4 sm:p-6 md:p-8">
                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8">
                        <p className="text-center text-gray-600 text-xs sm:text-sm md:text-base mb-4 font-medium">
                            Certificate preview would be displayed here
                        </p>
                        <div className="aspect-[8.5/11] bg-white rounded-lg shadow-xl flex items-center justify-center">
                            <div className="text-center p-4 sm:p-6 md:p-8">
                                <svg
                                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 fill-gray-300"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                                </svg>
                                <p className="text-gray-500 text-xs sm:text-sm md:text-base font-medium">
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
