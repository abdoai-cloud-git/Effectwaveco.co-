
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PhilosophyPage from './pages/PhilosophyPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import { EffectWaveLogo } from './components/EffectWaveLogo';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const [theme, setTheme] = useState<'agency' | 'production'>('agency');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const location = useLocation();

  // Colors configuration
  const colors = {
    agency: '#ebe125',    // Yellow
    production: '#b20600' // Red
  };

  const navItems = [
    { label: 'الرئيسية', path: '/' },
    { label: 'خدماتنا', path: '/services' },
    { label: 'من نحن', path: '/about' },
    { label: 'فلسفتنا', path: '/philosophy' },
    { label: 'فريق العمل', path: '/team' },
    { label: 'تواصل معنا', path: '/contact' },
  ];

  // Scroll listener for navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeChange = (newTheme: 'agency' | 'production') => {
    setTheme(newTheme);
    setHasInteracted(true);
  };

  // Navbar visibility condition: always show if scrolled, menu open, or not on home page
  const isNavbarVisible = isScrolled || isMenuOpen || location.pathname !== '/';

  return (
    <div 
      className="bg-obsidian min-h-screen text-white overflow-x-hidden font-body selection:bg-accent selection:text-black dir-rtl transition-colors duration-700"
      style={{ 
        '--color-accent': colors[theme]
      } as React.CSSProperties}
    >
      <ScrollToTop />
      
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all duration-500 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm border-b border-white/5 ${
          isNavbarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <Link to="/" className="flex items-center gap-4 group">
             <div className="text-2xl font-bold font-heading tracking-wider flex items-center gap-2">
                <EffectWaveLogo className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span>EFFECT WAVE</span>
             </div>
        </Link>

        <div className="relative pointer-events-auto">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 hover:text-accent transition-colors block z-50 relative focus:outline-none"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-4 w-56 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-40 origin-top-left"
              >
                <div className="py-2">
                  {navItems.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-6 py-3 text-white hover:bg-white/10 hover:text-accent transition-colors duration-300 font-bold border-b border-white/5 last:border-0 text-right"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Bottom Navigation / Theme Switcher */}
      {/* Force LTR direction for this component to ensure Media/Production is Left and Marketing/Agency is Right */}
      <div className="fixed bottom-10 left-0 right-0 z-50 flex flex-col items-center gap-1 pointer-events-none" dir="ltr">
         <div className="pointer-events-auto flex flex-col items-center gap-1">
            
            {/* Labels Row */}
            <div className="flex w-full justify-between px-2">
               {/* Left: Media (Production) */}
               <span 
                 className={`w-32 text-center text-[10px] font-sans uppercase tracking-widest transition-all duration-500 ${
                   theme === 'production' ? 'text-accent opacity-100 font-bold' : 'text-white opacity-30 font-thin'
                 }`}
               >
                 Media
               </span>

               {/* Right: Marketing (Agency) */}
               <span 
                 className={`w-32 text-center text-[10px] font-sans uppercase tracking-widest transition-all duration-500 ${
                   theme === 'agency' ? 'text-accent opacity-100 font-bold' : 'text-white opacity-30 font-thin'
                 }`}
               >
                 Marketing
               </span>
            </div>

            {/* Switcher Slider */}
            <div className="relative flex items-center bg-white/5 rounded-full p-[2px] border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden group">
              
              {/* Left Button: Production */}
              <button
                onClick={() => handleThemeChange('production')}
                className={`relative z-20 px-4 py-1.5 rounded-full text-[9px] font-bold font-english tracking-widest transition-all duration-300 w-32 text-center focus:outline-none ${
                  theme === 'production' ? 'text-white' : 'text-white/40 hover:text-white'
                }`}
              >
                PRODUCTION
              </button>
              
              {/* Right Button: Agency */}
              <button
                onClick={() => handleThemeChange('agency')}
                className={`relative z-20 px-4 py-1.5 rounded-full text-[9px] font-bold font-english tracking-widest transition-all duration-300 w-32 text-center focus:outline-none ${
                  theme === 'agency' ? 'text-black' : 'text-white/40 hover:text-white'
                }`}
              >
                AGENCY
              </button>
              
              {/* Sliding Pill */}
              <motion.div 
                animate={{
                  // Production is Left (2px), Agency is Right (50% + 1px)
                  left: theme === 'production' ? '2px' : 'calc(50% + 1px)',
                  // Interaction Hint: Nudge towards the other option if not interacted yet
                  x: !hasInteracted ? (theme === 'agency' ? [0, -30, 0] : [0, 30, 0]) : 0,
                  backgroundColor: theme === 'production' ? colors.production : colors.agency,
                  boxShadow: theme === 'production'
                    ? `0 0 20px ${colors.production}66`
                    : `0 0 20px ${colors.agency}66`
                }}
                transition={{
                  left: { type: "spring", stiffness: 350, damping: 30 },
                  x: { 
                    duration: 1.5, 
                    repeat: !hasInteracted ? Infinity : 0, 
                    repeatDelay: 2.5, 
                    ease: "easeInOut",
                    delay: 2 // Wait 2s before starting hint
                  },
                  backgroundColor: { duration: 0.3 }
                }}
                className="absolute top-[2px] bottom-[2px] rounded-full z-10"
                style={{
                  width: 'calc(50% - 3px)',
                }}
              />
            </div>
         </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.main 
          key={theme}
          className="relative z-10 pb-24 min-h-screen"
          initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.99 }}
          animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.99 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Routes>
            <Route path="/" element={<HomePage theme={theme} />} />
            <Route path="/about" element={<AboutPage theme={theme} />} />
            <Route path="/services" element={<ServicesPage theme={theme} />} />
            <Route path="/philosophy" element={<PhilosophyPage theme={theme} />} />
            <Route path="/team" element={<TeamPage theme={theme} />} />
            <Route path="/contact" element={<ContactPage theme={theme} />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer description="نحن نصنع تجارب بصرية وصوتية تترك أثراً لا يمحى." />
    </div>
  );
}

function App() {
  // Using HashRouter to ensure routing works in all preview environments
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
