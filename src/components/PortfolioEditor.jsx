import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Link2, Wrench, FolderGit2, Briefcase, GraduationCap,
  Plus, Trash2, ChevronDown, ChevronUp, AlertCircle, RefreshCw,
  Download, Upload, FileText, CheckCircle
} from 'lucide-react';

export default function PortfolioEditor({
  data,
  onChange,
  onReset,
  onImportJSON,
  onExportJSON,
  onExportHTML
}) {
  const [activeSection, setActiveSection] = useState('personal');
  const [skillInput, setSkillInput] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [username, setUsername] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  const copyShareLink = () => {
    const shareUrl = `printfolio.dev/${username || 'username'}`;
    navigator.clipboard.writeText(`https://${shareUrl}`).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    });
  };

  // Handle single fields (personal / education)
  const handleFieldChange = (section, field, value) => {
    if (section) {
      onChange({
        ...data,
        [section]: {
          ...data[section],
          [field]: value
        }
      });
    } else {
      onChange({
        ...data,
        [field]: value
      });
    }
  };

  const triggerNotification = (msg) => {
    setSuccessMsg(msg);
    setTimeout(() => {
      setSuccessMsg('');
    }, 3000);
  };

  // Skill Methods
  const addSkill = (e) => {
    e.preventDefault();
    const cleanSkill = skillInput.trim();
    if (!cleanSkill) return;
    if (data.skills.includes(cleanSkill)) {
      setSkillInput('');
      return;
    }
    onChange({
      ...data,
      skills: [...data.skills, cleanSkill]
    });
    setSkillInput('');
  };

  const removeSkill = (indexToRemove) => {
    onChange({
      ...data,
      skills: data.skills.filter((_, idx) => idx !== indexToRemove)
    });
  };

  // Projects Methods
  const addProject = () => {
    const newProj = {
      id: `proj-${Date.now()}`,
      name: '',
      description: '',
      techStack: '',
      githubUrl: '',
      liveUrl: ''
    };
    onChange({
      ...data,
      projects: [...data.projects, newProj]
    });
  };

  const updateProject = (id, field, value) => {
    onChange({
      ...data,
      projects: data.projects.map(proj =>
        proj.id === id ? { ...proj, [field]: value } : proj
      )
    });
  };

  const removeProject = (id) => {
    onChange({
      ...data,
      projects: data.projects.filter(proj => proj.id !== id)
    });
  };

  // Experience Methods
  const addExperience = () => {
    const newExp = {
      id: `exp-${Date.now()}`,
      companyName: '',
      position: '',
      duration: '',
      description: ''
    };
    onChange({
      ...data,
      experience: [...data.experience, newExp]
    });
  };

  const updateExperience = (id, field, value) => {
    onChange({
      ...data,
      experience: data.experience.map(exp =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    });
  };

  const removeExperience = (id) => {
    onChange({
      ...data,
      experience: data.experience.filter(exp => exp.id !== id)
    });
  };

  // File import helper
  const handleFileImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        onImportJSON(parsed);
        triggerNotification('JSON data imported successfully.');
      } catch (err) {
        alert('Invalid JSON file format.');
      }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset file input
  };

  // Image upload helper
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file.');
      return;
    }

    // Limit to 1MB to prevent filling Local Storage (which has 5MB limit)
    if (file.size > 1024 * 1024) {
      alert('Image size exceeds 1MB. Please choose a smaller image file to save successfully.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      handleFieldChange(null, 'profileImage', event.target.result);
      triggerNotification('Profile image uploaded.');
    };
    reader.readAsDataURL(file);
  };

  const toggleSection = (sectionName) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };

  const sectionHeader = (id, title, Icon) => {
    const isOpen = activeSection === id;
    return (
      <button
        type="button"
        onClick={() => toggleSection(id)}
        className={`w-full flex items-center justify-between p-4 bg-white border border-stone-200 rounded-xl hover:border-stone-850 transition-colors text-left font-display font-bold text-stone-900 cursor-pointer ${
          isOpen ? 'border-stone-850 rounded-b-none' : ''
        }`}
      >
        <div className="flex items-center gap-2.5">
          <div className={`p-1.5 rounded-lg bg-stone-50 border border-stone-200 ${isOpen ? 'bg-orange-50 border-orange-200 text-orange-655' : ''}`}>
            <Icon size={16} />
          </div>
          <span>{title}</span>
        </div>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
    );
  };

  return (
    <div className="space-y-6">
      
      {/* Dynamic Alert Banner */}
      <AnimatePresence>
        {successMsg && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 p-3 bg-green-50 border border-green-300 text-green-800 rounded-xl text-xs font-semibold"
          >
            <CheckCircle size={14} />
            {successMsg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Toolbar */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          {/* Export HTML Button */}
          <button
            type="button"
            onClick={() => {
              onExportHTML();
              triggerNotification('HTML exported successfully.');
            }}
            className="px-3.5 py-1.5 bg-orange-500 text-white font-bold text-xs rounded-lg border-2 border-stone-850 shadow-[2px_2px_0px_0px_rgba(41,37,36,1)] hover:bg-orange-600 active:translate-y-0.5 active:shadow-[0px_0px_0px_0px] transition-all cursor-pointer flex items-center gap-1.5"
          >
            <FileText size={13} /> Export HTML
          </button>
          
          {/* Export JSON Button */}
          <button
            type="button"
            onClick={() => {
              onExportJSON();
              triggerNotification('JSON schema saved.');
            }}
            className="px-3.5 py-1.5 bg-white text-stone-700 font-bold text-xs rounded-lg border border-stone-200 hover:border-stone-850 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Download size={13} /> Export JSON
          </button>

          {/* Import JSON Input */}
          <label className="px-3.5 py-1.5 bg-white text-stone-700 font-bold text-xs rounded-lg border border-stone-200 hover:border-stone-850 transition-all cursor-pointer flex items-center gap-1.5">
            <Upload size={13} /> Import JSON
            <input
              type="file"
              accept=".json"
              onChange={handleFileImport}
              className="hidden"
            />
          </label>
        </div>

        {/* Clear Data Button */}
        <button
          type="button"
          onClick={() => {
            if (window.confirm('Are you sure you want to clear all portfolio data?')) {
              onReset();
              triggerNotification('Cleared data.');
            }
          }}
          className="px-3 py-1.5 text-stone-500 hover:text-red-500 text-xs font-semibold rounded-lg hover:bg-red-50 transition-colors flex items-center gap-1 cursor-pointer"
        >
          <RefreshCw size={12} /> Reset Data
        </button>
      </div>

      {/* Share Link Preview Card */}
      <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-sm space-y-2">
        <h3 className="text-xs font-bold text-stone-500 font-display uppercase tracking-wider">Public Portfolio URL</h3>
        <div className="flex flex-col sm:flex-row items-stretch gap-2">
          <div className="flex-1 bg-stone-50 border border-stone-200 rounded-lg p-2.5 flex items-center gap-1 font-mono text-xs text-stone-600 select-all overflow-x-auto whitespace-nowrap">
            <span className="text-stone-400">printfolio.dev/</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
              placeholder="username"
              className="bg-transparent text-stone-850 font-bold border-none outline-none w-full p-0 font-mono focus:ring-0"
            />
          </div>
          <button
            type="button"
            onClick={copyShareLink}
            className={`px-4 py-2.5 font-bold text-xs rounded-lg border border-stone-850 transition-all cursor-pointer flex items-center justify-center gap-1.5 shrink-0 ${
              copiedLink 
                ? 'bg-green-500 text-white border-green-500 shadow-[1px_1px_0px_0px_rgba(0,0,0,0.15)]'
                : 'bg-white text-stone-850 shadow-[2px_2px_0px_0px_rgba(41,37,36,1)] hover:bg-stone-50 active:translate-y-0.5 active:shadow-[0px_0px_0px_0px]'
            }`}
          >
            {copiedLink ? (
              <>
                <CheckCircle size={14} /> Copied!
              </>
            ) : (
              <>
                <Link2 size={14} /> Copy Link
              </>
            )}
          </button>
        </div>
      </div>

      {/* Form sections */}
      <div className="space-y-4">
        
        {/* PERSONAL INFORMATION */}
        <div className="rounded-xl overflow-hidden shadow-sm">
          {sectionHeader('personal', 'Personal Information', User)}
          
          {activeSection === 'personal' && (
            <div className="p-4 bg-white border-x border-b border-stone-200 rounded-b-xl space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-500 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={data.fullName}
                    onChange={(e) => handleFieldChange(null, 'fullName', e.target.value)}
                    placeholder="e.g. Aryan Maurya"
                    className="w-full text-sm border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-stone-500 mb-1">Job Title</label>
                  <input
                    type="text"
                    value={data.jobTitle}
                    onChange={(e) => handleFieldChange(null, 'jobTitle', e.target.value)}
                    placeholder="e.g. Full Stack Engineer"
                    className="w-full text-sm border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-500 mb-1">Location</label>
                <input
                  type="text"
                  value={data.location}
                  onChange={(e) => handleFieldChange(null, 'location', e.target.value)}
                  placeholder="e.g. Mumbai, India"
                  className="w-full text-sm border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-500 mb-1">Email</label>
                  <input
                    type="email"
                    value={data.email}
                    onChange={(e) => handleFieldChange(null, 'email', e.target.value)}
                    placeholder="e.g. aryan@example.com"
                    className="w-full text-sm border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-stone-500 mb-1">Profile Photo</label>
                  <div className="flex flex-col sm:flex-row gap-3 items-center">
                    {data.profileImage && (
                      <div className="relative shrink-0">
                        <img
                          src={data.profileImage}
                          alt="Profile Preview"
                          className="w-12 h-12 rounded-full object-cover border border-stone-200"
                        />
                        <button
                          type="button"
                          onClick={() => handleFieldChange(null, 'profileImage', '')}
                          className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-0.5 shadow hover:bg-red-600 transition-colors cursor-pointer text-[10px] w-4 h-4 flex items-center justify-center font-bold"
                          title="Remove image"
                        >
                          ×
                        </button>
                      </div>
                    )}
                    
                    <div className="w-full flex flex-col gap-2">
                      <label className="px-3 py-2 bg-stone-100 hover:bg-stone-200 border border-stone-200 rounded-lg text-xs font-bold text-stone-700 hover:text-stone-900 cursor-pointer transition-all flex items-center justify-center gap-1.5 w-full text-center">
                        <Upload size={13} /> Select Photo File
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                      
                      <input
                        type="text"
                        value={data.profileImage}
                        onChange={(e) => handleFieldChange(null, 'profileImage', e.target.value)}
                        placeholder="Or paste external image URL..."
                        className="w-full text-xs border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-500 mb-1">Short Bio</label>
                <textarea
                  rows="3"
                  value={data.bio}
                  onChange={(e) => handleFieldChange(null, 'bio', e.target.value)}
                  placeholder="Tell people about yourself, what you love building, and what technologies you use..."
                  className="w-full text-sm border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 outline-none transition-colors resize-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* SOCIAL LINKS */}
        <div className="rounded-xl overflow-hidden shadow-sm">
          {sectionHeader('socials', 'Social Links', Link2)}
          
          {activeSection === 'socials' && (
            <div className="p-4 bg-white border-x border-b border-stone-200 rounded-b-xl space-y-4">
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-stone-500 mb-1">GitHub Profile URL</label>
                  <input
                    type="text"
                    value={data.socials.github || ''}
                    onChange={(e) => handleFieldChange('socials', 'github', e.target.value)}
                    placeholder="https://github.com/username"
                    className="w-full text-sm border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-500 mb-1">LinkedIn Profile URL</label>
                  <input
                    type="text"
                    value={data.socials.linkedin || ''}
                    onChange={(e) => handleFieldChange('socials', 'linkedin', e.target.value)}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full text-sm border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-500 mb-1">Personal Website URL</label>
                  <input
                    type="text"
                    value={data.socials.website || ''}
                    onChange={(e) => handleFieldChange('socials', 'website', e.target.value)}
                    placeholder="https://yourname.dev"
                    className="w-full text-sm border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SKILLS */}
        <div className="rounded-xl overflow-hidden shadow-sm">
          {sectionHeader('skills', 'Skills & Expertise', Wrench)}
          
          {activeSection === 'skills' && (
            <div className="p-4 bg-white border-x border-b border-stone-200 rounded-b-xl space-y-4">
              
              {/* Skill Input Form */}
              <form onSubmit={addSkill} className="flex gap-2">
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  placeholder="e.g. React, Next.js, Go"
                  className="flex-1 text-sm border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 bg-stone-900 text-white font-bold text-xs rounded-lg hover:bg-stone-800 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Plus size={14} /> Add
                </button>
              </form>

              {/* Badge Display */}
              <div>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">My Skills (click to delete)</p>
                {data.skills && data.skills.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5">
                    {data.skills.map((skill, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => removeSkill(index)}
                        className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-orange-50 border border-orange-200 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all flex items-center gap-1 group cursor-pointer"
                      >
                        {skill}
                        <span className="text-[10px] text-orange-400 group-hover:text-red-400">×</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 border border-dashed border-stone-200 rounded-lg text-center text-xs text-stone-450">
                    No skills added yet. Type a skill and click Add.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* PROJECTS */}
        <div className="rounded-xl overflow-hidden shadow-sm">
          {sectionHeader('projects', 'Projects', FolderGit2)}
          
          {activeSection === 'projects' && (
            <div className="p-4 bg-white border-x border-b border-stone-200 rounded-b-xl space-y-4">
              
              {data.projects && data.projects.length > 0 ? (
                <div className="space-y-4">
                  {data.projects.map((project, idx) => (
                    <div key={project.id} className="p-4 border border-stone-200 rounded-xl space-y-3 relative bg-stone-50/50">
                      
                      {/* Close/Remove project */}
                      <button
                        type="button"
                        onClick={() => removeProject(project.id)}
                        className="absolute top-3 right-3 text-stone-400 hover:text-red-500 transition-colors cursor-pointer"
                        title="Delete project"
                      >
                        <Trash2 size={15} />
                      </button>

                      <div className="pr-6">
                        <span className="text-[10px] font-mono text-stone-400 font-bold bg-white border border-stone-200 px-2 py-0.5 rounded-full">
                          Project #{idx + 1}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-stone-500 mb-1">Project Name</label>
                          <input
                            type="text"
                            value={project.name}
                            onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                            placeholder="e.g. TaskFlow"
                            className="w-full text-xs border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 bg-white outline-none"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-[10px] font-bold text-stone-500 mb-1">Tech Stack</label>
                          <input
                            type="text"
                            value={project.techStack}
                            onChange={(e) => updateProject(project.id, 'techStack', e.target.value)}
                            placeholder="e.g. React, Node.js, Socket.io"
                            className="w-full text-xs border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 bg-white outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[10px] font-bold text-stone-500 mb-1">GitHub Repo URL</label>
                          <input
                            type="text"
                            value={project.githubUrl}
                            onChange={(e) => updateProject(project.id, 'githubUrl', e.target.value)}
                            placeholder="https://github.com/username/project"
                            className="w-full text-xs border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 bg-white outline-none"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-[10px] font-bold text-stone-500 mb-1">Live Demo URL</label>
                          <input
                            type="text"
                            value={project.liveUrl}
                            onChange={(e) => updateProject(project.id, 'liveUrl', e.target.value)}
                            placeholder="https://project-demo.com"
                            className="w-full text-xs border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 bg-white outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-stone-500 mb-1">Description</label>
                        <textarea
                          rows="2"
                          value={project.description}
                          onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                          placeholder="Describe the problem you solved, and which features you implemented..."
                          className="w-full text-xs border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 bg-white outline-none resize-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 border border-dashed border-stone-205 rounded-xl text-center">
                  <AlertCircle className="mx-auto text-stone-300 mb-2" size={24} />
                  <p className="text-xs text-stone-450 font-medium">Your projects will appear here.</p>
                  <p className="text-[10px] text-stone-400 mt-1">Click the button below to add your first work.</p>
                </div>
              )}

              <button
                type="button"
                onClick={addProject}
                className="w-full p-2.5 border-2 border-dashed border-stone-300 hover:border-stone-850 rounded-xl text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Plus size={14} /> Add Project
              </button>
            </div>
          )}
        </div>

        {/* WORK EXPERIENCE */}
        <div className="rounded-xl overflow-hidden shadow-sm">
          {sectionHeader('experience', 'Experience', Briefcase)}
          
          {activeSection === 'experience' && (
            <div className="p-4 bg-white border-x border-b border-stone-200 rounded-b-xl space-y-4">
              
              {data.experience && data.experience.length > 0 ? (
                <div className="space-y-4">
                  {data.experience.map((exp, idx) => (
                    <div key={exp.id} className="p-4 border border-stone-200 rounded-xl space-y-3 relative bg-stone-50/50">
                      
                      {/* Close/Remove experience */}
                      <button
                        type="button"
                        onClick={() => removeExperience(exp.id)}
                        className="absolute top-3 right-3 text-stone-400 hover:text-red-500 transition-colors cursor-pointer"
                        title="Delete experience"
                      >
                        <Trash2 size={15} />
                      </button>

                      <div className="pr-6">
                        <span className="text-[10px] font-mono text-stone-400 font-bold bg-white border border-stone-200 px-2 py-0.5 rounded-full">
                          Experience #{idx + 1}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="sm:col-span-1">
                          <label className="block text-[10px] font-bold text-stone-500 mb-1">Company Name</label>
                          <input
                            type="text"
                            value={exp.companyName}
                            onChange={(e) => updateExperience(exp.id, 'companyName', e.target.value)}
                            placeholder="e.g. Vapor Labs"
                            className="w-full text-xs border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 bg-white outline-none"
                          />
                        </div>
                        
                        <div className="sm:col-span-1">
                          <label className="block text-[10px] font-bold text-stone-500 mb-1">Position / Role</label>
                          <input
                            type="text"
                            value={exp.position}
                            onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                            placeholder="e.g. Lead Developer"
                            className="w-full text-xs border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 bg-white outline-none"
                          />
                        </div>

                        <div className="sm:col-span-1">
                          <label className="block text-[10px] font-bold text-stone-500 mb-1">Duration</label>
                          <input
                            type="text"
                            value={exp.duration}
                            onChange={(e) => updateExperience(exp.id, 'duration', e.target.value)}
                            placeholder="e.g. 2023 - Present"
                            className="w-full text-xs border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 bg-white outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-stone-500 mb-1">Description</label>
                        <textarea
                          rows="3"
                          value={exp.description}
                          onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                          placeholder="List key achievements, features developed, and methodologies implemented..."
                          className="w-full text-xs border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 bg-white outline-none resize-none"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 border border-dashed border-stone-205 rounded-xl text-center">
                  <AlertCircle className="mx-auto text-stone-300 mb-2" size={24} />
                  <p className="text-xs text-stone-450 font-medium">Your work history will appear here.</p>
                </div>
              )}

              <button
                type="button"
                onClick={addExperience}
                className="w-full p-2.5 border-2 border-dashed border-stone-300 hover:border-stone-850 rounded-xl text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Plus size={14} /> Add Experience
              </button>
            </div>
          )}
        </div>

        {/* EDUCATION */}
        <div className="rounded-xl overflow-hidden shadow-sm">
          {sectionHeader('education', 'Education', GraduationCap)}
          
          {activeSection === 'education' && (
            <div className="p-4 bg-white border-x border-b border-stone-200 rounded-b-xl space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-500 mb-1">College / University</label>
                  <input
                    type="text"
                    value={data.education.college}
                    onChange={(e) => handleFieldChange('education', 'college', e.target.value)}
                    placeholder="e.g. IIT Bombay"
                    className="w-full text-sm border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-500 mb-1">Degree / Course</label>
                  <input
                    type="text"
                    value={data.education.degree}
                    onChange={(e) => handleFieldChange('education', 'degree', e.target.value)}
                    placeholder="e.g. B.Tech in CSE"
                    className="w-full text-sm border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-500 mb-1">Year of Graduation</label>
                <input
                  type="text"
                  value={data.education.year}
                  onChange={(e) => handleFieldChange('education', 'year', e.target.value)}
                  placeholder="e.g. 2017 - 2021"
                  className="w-full text-sm border border-stone-200 focus:border-stone-850 rounded-lg p-2.5 outline-none transition-colors"
                />
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
