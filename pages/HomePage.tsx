
import React from 'react';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Team from '../components/Team';
import { 
  Users, Sparkles, Layers,
  Target, Monitor, Megaphone, PenTool,
  Clapperboard, Film, Mic2, Image,
  Eye, Star, BarChart3, Check, Tv, Zap
} from 'lucide-react';

interface HomePageProps {
  theme: 'agency' | 'production';
}

const agencyContent = {
  hero: {
    badge: "استثمار رائد | A Groundbreaking Investment",
    titleLine1: "",
    titleLine2: "",
    description: "في عالم أصبحت فيه الصورة، الرسالة، والتوقيت عوامل حاسمة، تأتي موجة تأثير كوكالة تسويق وإنتاج إبداعي، تقدم فهمًا عميقًا للسوق وبناء تأثير حقيقي ومستدام للعلامات التجارية والمؤسسات.",
    buttonText: "ابدأ رحلتك معنا"
  },
  about: [
    {
      title: "من نحن",
      icon: Users,
      text: "موجة تأثير وكالة رائدة في التسويق، الإعلام، والإنتاج الفني والإعلامي، تقدّم حلولاً مبتكرة تساعد العلامات التجارية والمؤسسات على التواصل بفعالية."
    },
    {
      title: "فلسفتنا",
      icon: Sparkles,
      text: "التأثير يبدأ من الفهم، والإعلام الفعّال هو نتيجة قراءة دقيقة للسوق، وسلوك الجمهور. نسعى لتقديم حلول مبنية على البيانات والتحليل."
    },
    {
      title: "منصاتنا",
      icon: Layers,
      text: "أنشأنا منصات متخصصة كأدوات بحث تسويقي: 'Side Effect' للمجال الطبي، و'روّاد' للاقتصاد، لفهم ديناميكية السوق بشكل أعمق."
    }
  ],
  servicesTitle: "حلول التسويق والاستراتيجية",
  servicesSubtitle: "MARKETING SOLUTIONS",
  services: [
    {
      title: "إعداد الاستراتيجيات",
      subtitle: "STRATEGIC PLANNING",
      icon: Target,
      features: [
        "دراسة السوق وتحليل الجمهور",
        "بناء الخطط وتحديد الرسائل",
        "تحليل المنافسين والتوجهات"
      ]
    },
    {
      title: "التسويق الرقمي",
      subtitle: "DIGITAL MARKETING",
      icon: Monitor,
      features: [
        "إدارة حسابات التواصل الاجتماعي",
        "صناعة المحتوى الإبداعي",
        "إدارة الحملات الرقمية (Ads)"
      ]
    },
    {
      title: "المؤتمرات والفعاليات",
      subtitle: "EVENTS & PR",
      icon: Megaphone,
      features: [
        "تخطيط وتنفيذ المؤتمرات",
        "إدارة المعارض والفعاليات",
        "التغطية الإعلامية للفعاليات"
      ]
    },
    {
      title: "التصميم والهوية",
      subtitle: "BRANDING",
      icon: PenTool,
      features: [
        "تصميم الشعارات",
        "أدلة الهوية البصرية",
        "المواد التسويقية"
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
  ]
};

const productionContent = {
  hero: {
    badge: "إبداع بصري يروي قصتك",
    titleLine1: "",
    titleLine2: "",
    description: "نحول الأفكار إلى تجارب بصرية، سمعية، وحسية. من الإعلانات التلفزيونية إلى الموشن جرافيك والبودكاست.",
    buttonText: "احجز استشارتك"
  },
  about: [
    {
      title: "رؤيتنا الإنتاجية",
      icon: Users, // Using generic icon as placeholder if aperture isn't avail in this context, but imports are there
      text: "أن نكون الخيار الأول في صناعة المحتوى المرئي والمسموع الذي يجمع بين الجودة السينمائية والرسالة الهادفة."
    },
    {
      title: "قدراتنا",
      icon: Film,
      text: "نمتلك أحدث التقنيات في التصوير، المونتاج، والمؤثرات البصرية، بالإضافة إلى استوديوهات صوتية متكاملة."
    },
    {
      title: "الجودة الفنية",
      icon: Sparkles,
      text: "نركز على أدق التفاصيل الفنية، من الإضاءة وتصحيح الألوان إلى هندسة الصوت، لنضمن تجربة استثنائية."
    }
  ],
  servicesTitle: "خدمات الإنتاج الفني",
  servicesSubtitle: "CREATIVE PRODUCTION",
  services: [
    {
      title: "الإنتاج الإعلامي",
      subtitle: "MEDIA PRODUCTION",
      icon: Clapperboard,
      features: [
        "الإعلانات التجارية والتوعوية",
        "البرامج التلفزيونية والرقمية",
        "المسلسلات والأفلام القصيرة"
      ]
    },
    {
      title: "الإنتاج الفني",
      subtitle: "ART & VFX",
      icon: Film,
      features: [
        "موشن جرافيك 2D",
        "فيديوهات 3D للمنتجات والمشاريع",
        "المعالجة البصرية (Coloring)"
      ]
    },
    {
      title: "الصوت والبودكاست",
      subtitle: "AUDIO & PODCAST",
      icon: Mic2,
      features: [
        "إنتاج بودكاست (صوتي ومرئي)",
        "التعليق الصوتي (Voice Over)",
        "المكساج والمعالجة الصوتية"
      ]
    },
    {
      title: "المطبوعات والتصميم",
      subtitle: "PRINT & DESIGN",
      icon: Image,
      features: [
        "تصميم المطبوعات",
        "الكتيبات والنشرات الدعائية",
        "اللوحات الإعلانية"
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
  ]
};

const HomePage: React.FC<HomePageProps> = ({ theme }) => {
  const content = theme === 'agency' ? agencyContent : productionContent;

  return (
    <>
      <Hero 
        {...content.hero}
        theme={theme}
      />

      <div id="services">
          <ServicesGrid 
              title={content.servicesTitle}
              subtitle={content.servicesSubtitle}
              services={content.services}
          />
      </div>

      <div id="about">
          <About cards={content.about} />
      </div>

      <div id="why-us">
          <WhyUs reasons={content.whyUs} />
      </div>

      <div id="team">
          <Team 
              subtitle="OUR TEAM"
              title="العقول خلف الإبداع"
              description="مجموعة من الشغوفين المبدعين الذين يجمعهم هدف واحد: تحويل أفكارك إلى واقع استثنائي."
          />
      </div>
    </>
  );
};

export default HomePage;
