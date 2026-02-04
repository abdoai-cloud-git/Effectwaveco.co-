
import React from 'react';
import { motion } from 'framer-motion';

interface AboutCardData {
  title: string;
  icon: React.ElementType;
  text: string;
}

interface AboutProps {
  cards: AboutCardData[];
}

const About: React.FC<AboutProps> = ({ cards }) => {
  return (
    <section className="py-20 px-6 relative z-10 bg-onyx/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx + card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-gray-surface p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <card.icon className="text-accent w-6 h-6 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-white mb-4">{card.title}</h3>
              <p className="text-silver leading-relaxed">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
