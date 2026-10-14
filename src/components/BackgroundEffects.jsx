import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 code-grid-bg opacity-30" />

      {/* Electric blue ambient glow - Top Right */}
      <div 
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #00D2FF 0%, #0284c7 50%, transparent 70%)' }}
      />

      {/* Deep navy ambient glow - Middle Left */}
      <div 
        className="absolute top-1/3 -left-48 w-[30rem] h-[30rem] rounded-full opacity-25 blur-[140px]"
        style={{ background: 'radial-gradient(circle, #1E3A8A 0%, #0F172A 60%, transparent 75%)' }}
      />

      {/* Electric cyan ambient glow - Bottom Right */}
      <div 
        className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full opacity-15 blur-[130px]"
        style={{ background: 'radial-gradient(circle, #00D2FF 0%, #1e40af 60%, transparent 80%)' }}
      />
    </div>
  );
}
