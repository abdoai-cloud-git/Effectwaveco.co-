
import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ServicesGrid from './components/ServicesGrid';
import Team from './components/Team';
import WhyUs from './components/WhyUs';
import Footer from './components/Footer';
import Logo from './components/Logo';
import { Menu, Users, Eye, Target, PenTool, Monitor, Megaphone, Video, Aperture, Film, Clapperboard, Layers, Check, Star, Zap, Image, Mic2, Tv, X, BarChart3, Globe, Sparkles } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

type Theme = 'agency' | 'production';

// --- Data Configuration ---

const agencyContent = {
  hero: {
    badge: "استثمار رائد | A Groundbreaking Investment",
    titleLine1: "موجة تأثير",
    titleLine2: "نصنع الفرق",
    description: "في عالم أصبحت فيه الصورة والرسالة والتوقيت عوامل حاسمة، نقدم فهماً عميقاً للسوق لبناء تأثير حقيقي ومستدام للعلامات التجارية.",
    buttonText: "ابدأ رحلتك معنا"
  },
  about: [
    {
      title: "من نحن",
      icon: Users,
      text: "موجة تأثير وكالة رائدة في التسويق والإعلام، تقدم حلولاً مبتكرة تساعد العلامات التجارية والمؤسسات على التواصل بفعالية وخلق تأثير حقيقي ومستدام."
    },
    {
      title: "فلسفتنا",
      icon: Sparkles,
      text: "التأثير يبدأ من الفهم. الإعلام الفعّال هو نتيجة قراءة دقيقة للسوق وسلوك الجمهور. نسعى لتقديم حلول مبنية على البيانات والتحليل مع لمسة إبداعية."
    },
    {
      title: "منصاتنا",
      icon: Layers,
      text: "أنشأنا منصات متخصصة كأدوات بحث تسويقي: 'Side Effect' للمجال الطبي، و'روّاد' (قريباً) للاقتصاد وريادة الأعمال، لفهم ديناميكية السوق."
    }
  ],
  servicesTitle: "حلول التسويق والاستراتيجية",
  servicesSubtitle: "Marketing Solutions",
  services: [
    {
      title: "الاستراتيجيات التسويقية",
      subtitle: "Strategic Planning",
      icon: Target,
      features: [
        "دراسة السوق وتحليل الجمهور",
        "بناء الخطط وتحديد الرسائل",
        "تحليل المنافسين والتوجهات",
        "بناء استراتيجيات النمو",
        "قياس النتائج وتطوير الأداء"
      ]
    },
    {
      title: "التسويق الرقمي",
      subtitle: "Digital Marketing",
      icon: Monitor,
      features: [
        "إدارة حسابات التواصل الاجتماعي",
        "صناعة المحتوى الإبداعي",
        "إدارة الحملات الرقمية (Ads)",
        "تحليل الأداء الرقمي",
        "بناء الهوية الرقمية المتكاملة"
      ]
    },
    {
      title: "المؤتمرات والفعاليات",
      subtitle: "Events & PR",
      icon: Megaphone,
      features: [
        "تخطيط وتنفيذ المؤتمرات",
        "إدارة المعارض والفعاليات",
        "التغطية الإعلامية للفعاليات",
        "العلاقات العامة",
        "إدارة السمعة المؤسسية"
      ]
    },
    {
        title: "الهوية البصرية",
        subtitle: "Branding",
        icon: PenTool,
        features: [
          "تصميم الشعارات",
          "أدلة الهوية البصرية",
          "المواد التسويقية",
          "تطبيقات الهوية",
          "استراتيجية العلامة التجارية"
        ]
      }
  ],
  whyUs: [
    {
      title: "التأثير يبدأ من الفهم",
      desc: "لا نخاطب السوق قبل أن نفهمه بدقة، معتمدين على البيانات والتحليل.",
      icon: Eye
    },
    {
      title: "استثمار رائد",
      desc: "العمل معنا ليس مجرد خدمة، بل استثمار حقيقي يعود بقيمة مستدامة.",
      icon: Star
    },
    {
      title: "إبداع وتحليل",
      desc: "نربط الإبداع الفني بالتحليل السوقي لضمان نتائج ملموسة.",
      icon: BarChart3
    },
    {
      title: "قيمة حقيقية",
      desc: "نقدم قيمة حقيقية وشراكة طويلة الأمد، لا مجرد خدمات مؤقتة.",
      icon: Check
    }
  ],
  team: {
    subtitle: "Leadership Team",
    title: "فريق يصنع التأثير",
    description: "فريق يتكون من مختصين في الإعلام، التسويق، التخطيط، والإدارة، يعملون معًا بعقلية استثمارية لبناء مشاريع ذات قيمة."
  },
  footerDesc: "نصنع التأثير… ونفهم السوق قبل أن نخاطبه. وكالة رائدة تقدم حلولاً مبتكرة مبنية على المعرفة."
};

const productionContent = {
  hero: {
    badge: "إبداع بصري يروي قصتك",
    titleLine1: "إعلام هادف",
    titleLine2: "وإنتاج متكامل",
    description: "نحول الأفكار إلى تجارب بصرية، سمعية، وحسية. من الإعلانات التلفزيونية إلى الموشن جرافيك والبودكاست.",
    buttonText: "احجز استشارتك"
  },
  about: [
    {
      title: "رؤيتنا الإنتاجية",
      icon: Aperture,
      text: "أن نكون الخيار الأول في صناعة المحتوى المرئي والمسموع الذي يجمع بين الجودة السينمائية والرسالة الهادفة التي تليق بالعلامات التجارية."
    },
    {
      title: "قدراتنا",
      icon: Video,
      text: "نمتلك أحدث التقنيات في التصوير، المونتاج، والمؤثرات البصرية، بالإضافة إلى استوديوهات صوتية متكاملة لضمان أعلى معايير الجودة."
    },
    {
      title: "الجودة الفنية",
      icon: Film,
      text: "نركز على أدق التفاصيل الفنية، من الإضاءة وتصحيح الألوان إلى هندسة الصوت، لنضمن تجربة مشاهدة واستماع استثنائية."
    }
  ],
  servicesTitle: "خدمات الإنتاج الفني",
  servicesSubtitle: "Creative Production",
  services: [
    {
      title: "الإنتاج الإعلامي",
      subtitle: "Media Production",
      icon: Clapperboard,
      features: [
        "الإعلانات التجارية والتوعوية",
        "البرامج التلفزيونية والرقمية",
        "المسلسلات والأفلام القصيرة",
        "الأفلام الوثائقية",
        "التغطيات الإعلامية الميدانية"
      ]
    },
    {
      title: "الإنتاج الفني",
      subtitle: "Art & VFX",
      icon: Film,
      features: [
        "موشن جرافيك 2D",
        "فيديوهات 3D للمنتجات",
        "المعالجة البصرية (Coloring)",
        "المؤثرات الخاصة (VFX)",
        "الإخراج والتنفيذ الفني"
      ]
    },
    {
      title: "الصوت والبودكاست",
      subtitle: "Audio & Podcast",
      icon: Mic2,
      features: [
        "إنتاج بودكاست (صوتي ومرئي)",
        "التعليق الصوتي (Voice Over)",
        "المكساج والمعالجة الصوتية",
        "تسجيل الأعمال الصوتية",
        "تجهيز الصوت للحملات"
      ]
    },
    {
      title: "المطبوعات والتصميم",
      subtitle: "Print & Design",
      icon: Image,
      features: [
        "تصميم المطبوعات",
        "الكتيبات والنشرات الدعائية",
        "اللوحات الإعلانية",
        "تصميم مواد المعارض",
        "الإنتاج الطباعي"
      ]
    }
  ],
  whyUs: [
    {
      title: "جودة سينمائية",
      desc: "نستخدم أحدث الكاميرات والتقنيات لضمان صورة تضاهي الإنتاجات العالمية.",
      icon: Tv
    },
    {
      title: "فريق متخصص",
      desc: "كفاءات إبداعية من مخرجين وفنيين ومصممين بخبرات واسعة.",
      icon: Users
    },
    {
      title: "حلول متكاملة",
      desc: "من الفكرة والسيناريو إلى التصوير والمونتاج وحتى الطباعة.",
      icon: Layers
    },
    {
      title: "التزام بالمواعيد",
      desc: "نحترم الوقت ونضمن تسليم المشاريع في مواعيدها بدقة واحترافية.",
      icon: Zap
    }
  ],
  team: {
    subtitle: "Creative Crew",
    title: "شركاء الإبداع",
    description: "نعمل مع شبكة من الكفاءات الإبداعية والتنفيذية لضمان جودة العمل وتحقيق أفضل النتائج في كل مشروع."
  },
  footerDesc: "نحول الإعلام والتسويق إلى قيمة حقيقية. استوديو إنتاج متكامل يروي قصتك باحترافية."
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
        <div className="flex flex-col items-center">
          <Logo className="h-10 md:h-12 w-auto mb-1" />
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

      {/* Bottom Navigation / Theme Switcher */}
      <div className="fixed bottom-8 left-0 right-0 z-50 flex flex-col items-center gap-1 pointer-events-none">
         <div className="pointer-events-auto flex flex-col items-center gap-1">
            <div className="flex w-full justify-between px-1">
               <span 
                 className={`w-24 md:w-28 text-center text-[9px] font-sans font-thin uppercase tracking-widest transition-all duration-500 ${
                   theme === 'production' ? 'opacity-100 text-accent' : 'opacity-40 text-white'
                 }`}
               >
                 Media
               </span>
               <span 
                 className={`w-24 md:w-28 text-center text-[9px] font-sans font-thin uppercase tracking-widest transition-all duration-500 ${
                   theme === 'agency' ? 'opacity-100 text-accent' : 'opacity-40 text-white'
                 }`}
               >
                 Marketing
               </span>
            </div>
            <div className="relative flex items-center bg-white/10 rounded-full p-[1px] border border-white/10 backdrop-blur-md shadow-2xl">
              <button onClick={() => setTheme('production')} className={`relative z-10 px-4 py-1 rounded-full text-[9px] font-bold font-english tracking-wider transition-all duration-300 w-24 md:w-28 text-center ${theme === 'production' ? 'text-white' : 'text-white/60'}`}>
                PRODUCTION
              </button>
              <button onClick={() => setTheme('agency')} className={`relative z-10 px-4 py-1 rounded-full text-[9px] font-bold font-english tracking-wider transition-all duration-300 w-24 md:w-28 text-center ${theme === 'agency' ? 'text-black' : 'text-white/60'}`}>
                AGENCY
              </button>
              <div 
                className={`absolute top-[1px] bottom-[1px] rounded-full bg-accent transition-all duration-500 ease-out shadow-[0_0_15px_rgba(0,0,0,0.3)]`}
                style={{
                  left: theme === 'production' ? '50%' : '1px',
                  width: 'calc(50% - 1px)',
                }}
              />
            </div>
         </div>
      </div>

      <main className="relative z-10">
        <Hero {...content.hero} theme={theme} />
        <About cards={content.about} />
        <ServicesGrid title={content.servicesTitle} subtitle={content.servicesSubtitle} services={content.services} />
        <Team {...content.team} />
        <WhyUs reasons={content.whyUs} />
      </main>

      <Footer description={content.footerDesc} />
    </div>
  );
}
