
import React from 'react';
import { motion } from 'framer-motion';
import { EffectWaveLogo } from './EffectWaveLogo';
import StarField from './StarField';

interface HeroProps {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  buttonText: string;
  theme: 'agency' | 'production';
}

const Hero: React.FC<HeroProps> = ({ badge, titleLine1, titleLine2, description, buttonText, theme }) => {
  
  const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';
  const buttonTextColor = theme === 'agency' ? 'text-black' : 'text-white';
  
  // Custom glow color: White for agency, Accent color (Red) for production
  // This applies to both the specific logo glow and the large ambient background glow
  const glowColor = theme === 'agency' ? '#FFFFFF' : accentColor;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-32 md:pt-20 md:pb-20">
      
      {/* --- ATMOSPHERE LAYERS --- */}
      
      {/* 1. Deep Space Base */}
      <div className="absolute inset-0 bg-obsidian z-0">
         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* 2. Dust / Star Field (Canvas Optimized) */}
      <StarField />

      {/* 3. The Spotlight System (Inverted / Downward "God Rays") */}
      
      {/* 3A. Source Glow (The "Bulb" at the top) */}
      <div 
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen opacity-40"
        style={{ 
          background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 60%)` 
        }}
      />

      {/* 3B. Outer Wide Cone (The New Lighter, Wider Layer) */}
      <div 
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[200vw] h-[150vh] pointer-events-none z-0 mix-blend-screen opacity-30"
        style={{
          // Widened significantly to 25%-75% to frame the middle beam
          background: `conic-gradient(from 0deg at 50% 0, transparent 25%, rgba(255,255,255,0.01) 30%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.01) 70%, transparent 75%)`,
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
        }}
      />

      {/* 3C. Middle Main Beam (The "A" Shape) */}
      <div 
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[200vw] h-[150vh] pointer-events-none z-0 mix-blend-screen"
        style={{
          // Widened to 35%-65% to ensure it covers the logo completely
          background: `conic-gradient(from 0deg at 50% 0, transparent 35%, rgba(255,255,255,0.03) 40%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.03) 60%, transparent 65%)`,
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 90%)',
        }}
      />
      
      {/* 3D. Intense Core Beam (Stronger light from top) */}
      <div 
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[200vw] h-[150vh] pointer-events-none z-0 mix-blend-screen"
        style={{
          // Narrower, brighter beam for the core: 47% to 53%
          background: `conic-gradient(from 0deg at 50% 0, transparent 47%, rgba(255,255,255,0.3) 49%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0.3) 51%, transparent 53%)`,
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)',
        }}
      />

      {/* 4. Ambient Colored Glow */}
      <div 
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ backgroundColor: glowColor }}
      />


      {/* --- CONTENT CENTER --- */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-0 md:mt-10">
        
        {/* LOGO */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8, y: 20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="mb-8 relative"
        >
           {/* Soft Glow - Reverted to subtle/normal opacity */}
           <div 
             className="absolute inset-0 blur-3xl opacity-20 rounded-full pointer-events-none" 
             style={{ backgroundColor: glowColor }}
           ></div>
           
           <EffectWaveLogo className="w-48 sm:w-64 md:w-96 lg:w-[28rem] h-auto relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" />
        </motion.div>

        {/* ENGLISH BRAND NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-english font-bold text-white tracking-tighter leading-none mb-4 drop-shadow-2xl"
        >
          EFFECT WAVE
        </motion.h1>

        {/* ENGLISH SUBTITLE (Box Removed) */}
        <motion.div
          dir="ltr"
          initial={{ opacity: 0, letterSpacing: '0.2em', textIndent: '0.2em' }}
          animate={{ opacity: 1, letterSpacing: '0.8em', textIndent: '0.8em' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative mb-12 md:mb-16 w-full"
        >
          <p className="relative z-10 text-xs md:text-xl lg:text-3xl font-english font-bold text-white uppercase text-center">
            {theme === 'agency' ? 'AGENCY' : 'PRODUCTION'}
          </p>
        </motion.div>

        {/* ARABIC TITLE - Conditionally Rendered */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="relative inline-block mb-12 flex flex-col items-center"
        >
           {/* Badge */}
           <div className="text-accent text-xs md:text-sm font-bold tracking-wider mb-2" style={{ color: accentColor }}>{badge}</div>

           {titleLine1 && (
             <>
               <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-white drop-shadow-lg flex flex-col gap-2">
                 <span>{titleLine1}</span>
                 <span>{titleLine2}</span>
               </h2>
               {/* Underline Accent */}
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: '60%' }}
                 transition={{ duration: 0.8, delay: 1.1 }}
                 className="h-1.5 absolute -bottom-4 right-0 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                 style={{ backgroundColor: accentColor }}
               />
             </>
           )}
        </motion.div>

        {/* DESCRIPTION & CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-col items-center gap-8 max-w-xl"
        >
           <p className="text-silver/60 text-sm md:text-base lg:text-lg leading-relaxed text-center font-light hidden md:block">
             {description}
           </p>

           <button 
             className={`px-8 py-3 md:px-10 md:py-3.5 rounded-full ${buttonTextColor} font-bold text-xs md:text-sm tracking-widest transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black`}
             style={{ 
               backgroundColor: accentColor,
               boxShadow: `0 0 20px ${accentColor}66`
             }}
           >
             {buttonText}
           </button>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-silver/20 hidden md:flex"
      >
        <span className="text-[9px] tracking-[0.4em] uppercase font-english">Scroll</span>
        <div 
          className="w-[1px] h-16" 
          style={{ background: `linear-gradient(to bottom, transparent, ${accentColor})` }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
