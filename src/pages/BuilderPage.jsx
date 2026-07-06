import React from 'react';
import PortfolioEditor from '../components/PortfolioEditor';
import PortfolioPreview from '../components/PortfolioPreview';
import { ArrowLeft, Sparkles, FileText, Eye } from 'lucide-react';

export default function BuilderPage({
  data,
  onChange,
  onReset,
  onImportJSON,
  onExportJSON,
  onExportHTML,
  activeTemplate,
  onTemplateChange,
  onBackToHome
}) {
  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col">
      {/* Subheader Builder Navigation */}
      <header className="bg-white border-b border-stone-200 px-6 py-3 flex items-center justify-between sticky top-[73px] z-40">
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-1.5 text-xs font-bold text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
          >
            <ArrowLeft size={14} /> Back to Home
          </button>
          
          <div className="hidden sm:flex items-center gap-2 border-l border-stone-200 pl-4">
            <span className="text-sm font-extrabold text-stone-850 font-display">Workspace</span>
            <span className="text-[10px] bg-sky-100 text-sky-850 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider font-mono">
              Live Editing
            </span>
          </div>
        </div>

        <div className="text-xs font-medium text-stone-500 font-mono hidden md:block">
          Changes auto-saved to browser storage
        </div>
      </header>

      {/* Main Split Screen Area */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 max-w-7xl w-full mx-auto p-4 md:p-6 gap-6">
        {/* Left Side: Editor (5 columns) */}
        <section className="lg:col-span-5 h-full flex flex-col">
          <h2 className="text-lg font-bold text-stone-900 font-display mb-3 flex items-center gap-2">
            <FileText size={18} className="text-orange-500" /> Portfolio Editor
          </h2>
          
          <div className="flex-1 overflow-y-auto max-h-[calc(100vh-180px)] pr-1">
            <PortfolioEditor
              data={data}
              onChange={onChange}
              onReset={onReset}
              onImportJSON={onImportJSON}
              onExportJSON={onExportJSON}
              onExportHTML={onExportHTML}
            />
          </div>
        </section>

        {/* Right Side: Live Preview (7 columns) */}
        <section className="lg:col-span-7 h-full flex flex-col">
          <h2 className="text-lg font-bold text-stone-900 font-display mb-3 flex items-center gap-2">
            <Eye size={18} className="text-orange-500" /> Live Preview
          </h2>
          
          <div className="flex-1">
            <PortfolioPreview
              data={data}
              activeTemplate={activeTemplate}
              onTemplateChange={onTemplateChange}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
