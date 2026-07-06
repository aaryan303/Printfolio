import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Globe, Layers } from 'lucide-react';
import { Github } from './Icons';

export default function HeroSection({ onViewChange }) {
  return (
    <section className="relative py-16 md:py-24 px-6 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-yellow-100/60 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left text column */}
        <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full border border-yellow-300 uppercase tracking-wider font-display"
          >
            <Sparkles size={12} />
            Indie Maker Tool
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-stone-900 leading-[1.1] font-display"
          >
            Create your developer <br className="hidden sm:inline" />
            <span className="relative">
              portfolio
              <span className="absolute left-0 bottom-1 w-full h-3 bg-yellow-200 -z-10 transform -rotate-1" />
            </span> in minutes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans"
          >
            Build a clean, professional portfolio website to print your digital identity without worrying about design or code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <button
              onClick={() => onViewChange('builder')}
              className="w-full sm:w-auto px-8 py-3.5 bg-stone-900 text-white font-bold rounded-xl border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(249,115,22,1)] hover:bg-stone-800 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(249,115,22,1)] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              Start Building
              <ArrowRight size={18} />
            </button>
            <a
              href="#templates"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-stone-850 font-bold rounded-xl border-2 border-stone-850 shadow-[3px_3px_0px_0px_rgba(41,37,36,1)] hover:bg-[#FAF7F2] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(41,37,36,1)] transition-all flex items-center justify-center gap-2"
            >
              View Templates
            </a>
          </motion.div>
        </div>

        {/* Right animated visual column */}
        <div className="lg:col-span-6 relative h-[400px] sm:h-[450px] flex items-center justify-center">
          
          {/* Main Card: Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-72 bg-white border-2 border-stone-850 rounded-2xl p-5 shadow-[6px_6px_0px_0px_rgba(41,37,36,1)] z-20 absolute"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
                alt="Developer Avatar"
                className="w-12 h-12 rounded-xl object-cover border border-stone-200"
              />
              <div>
                <h3 className="font-bold text-stone-900 font-display">Rohan Mehta</h3>
                <p className="text-xs font-medium text-stone-500 font-mono">Cloud Engineer</p>
              </div>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed mb-4">
              Building scalable cloud infrastructures and crafting high-performance React web applications.
            </p>
            <div className="flex gap-2">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-50 text-sky-800 border border-sky-200">
                React
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-50 text-orange-850 border border-orange-200">
                TypeScript
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-green-50 text-green-800 border border-green-200">
                Tailwind
              </span>
            </div>
          </motion.div>

          {/* Floating Card 2: Project Card */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-60 bg-white border-2 border-stone-850 rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(56,189,248,1)] z-10 absolute top-4 right-2 sm:right-6"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-xs font-bold text-stone-900 font-display">Aura UI Kit</h4>
              <Code2 size={12} className="text-stone-400" />
            </div>
            <p className="text-[10px] text-stone-550 mb-3 leading-relaxed">
              Fully accessible headless primitives styled with Tailwind CSS.
            </p>
            <div className="flex justify-between items-center text-[10px] text-stone-400">
              <span className="flex items-center gap-0.5"><Github size={10} /> github</span>
              <span className="flex items-center gap-0.5"><Globe size={10} /> aura-ui.dev</span>
            </div>
          </motion.div>

          {/* Floating Card 3: Experience details */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-56 bg-[#FAF7F2] border-2 border-stone-850 rounded-xl p-4 shadow-[4px_4px_0px_0px_rgba(250,204,21,1)] z-10 absolute bottom-4 left-2 sm:left-6"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs">💼</span>
              <h4 className="text-xs font-bold text-stone-900 font-display">Work Experience</h4>
            </div>
            <div className="border-l border-stone-200 pl-2 text-[10px] space-y-2">
              <div>
                <p className="font-bold text-stone-800">Netflix</p>
                <p className="text-stone-500">UI Engineer · 2024</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Skill Badge 1 */}
          <motion.div
            animate={{
              x: [0, 8, 0],
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/3 px-3 py-1 bg-green-50 border border-stone-850 rounded-full text-xs font-bold text-green-800 shadow-[2px_2px_0px_0px_rgba(41,37,36,1)] z-30"
          >
            Next.js
          </motion.div>

          {/* Floating Skill Badge 2 */}
          <motion.div
            animate={{
              x: [0, -8, 0],
              y: [0, 8, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/4 px-3 py-1 bg-orange-50 border border-stone-850 rounded-full text-xs font-bold text-orange-850 shadow-[2px_2px_0px_0px_rgba(41,37,36,1)] z-30"
          >
            Framer Motion
          </motion.div>
        </div>
      </div>
    </section>
  );
}
