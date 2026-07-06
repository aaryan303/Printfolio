import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Layers, Save, Download, Smartphone, Braces } from 'lucide-react';

export default function Features() {
  const features = [
    {
      title: "Live Preview",
      description: "Watch your portfolio render and update instantly on the screen as you type in the editor form.",
      icon: Eye,
      color: "bg-sky-50 text-sky-800 border-sky-200"
    },
    {
      title: "Multiple Templates",
      description: "Toggle through Minimalist, Creative, or Professional resume layouts in a single click.",
      icon: Layers,
      color: "bg-orange-50 text-orange-850 border-orange-200"
    },
    {
      title: "Save Progress",
      description: "Auto-saves all configurations locally to your browser. Close the window and continue editing anytime.",
      icon: Save,
      color: "bg-green-50 text-green-800 border-green-200"
    },
    {
      title: "Export Portfolio",
      description: "Download a production-ready, highly optimized standalone HTML file or backup your schema to JSON.",
      icon: Download,
      color: "bg-yellow-50 text-yellow-850 border-yellow-200"
    },
    {
      title: "Responsive Design",
      description: "Every template is engineered to adapt flawlessly to tablets, mobile views, and high-DPI desktop screens.",
      icon: Smartphone,
      color: "bg-purple-50 text-purple-800 border-purple-200"
    },
    {
      title: "Built for Developers",
      description: "Made specifically for software engineers. Showcase your GitHub profile, skills, timeline, and tech stacks.",
      icon: Braces,
      color: "bg-pink-50 text-pink-850 border-pink-200"
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 font-display">
            Everything You Need to Build Your Portfolio
          </h2>
          <p className="text-stone-605 text-sm sm:text-base">
            Everything you need to craft an elegant portfolio website that focuses entirely on your projects and work history.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-md hover:border-stone-300 transition-all duration-300 flex flex-col items-start"
              >
                {/* Icon Container */}
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${feat.color}`}>
                  <Icon size={18} className="stroke-[2.5]" />
                </div>
                
                <h3 className="text-base font-bold text-stone-900 font-display mb-2">
                  {feat.title}
                </h3>
                
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
