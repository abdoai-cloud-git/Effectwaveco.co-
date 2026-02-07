
import React from 'react';
import PageLayout from '../components/PageLayout';
import { Mail, Phone, Globe, ArrowRight, ArrowUpLeft } from 'lucide-react';

interface ContactPageProps {
  theme: 'agency' | 'production';
}

const ContactPage: React.FC<ContactPageProps> = ({ theme }) => {
  const accentColor = theme === 'agency' ? '#ebe125' : '#b20600';

  return (
    <PageLayout
      theme={theme}
      title="تواصل معنا"
      subtitle="CONTACT US"
      description="إذا كنت تبحث عن جهة تفهم السوق قبل مخاطبته، وتحوّل الإعلام والتسويق إلى قيمة حقيقية، فأنت في المكان الصحيح."
    >
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-white mb-10 relative inline-block">
                معلومات التواصل
                <span className="absolute -bottom-2 right-0 w-1/2 h-1 rounded-full" style={{ backgroundColor: accentColor }}></span>
              </h2>
              
              <div className="space-y-8">
                <a href="tel:+218944689827" className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300 -mr-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-accent/50 transition-colors duration-300">
                    <Phone style={{ color: accentColor }} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs text-silver/40 uppercase tracking-widest mb-2 font-english">Phone</h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-xl font-english text-white dir-ltr text-right group-hover:text-accent transition-colors">094 468 9827</p>
                      <p className="text-xl font-english text-white dir-ltr text-right group-hover:text-accent transition-colors">091 882 4194</p>
                    </div>
                  </div>
                </a>

                <a href="mailto:info@effectwave.ly" className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300 -mr-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-accent/50 transition-colors duration-300">
                    <Mail style={{ color: accentColor }} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs text-silver/40 uppercase tracking-widest mb-2 font-english">Email</h3>
                    <p className="text-xl font-english text-white group-hover:text-accent transition-colors">info@effectwave.ly</p>
                  </div>
                </a>

                <a href="https://www.effectwave.ly" target="_blank" rel="noreferrer" className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300 -mr-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-accent/50 transition-colors duration-300">
                    <Globe style={{ color: accentColor }} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs text-silver/40 uppercase tracking-widest mb-2 font-english">Website</h3>
                    <div className="flex items-center gap-2">
                        <p className="text-xl font-english text-white group-hover:text-accent transition-colors">www.effectwave.ly</p>
                        <ArrowUpLeft size={16} className="text-silver/50 group-hover:text-accent transition-colors" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-onyx/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1" style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}></div>
            
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span>أرسل رسالة</span>
                <span className="h-[1px] flex-grow bg-white/10"></span>
            </h3>
            
            <form className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-sm text-silver/60 mr-1">الاسم الكامل</label>
                <input 
                    type="text" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent focus:bg-white/5 transition-all duration-300" 
                    style={{ '--color-accent': accentColor } as any}
                    placeholder="اكتب اسمك هنا"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-silver/60 mr-1">البريد الإلكتروني</label>
                <input 
                    type="email" 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent focus:bg-white/5 transition-all duration-300" 
                    style={{ '--color-accent': accentColor } as any}
                    placeholder="name@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-silver/60 mr-1">الرسالة</label>
                <textarea 
                    rows={4} 
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-accent focus:bg-white/5 transition-all duration-300 resize-none" 
                    style={{ '--color-accent': accentColor } as any}
                    placeholder="كيف يمكننا مساعدتك؟"
                ></textarea>
              </div>
              
              <button 
                type="button"
                className="w-full py-4 rounded-xl font-bold text-black flex items-center justify-center gap-3 transition-all duration-300 active:scale-95 hover:brightness-110 mt-4 group"
                style={{ backgroundColor: accentColor }}
              >
                <span>إرسال الرسالة</span>
                <ArrowRight size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
