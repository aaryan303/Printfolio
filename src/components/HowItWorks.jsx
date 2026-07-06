import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Palette, FileOutput } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Add your details",
      description: "Fill in your personal bio, projects, work experience, and developer skills in our friendly, responsive builder form.",
      icon: UserCheck,
      color: "bg-sky-50 border-sky-300 text-sky-850",
      shadow: "shadow-[4px_4px_0px_0px_rgba(56,189,248,1)]"
    },
    {
      number: "02",
      title: "Choose your style",
      description: "Instantly cycle through Minimal, Creative, or Professional resume templates to see which layout suits your personality.",
      icon: Palette,
      color: "bg-orange-50 border-orange-300 text-orange-850",
      shadow: "shadow-[4px_4px_0px_0px_rgba(249,115,22,1)]"
    },
    {
      number: "03",
      title: "Generate & print",
      description: "Export your portfolio to JSON (for backing up progress) or download a fully responsive standalone HTML file to host anywhere.",
      icon: FileOutput,
      color: "bg-green-50 border-green-300 text-green-800",
      shadow: "shadow-[4px_4px_0px_0px_rgba(34,197,94,1)]"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-white border-y border-stone-200">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 font-display">
            How Printfolio Works
          </h2>
          <p className="text-stone-605 text-sm sm:text-base">
            No server setups, no styling issues, and no code configuration. Just three steps to launch.
          </p>
        </div>

        {/* Step cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`bg-white border-2 border-stone-850 rounded-2xl p-6 relative ${step.shadow} flex flex-col justify-between`}
              >
                <div>
                  {/* Icon & Number Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl border border-stone-850 flex items-center justify-center ${step.color}`}>
                      <Icon size={22} className="stroke-[2.5]" />
                    </div>
                    <span className="font-mono text-3xl font-black text-stone-200 select-none">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 font-display mb-2">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
