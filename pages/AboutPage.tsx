
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import { Target, Eye } from 'lucide-react';

interface AboutPageProps {
  theme: 'agency' | 'production';
}

const AboutPage: React.FC<AboutPageProps> = ({ theme }) => {
  const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';

  const content = {
    agency: {
      intro: "في عالم أصبحت فيه الصورة، الرسالة، والتوقيت عوامل حاسمة، تأتي موجة تأثير كوكالة تسويق متكاملة، تقدم فهمًا عميقًا للسوق وبناء تأثير حقيقي ومستدام للعلامات التجارية والمؤسسات.",
      vision: {
        text: "أن نكون جهة رائدة في صناعة التأثير الإعلامي والتسويقي المبني على الفهم والمعرفة.",
        sub: "بيانات دقيقة، قرارات ذكية."
      },
      mission: {
        text: "تقديم حلول إعلامية وتسويقية مدروسة، مبنية على تحليل السوق وفهم الجمهور، لإنتاج محتوى يليق بالعلامات والمؤسسات التي نمثلها.",
        sub: "تخطيط استراتيجي، نتائج ملموسة."
      }
    },
    production: {
      intro: "نحن نؤمن بأن الإبداع البصري هو اللغة الأقوى. موجة تأثير للإنتاج الفني تقدم حلولاً مبتكرة تحول الأفكار إلى تجارب بصرية وصوتية تترك أثراً لا يمحى في ذاكرة المشاهد.",
      vision: {
        text: "أن نكون الخيار الأول في صناعة المحتوى المرئي والمسموع الذي يجمع بين الجودة السينمائية والرسالة الهادفة.",
        sub: "صورة سينمائية، صوت نقي."
      },
      mission: {
        text: "توظيف أحدث التقنيات الفنية والكفاءات الإبداعية لإنتاج أعمال فنية ترتقي بالذائقة البصرية وتحقق رؤية شركائنا.",
        sub: "إتقان فني، إبداع بلا حدود."
      }
    }
  };

  const selectedContent = theme === 'agency' ? content.agency : content.production;

  return (
    <PageLayout
      theme={theme}
      title="من نحن"
      subtitle="ABOUT US"
      description={theme === 'agency' ? "وكالة رائدة في التسويق والإعلام، نصنع التأثير." : "رواد في الإنتاج الفني والإعلامي، نصنع المشهد."}
    >
      <section className="px-6 max-w-7xl mx-auto">
        
        {/* Main Introduction Text */}
        <div className="mb-20">
          <motion.p 
            key={theme}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xl md:text-3xl leading-relaxed text-silver/90 font-heading font-bold max-w-5xl"
          >
            "{selectedContent.intro}"
          </motion.p>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-onyx/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors duration-500"
          >
            <div className="absolute -right-10 -top-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 transform group-hover:scale-110">
              <Eye size={250} />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/5 group-hover:border-accent/30 transition-colors">
                <Eye size={32} style={{ color: accentColor }} />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">رؤيتنا</h2>
              <p className="text-sm font-bold tracking-wider opacity-50 mb-6" style={{ color: accentColor }}>OUR VISION</p>
              <p className="text-silver/70 text-lg md:text-xl leading-relaxed">
                {selectedContent.vision.text}
              </p>
              <div className="mt-6 pt-6 border-t border-white/5">
                 <span className="text-sm text-silver/40 font-english uppercase tracking-widest">{selectedContent.vision.sub}</span>
              </div>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-onyx/40 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors duration-500"
          >
            <div className="absolute -right-10 -top-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 transform group-hover:scale-110">
              <Target size={250} />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/5 group-hover:border-accent/30 transition-colors">
                <Target size={32} style={{ color: accentColor }} />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">رسالتنا</h2>
              <p className="text-sm font-bold tracking-wider opacity-50 mb-6" style={{ color: accentColor }}>OUR MISSION</p>
              <p className="text-silver/70 text-lg md:text-xl leading-relaxed">
                {selectedContent.mission.text}
              </p>
              <div className="mt-6 pt-6 border-t border-white/5">
                 <span className="text-sm text-silver/40 font-english uppercase tracking-widest">{selectedContent.mission.sub}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
