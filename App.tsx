
import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ServicesGrid from './components/ServicesGrid';
import Team from './components/Team';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import { Menu, Users, Eye, Target, PenTool, Monitor, Megaphone, Video, Aperture, Film, Clapperboard, Layers, Check, Star, Zap, Image, Mic2, Tv, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

type Theme = 'agency' | 'production';

// --- Data Configuration ---

const agencyContent = {
  hero: {
    badge: "وكالة تسويق إقليمية متكاملة",
    titleLine1: "موجة تأثير",
    titleLine2: "تصنع الفرق",
    description: "نعمل على تحويل العلامات التجارية إلى قصص مؤثرة تُلهم الجمهور، وتعزز الثقة، وتبني علاقات طويلة الأمد.",
    buttonText: "ابدأ رحلتك معنا"
  },
  about: [
    {
      title: "من نحن",
      icon: Users,
      text: "نحن فريق متخصص يجمع بين الاستراتيجية، الإبداع، والتكنولوجيا لتقديم حلول تسويقية مدروسة. نعتمد على فهم عميق للسوق لتحويل البيانات إلى نتائج ملموسة."
    },
    {
      title: "رؤيتنا",
      icon: Eye,
      text: "أن نكون الخيار الأول في تقديم حلول التسويق المتكاملة التي تساهم في تحقيق الأهداف التجارية وبناء علامات تجارية مؤثرة ومستدامة."
    },
    {
      title: "رسالتنا",
      icon: Target,
      text: "توفير استراتيجيات تسويقية مبتكرة وفعالة، ودعم عملائنا في تحقيق نتائج حقيقية من خلال الدمج بين الإبداع والاحترافية."
    }
  ],
  servicesTitle: "خدماتنا الأساسية",
  servicesSubtitle: "Our Core Services",
  services: [
    {
      title: "تطوير العلامات التجارية",
      subtitle: "Branding",
      icon: PenTool,
      features: [
        "تحليل السوق والمنافسين",
        "تحديد القيم والرسالة والرؤية",
        "صياغة هوية العلامة التجارية",
        "تصميم الهوية البصرية (شعار، ألوان)",
        "ضمان الاتساق في جميع قنوات التواصل"
      ]
    },
    {
      title: "التسويق الرقمي",
      subtitle: "Digital Marketing",
      icon: Monitor,
      features: [
        "التسويق بالمحتوى",
        "إدارة منصات التواصل الاجتماعي",
        "الإعلانات المدفوعة (Ads)",
        "تحليل الأداء وقياس النتائج",
        "استشارات تسويقية رقمية"
      ]
    },
    {
      title: "الاستشارات والاستراتيجية",
      subtitle: "Consultation & Strategy",
      icon: Megaphone,
      features: [
        "خطط تسويقية شاملة",
        "تحسين التواجد الرقمي",
        "تحليل تجربة المستخدم",
        "تطوير مسار المبيعات",
        "استشارات نمو الأعمال"
      ]
    }
  ],
  whyUs: [
    {
      title: "فهم عميق للسوق",
      desc: "نمتلك خبرة واسعة بالسوق المحلي والإقليمي تساعدنا على اتخاذ قرارات دقيقة.",
      icon: Layers
    },
    {
      title: "حلول متكاملة",
      desc: "نقدم كافة الخدمات تحت سقف واحد لضمان تناغم العمل وسرعة الإنجاز.",
      icon: Check
    },
    {
      title: "التزام بالجودة",
      desc: "لا نرضى بأقل من التميز في كل تفصيلة، من التخطيط وحتى التنفيذ النهائي.",
      icon: Star
    },
    {
      title: "بناء القيمة",
      desc: "تركيزنا ليس مجرد التنفيذ، بل خلق قيمة حقيقية ومضافة لعلامتك التجارية.",
      icon: Zap
    }
  ],
  team: {
    subtitle: "The Creative Force",
    title: "طاقة التأثير",
    description: "نحن فريق من المبدعين، الاستراتيجيين، والمصممين الذين يتشاركون شغفاً واحداً: صناعة علامات تجارية تترك بصمة لا تُنسى في السوق."
  },
  footerDesc: "نصنع التأثير… ونقوده باحتراف. وكالة تسويق متكاملة تهدف إلى تحويل العلامات التجارية إلى قصص نجاح ملهمة."
};

const productionContent = {
  hero: {
    badge: "استوديو إنتاج فني متكامل",
    titleLine1: "إبداع بصري",
    titleLine2: "يروي قصتك",
    description: "نحول الأفكار إلى تجارب بصرية سينمائية تخلد اللحظة وتوصل الرسالة بأعلى معايير الجودة والاحترافية والابتكار.",
    buttonText: "احجز استشارتك"
  },
  about: [
    {
      title: "فلسفتنا",
      icon: Aperture,
      text: "نؤمن بأن الصورة أبلغ من ألف كلمة. نسعى لالتقاط جوهر العلامة التجارية وتقديمه في قالب فني يجمع بين الجمال والوظيفة."
    },
    {
      title: "قدراتنا",
      icon: Video,
      text: "نمتلك أحدث معدات التصوير السينمائي وتقنيات الإضاءة والمونتاج، مما يمكننا من تنفيذ مشاريع ضخمة بأعلى جودة ممكنة."
    },
    {
      title: "نهجنا",
      icon: Clapperboard,
      text: "نهج قصصي فريد يركز على المشاعر والتفاصيل الدقيقة، لنضمن أن كل ثانية من الفيديو تحمل قيمة ومعنى للمشاهد."
    }
  ],
  servicesTitle: "خدمات الإنتاج",
  servicesSubtitle: "Production Services",
  services: [
    {
      title: "إنتاج الإعلانات",
      subtitle: "Commercial Production",
      icon: Clapperboard,
      features: [
        "إعلانات تلفزيونية وسينمائية",
        "كتابة السيناريو والإخراج",
        "تصميم الإنتاج والديكور",
        "اختيار الممثلين والمواقع",
        "إدارة الإنتاج الكاملة"
      ]
    },
    {
      title: "تغطية الفعاليات",
      subtitle: "Event Coverage",
      icon: Mic2,
      features: [
        "تصوير المؤتمرات والمعارض",
        "توثيق الفعاليات الحية",
        "بث مباشر عالي الجودة",
        "مقابلات وتغطيات خاصة",
        "ملخصات (Highlight Reels)"
      ]
    },
    {
      title: "المونتاج والمؤثرات",
      subtitle: "Post Production",
      icon: Film,
      features: [
        "مونتاج احترافي وتصحيح ألوان",
        "موشن جرافيك و 3D",
        "مؤثرات بصرية (VFX)",
        "هندسة صوتية ومكساج",
        "تجهيز المواد للبث"
      ]
    },
    {
      title: "تجهيز المواد للبث",
      subtitle: "Broadcasting",
      icon: Tv,
      features: [
        "تجهيز تقني للبث الفضائي",
        "إدارة غرف التحكم",
        "تنسيق البث المباشر",
        "أرشفة المواد الإعلامية",
        "الدعم الفني المباشر"
      ]
    }
  ],
  whyUs: [
    {
      title: "جودة سينمائية",
      desc: "نستخدم كاميرات وعدسات سينمائية لضمان صورة تضاهي الإنتاجات العالمية.",
      icon: Tv
    },
    {
      title: "فريق محترف",
      desc: "طاقم عمل من مخرجين ومصورين وفنيين ذوي خبرة عالية في المجال.",
      icon: Users
    },
    {
      title: "تقنيات متطورة",
      desc: "نواكب أحدث تقنيات التصوير والمونتاج لتقديم محتوى عصري ومبتكر.",
      icon: Aperture
    },
    {
      title: "سرعة في التنفيذ",
      desc: "نلتزم بالمواعيد النهائية مع الحفاظ على أعلى معايير الجودة في كل لقطة.",
      icon: Zap
    }
  ],
  team: {
    subtitle: "The Production Crew",
    title: "صناع الصورة",
    description: "مخرجون، مصورون، وفنانو مونتاج يجمعهم شغف واحد: إنتاج محتوى بصري يرتقي بالمعايير ويخطف الأنظار."
  },
  footerDesc: "نروي قصتك بعدسة احترافية. استوديو إنتاج متخصص في صناعة المحتوى المرئي والإعلاني الذي يترك أثراً."
};


export default function App() {
  const [theme, setTheme] = useState<Theme>('agency');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define colors based on PDF
  const colors = {
    agency: '#ebe125',    // Yellow/Gold
    production: '#b20600' // Red
  };

  const navItems = [
    { label: 'الرئيسية', href: '#' },
    { label: 'من نحن', href: '#' },
    { label: 'خدماتنا', href: '#' },
    { label: 'أعمالنا', href: '#' },
    { label: 'الفريق', href: '#' },
    { label: 'تواصل معنا', href: '#' },
  ];

  // Select content based on theme
  const content = theme === 'agency' ? agencyContent : productionContent;

  return (
    <div 
      className="min-h-screen bg-obsidian relative overflow-hidden font-body text-right transition-colors duration-700" 
      dir="rtl"
      style={{ 
        '--color-accent': colors[theme]
      } as React.CSSProperties}
    >
      {/* Background Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex flex-col md:flex-row justify-between items-center mix-blend-difference gap-4">
        
        {/* Logo Section */}
        <div className="flex flex-col">
          <svg 
             viewBox="0 0 100 100" 
             className="h-10 md:h-12 w-auto mb-1"
             xmlns="http://www.w3.org/2000/svg"
           >
              <defs>
                <linearGradient id="headerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="50%" stopColor="#808080" />
                  <stop offset="100%" stopColor="#FFFFFF" />
                </linearGradient>
              </defs>
              <path d="M45 20 C60 10, 75 10, 85 25 L65 55 C55 65, 40 65, 30 50 Z" fill="url(#headerLogoGrad)" />
              <path d="M30 45 C45 35, 60 35, 70 50 L50 80 C40 90, 25 90, 15 75 Z" fill="url(#headerLogoGrad)" opacity="0.9" />
              <path d="M15 70 C30 60, 45 60, 55 75 L35 105 C25 115, 10 115, 0 100 Z" fill="url(#headerLogoGrad)" opacity="0.8" />
           </svg>
          <span className="text-accent text-[0.6rem] font-english font-bold tracking-[0.3em] uppercase transition-colors duration-500">
            {theme === 'agency' ? 'AGENCY' : 'PRODUCTION'}
          </span>
        </div>

        {/* Navigation Dropdown Trigger */}
        <div className="relative">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 hover:text-accent transition-colors hidden md:block z-50 relative"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-4 w-56 bg-onyx/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-40 origin-top-left"
              >
                <div className="py-2">
                  {navItems.map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="block px-6 py-3 text-white hover:bg-white/5 hover:text-accent transition-colors duration-300 font-bold border-b border-white/5 last:border-0"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Bottom Navigation / Theme Switcher - Fixed at bottom, ultra-thin design */}
      <div className="fixed bottom-8 left-0 right-0 z-50 flex flex-col items-center gap-1 pointer-events-none">
         <div className="pointer-events-auto flex flex-col items-center gap-1">
            {/* Labels Row */}
            <div className="flex w-full justify-between px-1">
               {/* Media Label (Right side in RTL, over Production) */}
               <span 
                 className={`w-24 md:w-28 text-center text-[9px] font-sans font-thin uppercase tracking-widest transition-all duration-500 ${
                   theme === 'production' 
                     ? 'opacity-100 text-accent drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' 
                     : 'opacity-40 text-white'
                 }`}
               >
                 Media
               </span>

               {/* Marketing Label (Left side in RTL, over Agency) */}
               <span 
                 className={`w-24 md:w-28 text-center text-[9px] font-sans font-thin uppercase tracking-widest transition-all duration-500 ${
                   theme === 'agency' 
                     ? 'opacity-100 text-accent drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]' 
                     : 'opacity-40 text-white'
                 }`}
               >
                 Marketing
               </span>
            </div>

            {/* Theme Switcher Slider - Ultra Thin Version */}
            <div className="relative flex items-center bg-white/10 rounded-full p-[1px] border border-white/10 backdrop-blur-md shadow-2xl">
              {/* Production Button (Right in RTL) */}
              <button
                onClick={() => setTheme('production')}
                className={`relative z-10 px-4 py-1 rounded-full text-[9px] font-bold font-english tracking-wider transition-all duration-300 w-24 md:w-28 text-center ${
                  theme === 'production' 
                    ? 'text-white' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                PRODUCTION
              </button>
              
              {/* Agency Button (Left in RTL) */}
              <button
                onClick={() => setTheme('agency')}
                className={`relative z-10 px-4 py-1 rounded-full text-[9px] font-bold font-english tracking-wider transition-all duration-300 w-24 md:w-28 text-center ${
                  theme === 'agency' 
                    ? 'text-black' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                AGENCY
              </button>
              
              {/* Sliding Background */}
              <div 
                className={`absolute top-[1px] bottom-[1px] rounded-full bg-accent transition-all duration-500 ease-out shadow-[0_0_15px_rgba(0,0,0,0.3)]`}
                style={{
                  // In RTL, 50% puts it on the Right side (Production), 1px puts it on the Left side (Agency)
                  left: theme === 'production' ? '50%' : '1px',
                  width: 'calc(50% - 1px)',
                  boxShadow: theme === 'agency' 
                    ? '0 0 10px rgba(235, 225, 37, 0.4)' 
                    : '0 0 10px rgba(178, 6, 0, 0.4)'
                }}
              />
            </div>
         </div>
      </div>

      <main className="relative z-10">
        <Hero {...content.hero} theme={theme} />
        <About cards={content.about} />
        <ServicesGrid 
          title={content.servicesTitle} 
          subtitle={content.servicesSubtitle} 
          services={content.services} 
        />
        <Team {...content.team} />
        <WhyUs reasons={content.whyUs} />
      </main>

      <Footer description={content.footerDesc} />
    </div>
  );
}
