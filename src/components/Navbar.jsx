import React from 'react';
import { FileText, Sparkles } from 'lucide-react';

export default function Navbar({ onViewChange }) {
  return (
    <nav className="sticky top-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-stone-200/50 px-6 py-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onViewChange('landing')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-orange-100 border-2 border-stone-850 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(41,37,36,1)] group-hover:translate-x-[1px] group-hover:translate-y-[1px] group-hover:shadow-[1px_1px_0px_0px_rgba(41,37,36,1)] transition-all">
            <FileText size={20} className="text-orange-655 stroke-[2.5]" />
          </div>
          <span className="font-display font-extrabold text-xl text-stone-900 tracking-tight">
            Print<span className="text-orange-500">folio</span>
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <a
            href="#features"
            onClick={(e) => {
              e.preventDefault();
              onViewChange('landing');
              setTimeout(() => {
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="hover:text-stone-900 transition-colors"
          >
            Features
          </a>
          <a
            href="#templates"
            onClick={(e) => {
              e.preventDefault();
              onViewChange('landing');
              setTimeout(() => {
                document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="hover:text-stone-900 transition-colors"
          >
            Templates
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              onViewChange('landing');
              setTimeout(() => {
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="hover:text-stone-900 transition-colors"
          >
            How It Works
          </a>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onViewChange('builder')}
          className="relative px-5 py-2.5 bg-orange-500 text-white font-semibold text-sm rounded-xl border-2 border-stone-850 shadow-[3px_3px_0px_0px_rgba(41,37,36,1)] hover:bg-orange-600 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(41,37,36,1)] transition-all cursor-pointer flex items-center gap-2"
        >
          <Sparkles size={16} />
          Create Portfolio
        </button>
      </div>
    </nav>
  );
}
