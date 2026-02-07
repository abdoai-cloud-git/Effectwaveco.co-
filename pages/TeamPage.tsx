
import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';
import { User } from 'lucide-react';

interface TeamPageProps {
  theme: 'agency' | 'production';
}

const TeamPage: React.FC<TeamPageProps> = ({ theme }) => {
  const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';

  const teamMembers = [
    {
      name: "سامي التاجوري",
      title: "المؤسس والمدير التنفيذي",
      englishTitle: "Founder & CEO"
    },
    {
      name: "محمد بن ناصر",
      title: "المدير العام",
      englishTitle: "Managing Director"
    },
    {
      name: "أحمد عمار",
      title: "مدير العلاقات",
      englishTitle: "Head of Relations"
    },
    {
      name: "المدير الإبداعي",
      title: "الإدارة الإبداعية",
      englishTitle: "Creative Director"
    }
  ];

  return (
    <PageLayout
      theme={theme}
      title="فريق العمل"
      subtitle="OUR TEAM"
      description="فريق يصنع التأثير بعقلية استثمارية. مختصون يعملون معًا لبناء مشاريع ذات قيمة وتأثير مستدام."
    >
      <section className="px-6 max-w-7xl mx-auto">
        
        <div className="mb-16 flex items-center gap-4">
          <h2 className="text-3xl font-heading font-bold text-white">الفريق القيادي</h2>
          <div className="h-[1px] flex-grow max-w-[100px] bg-white/20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="aspect-[3/4] bg-onyx/50 rounded-3xl mb-6 relative overflow-hidden border border-white/5 group-hover:border-white/20 transition-all duration-500">
                {/* Placeholder for Image */}
                <div className="absolute inset-0 flex items-center justify-center bg-white/5">
                   <User size={64} className="text-white/10 group-hover:text-white/20 transition-colors duration-500" />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Decorative Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                   <div className="h-full w-0 group-hover:w-full transition-all duration-700 ease-out" style={{ backgroundColor: accentColor }}></div>
                </div>
              </div>
              
              <div className="pr-2">
                <h3 className="text-2xl font-heading font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300" style={{ '--color-accent': accentColor } as any}>
                  {member.name}
                </h3>
                <p className="text-xs font-english text-silver/40 uppercase tracking-widest mb-2">
                  {member.englishTitle}
                </p>
                <p className="text-sm font-bold opacity-80" style={{ color: accentColor }}>
                  {member.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-10 md:p-16 rounded-[2rem] bg-onyx/30 border border-white/5 text-center backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <p className="text-lg md:text-2xl text-silver/80 max-w-4xl mx-auto leading-relaxed font-light">
            "يعمل فريقنا القيادي جنبًا إلى جنب مع شبكة من الكفاءات الإبداعية والتنفيذية حسب طبيعة كل مشروع، لضمان جودة العمل وتحقيق أفضل النتائج."
          </p>
        </div>

      </section>
    </PageLayout>
  );
};

export default TeamPage;
