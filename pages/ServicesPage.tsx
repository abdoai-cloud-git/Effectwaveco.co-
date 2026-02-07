
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import { 
  Clapperboard, Film, Mic2, Monitor, 
  Target, Megaphone, PenTool, Image, Tv, Layers
} from 'lucide-react';

interface ServicesPageProps {
  theme: 'agency' | 'production';
}

const ServicesPage: React.FC<ServicesPageProps> = ({ theme }) => {
  const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';

  const agencyServices = [
    {
      title: "إعداد الاستراتيجيات التسويقية",
      subtitle: "STRATEGIC PLANNING",
      icon: Target,
      items: [
        "دراسة السوق",
        "تحليل الجمهور",
        "بناء الخطط",
        "تحديد الرسائل"
      ]
    },
    {
      title: "التسويق الرقمي وإدارة المنصات",
      subtitle: "DIGITAL MARKETING",
      icon: Monitor,
      items: [
        "إدارة حسابات التواصل الاجتماعي",
        "صناعة المحتوى",
        "الحملات الرقمية",
        "تحليل الأداء",
        "بناء الهوية الرقمية"
      ]
    },
    {
      title: "الحملات الإعلانية",
      subtitle: "ADVERTISING CAMPAIGNS",
      icon: Tv,
      items: [
        "التخطيط",
        "التنفيذ",
        "الإشراف والمتابعة",
        "قياس النتائج"
      ]
    },
    {
      title: "التصميم والهوية البصرية",
      subtitle: "BRANDING & IDENTITY",
      icon: PenTool,
      items: [
        "تصميم الشعارات والهويات البصرية",
        "التصميم الإعلاني والمواد التسويقية"
      ]
    },
    {
      title: "تنظيم المؤتمرات والمعارض",
      subtitle: "EVENTS & EXHIBITIONS",
      icon: Megaphone,
      items: [
        "تخطيط وتنفيذ المؤتمرات",
        "إدارة المعارض والفعاليات",
        "تغطية إعلامية للفعاليات"
      ]
    }
  ];

  const productionServices = [
    {
      title: "الإنتاج الإعلامي",
      subtitle: "MEDIA PRODUCTION",
      icon: Clapperboard,
      items: [
        "إنتاج الإعلانات التجارية والتوعوية",
        "الإعلانات التلفزيونية والرقمية",
        "برامج تلفزيونية ورقمية",
        "مسلسلات وأفلام قصيرة",
        "أفلام وثائقية",
        "تغطيات إعلامية"
      ]
    },
    {
      title: "الإنتاج الفني",
      subtitle: "ART & POST-PRODUCTION",
      icon: Film,
      items: [
        "موشن جرافيك 2D",
        "فيديوهات 3D للمنتجات والمشاريع",
        "المعالجة البصرية والمؤثرات",
        "الإخراج والتنفيذ الفني"
      ]
    },
    {
      title: "الإنتاج الصوتي والبودكاست",
      subtitle: "AUDIO SERVICES",
      icon: Mic2,
      items: [
        "إنتاج بودكاست متكامل (صوتي ومرئي)",
        "التعليق الصوتي (Voice Over)",
        "تسجيل الأغاني والأعمال الصوتية",
        "المكساج والمعالجة الصوتية",
        "تجهيز المحتوى الصوتي والمرئي للحملات"
      ]
    },
    {
      title: "المطبوعات والتصميمات",
      subtitle: "PRINT & DESIGN",
      icon: Image,
      items: [
        "تصميم وطباعة المواد التسويقية",
        "الكتيبات والنشرات الدعائية",
        "البروشورات والملصقات",
        "الهويات البصرية واللوحات الإعلانية"
      ]
    }
  ];

  const services = theme === 'agency' ? agencyServices : productionServices;

  return (
    <PageLayout 
      theme={theme}
      title="خدماتنا"
      subtitle={theme === 'agency' ? "AGENCY SERVICES" : "PRODUCTION SERVICES"}
      description={theme === 'agency' 
        ? "نقدم حلولاً تسويقية واستراتيجية مبنية على فهم دقيق للسوق والجمهور." 
        : "نحول الأفكار إلى واقع مرئي ومسموع بأعلى معايير الجودة الفنية."}
    >
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx + theme}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="bg-onyx/60 backdrop-blur-sm p-8 rounded-[2rem] border border-white/5 hover:border-white/10 hover:bg-onyx transition-all duration-300 group hover:-translate-y-1 h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:bg-white/10 group-hover:border-accent/30 transition-all duration-300">
                  <service.icon 
                    size={30} 
                    className="text-silver group-hover:text-accent transition-colors duration-300"
                    style={{ '--color-accent': accentColor } as any}
                  />
                </div>
                <div className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: accentColor }} />
              </div>
              
              <div className="mb-2 text-xs font-english tracking-widest opacity-50 uppercase text-accent" style={{ color: accentColor }}>
                {service.subtitle}
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-white mb-6 group-hover:text-accent transition-colors duration-300" style={{ color: 'white', '--hover-color': accentColor } as any}>
                {service.title}
              </h3>

              <ul className="space-y-4">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-silver/60 text-sm md:text-base leading-snug group-hover:text-silver/90 transition-colors duration-300">
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0 bg-white/20 group-hover:bg-accent transition-colors duration-300" style={{ '--color-accent': accentColor } as any} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
