import React, { useState } from 'react';
import MinimalTemplate from './templates/MinimalTemplate';
import CreativeTemplate from './templates/CreativeTemplate';
import ProfessionalTemplate from './templates/ProfessionalTemplate';
import { Monitor, Smartphone, Sparkles, User, FileCode } from 'lucide-react';
import { defaultData } from '../data/defaultData';

export default function PortfolioPreview({ data, activeTemplate, onTemplateChange }) {
  const [previewMode, setPreviewMode] = useState('desktop'); // desktop or mobile

  // Check if user data is completely empty
  const isDataEmpty = 
    !data.fullName && 
    !data.jobTitle && 
    !data.bio && 
    !data.location && 
    !data.email && 
    (!data.skills || data.skills.length === 0) && 
    (!data.projects || data.projects.length === 0);

  const previewData = isDataEmpty ? defaultData : data;

  const renderTemplate = () => {
    const isMobile = previewMode === 'mobile';
    switch (activeTemplate) {
      case 'minimal':
        return <MinimalTemplate data={previewData} isMobile={isMobile} />;
      case 'creative':
        return <CreativeTemplate data={previewData} isMobile={isMobile} />;
      case 'professional':
        return <ProfessionalTemplate data={previewData} isMobile={isMobile} />;
      default:
        return <MinimalTemplate data={previewData} isMobile={isMobile} />;
    }
  };

  return (
    <div className="h-full flex flex-col space-y-4">
      {/* Settings / Controls Header */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        
        {/* Template Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-stone-500 font-display">Template:</span>
          <div className="bg-stone-100 p-1 rounded-lg border border-stone-200 flex gap-1">
            <button
              onClick={() => onTemplateChange('minimal')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                activeTemplate === 'minimal'
                  ? 'bg-white text-stone-900 shadow-sm border border-stone-200'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              Minimal
            </button>
            <button
              onClick={() => onTemplateChange('creative')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                activeTemplate === 'creative'
                  ? 'bg-white text-stone-900 shadow-sm border border-stone-200'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              Creative
            </button>
            <button
              onClick={() => onTemplateChange('professional')}
              className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all cursor-pointer ${
                activeTemplate === 'professional'
                  ? 'bg-white text-stone-900 shadow-sm border border-stone-200'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              Professional
            </button>
          </div>
        </div>

        {/* Viewport Resizer */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-stone-500 font-display">Preview Mode:</span>
          <div className="bg-stone-100 p-1 rounded-lg border border-stone-200 flex gap-1">
            <button
              onClick={() => setPreviewMode('desktop')}
              className={`p-1.5 rounded-md transition-all cursor-pointer ${
                previewMode === 'desktop'
                  ? 'bg-white text-stone-900 shadow-sm border border-stone-200'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
              title="Desktop Preview"
            >
              <Monitor size={15} />
            </button>
            <button
              onClick={() => setPreviewMode('mobile')}
              className={`p-1.5 rounded-md transition-all cursor-pointer ${
                previewMode === 'mobile'
                  ? 'bg-white text-stone-900 shadow-sm border border-stone-200'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
              title="Mobile Preview"
            >
              <Smartphone size={15} />
            </button>
          </div>
        </div>

      </div>

      {/* Frame Container simulating real browser */}
      <div className="flex-1 flex items-start justify-center bg-stone-100/50 rounded-2xl border border-stone-200 p-4 min-h-[500px] overflow-hidden relative">
        <div
          className={`w-full flex flex-col bg-[#FAF7F2] rounded-xl border-2 border-stone-800 shadow-[6px_6px_0px_0px_rgba(41,37,36,0.15)] overflow-hidden transition-all duration-300 ${
            previewMode === 'mobile' ? 'max-w-[360px] h-[640px]' : 'h-full max-h-[750px]'
          }`}
        >
          {/* Mock Browser Titlebar */}
          <div className="bg-white border-b-2 border-stone-800 px-4 py-2.5 flex items-center justify-between select-none">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400 border border-stone-850" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-stone-850" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 border border-stone-850" />
            </div>
            
            <div className="text-[10px] font-mono font-medium text-stone-400 px-8 py-0.5 bg-stone-50 border border-stone-200 rounded-md truncate max-w-[200px] sm:max-w-xs text-center">
              {data.fullName ? `${data.fullName.toLowerCase().replace(/[^a-z0-9]/g, '-')}.dev` : 'preview.printfolio.dev'}
            </div>

            <div className="w-8" />
          </div>

          {/* Scrollable Frame Content */}
          <div className="flex-1 overflow-y-auto bg-[#FAF7F2]">
            {renderTemplate()}
          </div>
        </div>
      </div>
    </div>
  );
}
