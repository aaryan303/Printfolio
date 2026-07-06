import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import BuilderPage from './pages/BuilderPage';
import { defaultData } from './data/defaultData';
import { downloadJSON, downloadHTML } from './utils/export';

const LOCAL_STORAGE_KEY = 'printfolio_portfolio_data';
const TEMPLATE_STORAGE_KEY = 'printfolio_active_template';

const EMPTY_DATA = {
  fullName: '',
  jobTitle: '',
  bio: '',
  location: '',
  email: '',
  profileImage: '',
  socials: {
    github: '',
    linkedin: '',
    website: ''
  },
  skills: [],
  projects: [],
  experience: [],
  education: {
    college: '',
    degree: '',
    year: ''
  }
};

export default function App() {
  const [view, setView] = useState('landing'); // landing or builder
  const [portfolioData, setPortfolioData] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to load local storage printfolio data", e);
      }
    }
    return defaultData;
  });

  const [activeTemplate, setActiveTemplate] = useState(() => {
    return localStorage.getItem(TEMPLATE_STORAGE_KEY) || 'minimal';
  });

  // Auto-save portfolio data
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(portfolioData));
  }, [portfolioData]);

  // Auto-save template selection
  useEffect(() => {
    localStorage.setItem(TEMPLATE_STORAGE_KEY, activeTemplate);
  }, [activeTemplate]);

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  // Form value change handler
  const handleDataChange = (newData) => {
    setPortfolioData(newData);
  };

  // Reset to empty schema values
  const handleResetData = () => {
    setPortfolioData(EMPTY_DATA);
  };

  // Import JSON handler
  const handleImportJSON = (importedData) => {
    // Validate data structure and merge
    const merged = {
      ...EMPTY_DATA,
      ...importedData,
      socials: {
        ...EMPTY_DATA.socials,
        ...(importedData.socials || {})
      },
      education: {
        ...EMPTY_DATA.education,
        ...(importedData.education || {})
      },
      skills: Array.isArray(importedData.skills) ? importedData.skills : [],
      projects: Array.isArray(importedData.projects) ? importedData.projects : [],
      experience: Array.isArray(importedData.experience) ? importedData.experience : []
    };
    setPortfolioData(merged);
  };

  // Export handlers
  const handleExportJSON = () => {
    downloadJSON(portfolioData);
  };

  const handleExportHTML = () => {
    downloadHTML(portfolioData, activeTemplate);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col font-sans">
      {/* Persistent Navigation */}
      <Navbar onViewChange={setView} />

      {/* Page Routing */}
      {view === 'landing' ? (
        <LandingPage onViewChange={setView} />
      ) : (
        <BuilderPage
          data={portfolioData}
          onChange={handleDataChange}
          onReset={handleResetData}
          onImportJSON={handleImportJSON}
          onExportJSON={handleExportJSON}
          onExportHTML={handleExportHTML}
          activeTemplate={activeTemplate}
          onTemplateChange={setActiveTemplate}
          onBackToHome={() => setView('landing')}
        />
      )}
    </div>
  );
}
