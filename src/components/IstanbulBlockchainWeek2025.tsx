import React from 'react';

import img1 from '../assets/istanbul-blockchain-week-2025-1.jpg';

const images = [img1];

const IstanbulBlockchainWeek2025 = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-8">Istanbul Blockchain Week 2025</h1>
      <div className="grid grid-cols-1 gap-8">
        {images.map((src, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 hover:shadow-2xl transition-shadow">
            <img src={src} alt={`Istanbul Blockchain Week 2025 - ${idx+1}`} className="object-cover w-full h-96 rounded-lg mb-4" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default IstanbulBlockchainWeek2025; 