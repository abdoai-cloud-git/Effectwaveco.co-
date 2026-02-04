
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

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
  const buttonTextColor = theme === 'agency' ? 'text-black' : 'text-white';

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-20">
      
      {/* Atmosphere Layers */}
      <div className="absolute inset-0 bg-obsidian z-0">
         <div className="absolute inset-0 opacity-20 bg-noise brightness-150 contrast-150 mix-blend-overlay"></div>
      </div>

      <StarField />

      {/* Main Ambient Glow behind content */}
      <div 
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{ backgroundColor: accentColor }}
      />
      
      {/* The large circular gradient background seen in screenshot */}
      <div 
        className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[80vw] aspect-square rounded-full pointer-events-none opacity-[0.05]"
        style={{ background: `radial-gradient(circle at center, ${accentColor} 0%, transparent 70%)` }}
      />

      {/* --- CONTENT CENTER --- */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-0 md:mt-10">
        
        {/* LOGO */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="mb-6"
        >
           <Logo className="w-40 md:w-56 h-auto" glow={true} />
        </motion.div>

        {/* ENGLISH BRAND NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-english font-bold text-white tracking-tighter leading-none mb-2 drop-shadow-2xl"
        >
          EFFECT WAVE
        </motion.h1>

        {/* THEME LABEL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <p className="text-sm md:text-base font-english font-bold text-white uppercase tracking-[0.6em]">
            {theme === 'agency' ? 'AGENCY' : 'PRODUCTION'}
          </p>
        </motion.div>

        {/* ARABIC CONTENT SECTION */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="flex flex-col items-center mb-10"
        >
           {/* Badge */}
           <div className="text-accent text-sm font-bold tracking-wider mb-2" style={{ color: accentColor }}>
             {badge}
           </div>

           <h2 className="text-4xl md:text-6xl font-heading font-bold text-white drop-shadow-lg mb-6">
             {titleLine1}<br />{titleLine2}
           </h2>
           
           {/* The solid accent line from the screenshot */}
           <motion.div 
             initial={{ width: 0 }}
             animate={{ width: 280 }}
             transition={{ duration: 1, delay: 1.2, ease: "circOut" }}
             className="h-1.5 rounded-full"
             style={{ backgroundColor: accentColor }}
           />
        </motion.div>

        {/* CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-6"
        >
           <button 
             className={`px-12 py-4 rounded-full ${buttonTextColor} font-bold text-lg tracking-wide transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 shadow-2xl`}
             style={{ 
               backgroundColor: accentColor,
               boxShadow: `0 10px 40px ${accentColor}33`
             }}
           >
             {buttonText}
           </button>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] tracking-[0.5em] uppercase font-english text-white">Scroll</span>
        <div 
          className="w-[2px] h-20" 
          style={{ background: `linear-gradient(to bottom, transparent, ${accentColor}, transparent)` }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
