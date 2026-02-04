
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  buttonText: string;
  theme: 'agency' | 'production';
}

const StarField = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 450 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() < 0.8 ? 1 : Math.random() < 0.95 ? 1.5 : 2.5,
      opacity: Math.random() * 0.7 + 0.1,
      animDuration: Math.random() * 5 + 2,
      animDelay: Math.random() * 5
    }));
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: star.size > 1.5 ? '0 0 3px rgba(255,255,255,0.7)' : 'none',
            animation: `twinkle ${star.animDuration}s infinite ease-in-out ${star.animDelay}s`
          }}
        />
      ))}
    </div>
  );
};

const Hero: React.FC<HeroProps> = ({ badge, titleLine1, titleLine2, description, buttonText, theme }) => {
  
  const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-20">
      
      {/* --- ATMOSPHERE LAYERS --- */}
      
      {/* 1. Deep Space Base */}
      <div className="absolute inset-0 bg-obsidian z-0">
         <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* 2. Dust / Star Field */}
      <StarField />

      {/* 3. The Spotlight System */}
      {/* Layer 3A: Wide Ambient Cone */}
      <div 
        className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[140%] h-[130vh] max-w-[1400px] pointer-events-none z-0 mix-blend-screen"
        style={{
          background: `radial-gradient(ellipse at 50% 10%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 50%, transparent 70%)`,
          filter: 'blur(60px)',
          opacity: 0.7
        }}
      />

      {/* Layer 3B: Core Beam */}
      <div 
        className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-full h-[140vh] max-w-[800px] pointer-events-none z-0 mix-blend-overlay opacity-50"
        style={{
          background: `conic-gradient(from 180deg at 50% -20%, transparent 43%, rgba(255,255,255,0.1) 48%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0.1) 52%, transparent 57%)`,
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 80%)',
        }}
      />
      
      {/* 4. Ambient Colored Glow */}
      <div 
        className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-15 pointer-events-none"
        style={{ backgroundColor: accentColor }}
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
           {/* Glow */}
           <div className="absolute inset-0 blur-3xl opacity-20 rounded-full" style={{ backgroundColor: accentColor }}></div>
           
           <svg 
             viewBox="0 0 100 100" 
             className="w-32 md:w-48 lg:w-56 h-auto relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
             xmlns="http://www.w3.org/2000/svg"
           >
              <defs>
                <linearGradient id="heroLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="50%" stopColor="#C0C0C0" />
                  <stop offset="100%" stopColor="#808080" />
                </linearGradient>
              </defs>
              <path d="M45 20 C60 10, 75 10, 85 25 L65 55 C55 65, 40 65, 30 50 Z" fill="url(#heroLogoGrad)" />
              <path d="M30 45 C45 35, 60 35, 70 50 L50 80 C40 90, 25 90, 15 75 Z" fill="url(#heroLogoGrad)" opacity="0.9" />
              <path d="M15 70 C30 60, 45 60, 55 75 L35 105 C25 115, 10 115, 0 100 Z" fill="url(#heroLogoGrad)" opacity="0.8" />
           </svg>
        </motion.div>

        {/* ENGLISH BRAND NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-english font-bold text-white tracking-tighter leading-none mb-4 drop-shadow-2xl"
        >
          EFFECT WAVE
        </motion.h1>

        {/* ENGLISH SUBTITLE (Box Removed) */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative mb-16"
        >
          <p className="relative z-10 text-xs md:text-sm lg:text-base font-english font-bold text-white uppercase tracking-[0.3em]">
            {theme === 'agency' ? 'AGENCY' : 'PRODUCTION'}
          </p>
        </motion.div>

        {/* ARABIC TITLE */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="relative inline-block mb-12 flex flex-col items-center"
        >
           {/* Badge */}
           <div className="text-accent text-sm font-bold tracking-wider mb-2" style={{ color: accentColor }}>{badge}</div>

           <h2 className="text-3xl md:text-5xl font-heading font-bold text-white drop-shadow-lg flex flex-col gap-2">
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
        </motion.div>

        {/* DESCRIPTION & CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-col items-center gap-8 max-w-xl"
        >
           <p className="text-silver/60 text-base md:text-lg leading-relaxed text-center font-light hidden md:block">
             {description}
           </p>

           <button 
             className="px-10 py-3.5 rounded-full text-white font-bold text-sm tracking-widest transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-silver/20"
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
