
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import { Target, Eye } from 'lucide-react';

interface AboutPageProps {
  theme: 'agency' | 'production';
}

const AboutPage: React.FC<AboutPageProps> = ({ theme }) => {
  const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';

  return (
    <PageLayout
      theme={theme}
      title="من نحن"
      subtitle="ABOUT US"
      description="موجة تأثير وكالة رائدة في التسويق، الإعلام، والإنتاج الفني والإعلامي، تقدّم حلولاً مبتكرة."
    >
      <section className="px-6 max-w-7xl mx-auto">
        
        {/* Main Introduction Text */}
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xl md:text-3xl leading-relaxed text-silver/90 font-heading font-bold max-w-5xl"
          >
            "في عالم أصبحت فيه الصورة، الرسالة، والتوقيت عوامل حاسمة، تأتي موجة تأثير كوكالة تسويق وإنتاج إبداعي، تقدم فهمًا عميقًا للسوق وبناء تأثير حقيقي ومستدام."
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
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">رؤيتنا</h2>
              <p className="text-silver/70 text-lg md:text-xl leading-relaxed">
                أن نكون جهة رائدة في صناعة التأثير الإعلامي والتسويقي المبني على الفهم والمعرفة، لنخلق مستقبلاً حيث يلتقي الإبداع بالبيانات.
              </p>
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
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">رسالتنا</h2>
              <p className="text-silver/70 text-lg md:text-xl leading-relaxed">
                تقديم حلول إعلامية وتسويقية مدروسة، مبنية على تحليل السوق وفهم الجمهور، لإنتاج محتوى يليق بالعلامات والمؤسسات التي نمثلها.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
