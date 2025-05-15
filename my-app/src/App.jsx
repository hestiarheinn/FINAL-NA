import React, { useState } from "react";
import x52351 from "./assets/5235.jpg";
import x58274 from "./assets/58274.jpg";
import grayLogo from "./assets/gray-logo.png";
import background from "./assets/6025905.jpg";

export default function Desktop() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative">
        {/* Hero Section with Background */}
        <div 
          className="relative min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${background})` }}
        >
          {/* Navbar */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-white/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex-shrink-0">
                  <img className="h-10 w-auto" alt="Gray logo" src={grayLogo} />
                </div>
                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-black-900 hover:text-gray-700 p-2"
                  >
                    {isMobileMenuOpen ? (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    )}
                  </button>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-center space-x-8">
                    <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-lg font-medium transition-colors duration-200">Home</a>
                    <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-lg font-medium transition-colors duration-200">About</a>
                    <a href="#" className="text-gray-900 hover:text-gray-700 px-3 py-2 text-lg font-medium transition-colors duration-200">Features</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-lg">
                <a href="#" className="block px-3 py-2 text-lg font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50 rounded-md">Home</a>
                <a href="#" className="block px-3 py-2 text-lg font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50 rounded-md">About</a>
                <a href="#" className="block px-3 py-2 text-lg font-medium text-gray-900 hover:text-gray-700 hover:bg-gray-50 rounded-md">Features</a>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                Welcome to eBarangay!
              </h1>
              <p className="text-lg sm:text-xl text-gray-900 mb-8 max-w-2xl mx-auto">
                Access government services quickly and easily with just a few clicks, making your experience more convenient and connected.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
                  Login
                </button>
                <button className="px-8 py-3  bg-white border-2 text-gray-900 rounded-lg font-semibold hover:bg-gray-100  transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg">
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
              About eBarangay
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    A Partner for the People
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    At the heart of every government initiative is the people's welfare. With eBarangay, services are aligned with the essential needs of the community, offering avenues for residents to voice their concerns and engage with local governance. This platform promotes inclusivity and empowerment, ensuring that no resident is left behind.
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    A One-Stop Hub for Community Services
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Through eBarangay, residents can easily access a range of barangay services and information from a single digital platform. By integrating services from local government units (LGUs) and barangay offices, the platform exemplifies the shift towards a fully digitized government system, enhancing accessibility and convenience for every resident.
                  </p>
                </div>
              </div>
              <div className="relative hidden md:block">
                <img 
                  src={x52351} 
                  alt="Community service" 
                  className="rounded-lg shadow-xl w-full h-auto transform hover:scale-105 transition-transform duration-200" 
                />
                <img 
                  src={x58274} 
                  alt="Digital platform" 
                  className="absolute -bottom-6 -right-6 rounded-lg shadow-xl w-2/3 h-auto transform hover:scale-105 transition-transform duration-200" 
                />
              </div>
              <div className="md:hidden space-y-4">
                <img 
                  src={x52351} 
                  alt="Community service" 
                  className="rounded-lg shadow-xl w-full h-auto" 
                />
                <img 
                  src={x58274} 
                  alt="Digital platform" 
                  className="rounded-lg shadow-xl w-full h-auto" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
