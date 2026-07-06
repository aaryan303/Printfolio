import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import { FileText, Heart } from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';

export default function LandingPage({ onViewChange }) {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <HeroSection onViewChange={onViewChange} />

      {/* Templates Preview Area (Aesthetically showcase the templates available) */}
      <section id="templates" className="py-20 px-6 bg-white border-t border-stone-200">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs uppercase font-extrabold text-orange-500 tracking-widest font-display">Designs</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 font-display">
              Choose Your Portfolio Style
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Select a design layout that fits your background. You can switch styles instantly at any time in the builder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {/* Minimal */}
            <div className="bg-[#FAF7F2] border border-stone-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-full aspect-[4/3] bg-white rounded-xl border border-stone-200 flex items-center justify-center p-3">
                  <div className="w-full h-full text-[10px] text-stone-850 font-sans p-2.5 flex flex-col justify-between leading-normal border border-stone-100 rounded-lg">
                    <div className="border-b border-stone-200 pb-1.5">
                      <h4 className="font-extrabold text-stone-900 font-display text-[11px] leading-tight">Rohan Mehta</h4>
                      <p className="text-stone-500 font-medium font-mono text-[8px] mt-0.5">Cloud Developer</p>
                      <div className="flex gap-1.5 mt-1 text-[7px] text-stone-400 font-mono">
                        <span>AWS | React | Python</span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[7px] font-bold text-stone-400 uppercase tracking-widest font-display">Projects</p>
                      <div className="flex justify-between items-center text-[8px] font-semibold text-stone-700">
                        <span>Printfolio</span>
                        <span className="text-[7px] font-normal text-stone-450">code →</span>
                      </div>
                      <div className="flex justify-between items-center text-[8px] font-semibold text-stone-700">
                        <span>Travel Glider</span>
                        <span className="text-[7px] font-normal text-stone-455">code →</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-lg font-display">Minimalist</h3>
                  <p className="text-stone-600 text-xs mt-1 leading-relaxed">Focus on pure typography, clean borders, and generous whitespace. Elegant and clean.</p>
                </div>
              </div>
              <button onClick={() => onViewChange('builder')} className="mt-6 text-xs font-bold text-stone-900 flex items-center gap-1 hover:underline cursor-pointer">
                Try Minimalist Layout →
              </button>
            </div>

            {/* Creative */}
            <div className="bg-[#FAF7F2] border border-stone-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-full aspect-[4/3] bg-white rounded-xl border border-stone-200 flex items-center justify-center p-3">
                  <div className="w-full h-full text-[9px] text-stone-850 font-sans p-2 flex flex-col justify-between leading-normal bg-orange-50/10 rounded-lg">
                    <div className="bg-white border border-stone-850 rounded-lg p-2 shadow-[2px_2px_0px_0px_rgba(41,37,36,1)]">
                      <div className="inline-block px-1.5 py-0.5 bg-sky-100 text-sky-850 text-[7px] font-bold rounded-full border border-sky-300">
                        Cloud Dev
                      </div>
                      <h4 className="font-extrabold text-[10px] text-stone-900 font-display mt-1">Rohan</h4>
                      <p className="text-stone-600 text-[7px] mt-0.5 font-medium">Building modern web apps</p>
                    </div>
                    
                    <div className="bg-white border border-stone-850 rounded-lg p-1.5 shadow-[2px_2px_0px_0px_rgba(41,37,36,1)]">
                      <p className="text-[7px] font-bold text-stone-900 font-display">Featured Projects</p>
                      <div className="flex gap-1 mt-0.5">
                        <span className="px-1 py-0.5 bg-yellow-100 text-yellow-800 border border-stone-850 text-[6px] font-bold rounded">Printfolio</span>
                        <span className="px-1 py-0.5 bg-green-100 text-green-800 border border-stone-850 text-[6px] font-bold rounded">AI Resume</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-lg font-display">Creative</h3>
                  <p className="text-stone-600 text-xs mt-1 leading-relaxed">Colorful cards, thick border borders, custom shadows, and vibrant badge accents. High personality.</p>
                </div>
              </div>
              <button onClick={() => onViewChange('builder')} className="mt-6 text-xs font-bold text-stone-900 flex items-center gap-1 hover:underline cursor-pointer">
                Try Creative Layout →
              </button>
            </div>

            {/* Professional */}
            <div className="bg-[#FAF7F2] border border-stone-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="w-full aspect-[4/3] bg-white rounded-xl border border-stone-200 flex items-center justify-center p-3">
                  <div className="w-full h-full text-[8px] text-stone-850 font-sans p-2 grid grid-cols-3 gap-2 leading-snug border border-stone-100 rounded-lg">
                    <div className="col-span-1 border-r border-stone-200 pr-1 space-y-1.5">
                      <div className="w-6 h-6 rounded bg-stone-100 border border-stone-200 mx-auto" />
                      <div className="text-center">
                        <p className="font-bold text-[7px] text-stone-900 leading-tight">Rohan M.</p>
                        <p className="text-[6px] text-stone-400 font-mono mt-0.5">Mumbai, IN</p>
                      </div>
                    </div>
                    
                    <div className="col-span-2 pl-1 space-y-1.5 text-left">
                      <div>
                        <p className="text-[6px] font-bold uppercase tracking-wider text-stone-400">Experience</p>
                        <p className="font-bold text-stone-850 text-[7px]">Cloud Intern</p>
                        <p className="text-stone-500 text-[6px] font-semibold italic">Vapor Labs · 2025</p>
                      </div>
                      <div>
                        <p className="text-[6px] font-bold uppercase tracking-wider text-stone-400">Education</p>
                        <p className="font-bold text-stone-850 text-[7px]">B.Tech CS</p>
                        <p className="text-stone-500 text-[6px] font-mono">IIT Bombay</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-lg font-display">Professional</h3>
                  <p className="text-stone-600 text-xs mt-1 leading-relaxed">Classic split resume design. Left profile details sidebar, right professional career timeline. Structured and neat.</p>
                </div>
              </div>
              <button onClick={() => onViewChange('builder')} className="mt-6 text-xs font-bold text-stone-900 flex items-center gap-1 hover:underline cursor-pointer">
                Try Professional Layout →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <HowItWorks />

      {/* Features Section */}
      <Features />

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-orange-100 border border-stone-850 flex items-center justify-center">
              <FileText size={16} className="text-orange-500" />
            </div>
            <span className="font-display font-extrabold text-stone-900 tracking-tight">
              Print<span className="text-orange-500">folio</span>
            </span>
          </div>

          <p className="text-xs text-stone-550 font-medium">
            Designed & Developed by <span className="font-semibold text-stone-800">Aryan</span>
          </p>

          <div className="flex items-center gap-4 text-stone-500">
            <a
              href="https://github.com/aaryan303"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              <Github size={16} /> GitHub
            </a>
            <span className="text-stone-205">|</span>
            <a
              href="https://www.linkedin.com/in/aryan0782"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 transition-colors flex items-center gap-1.5 text-xs font-semibold"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
