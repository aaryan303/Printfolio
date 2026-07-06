import { Mail, MapPin, ExternalLink, Globe, Sparkles } from 'lucide-react';
import { Github, Linkedin } from '../Icons';

export default function CreativeTemplate({ data, isMobile }) {
  const {
    fullName = "Your Name",
    jobTitle = "Developer Position",
    bio = "Developer biography goes here.",
    location = "",
    email = "",
    profileImage = "",
    socials = {},
    skills = [],
    projects = [],
    experience = [],
    education = {}
  } = data;

  // Let's create helper to cycle colors
  const colors = [
    { bg: "bg-sky-50", border: "border-sky-200", text: "text-sky-800", pill: "bg-sky-100 border-sky-300" },
    { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-800", pill: "bg-orange-100 border-orange-300" },
    { bg: "bg-green-50", border: "border-green-200", text: "text-green-800", pill: "bg-green-100 border-green-300" },
    { bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-800", pill: "bg-yellow-100 border-yellow-300" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-stone-800 bg-[#FAF7F2] min-h-full font-sans">
      {/* Header Profile Box */}
      <header className="bg-white border-2 border-stone-800 rounded-3xl p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(41,37,36,1)] mb-12 relative overflow-hidden">
        {/* Subtle decorative circle */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-yellow-100 rounded-full opacity-60 pointer-events-none" />
        
        <div className={`flex gap-6 items-center relative z-10 ${
          isMobile ? 'flex-col text-center' : 'flex-col md:flex-row text-center md:text-left'
        }`}>
          {profileImage ? (
            <img
              src={profileImage}
              alt={fullName}
              className="w-28 h-28 rounded-2xl object-cover border-2 border-stone-800 shadow-[3px_3px_0px_0px_rgba(41,37,36,1)]"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          ) : (
            <div className="w-28 h-28 rounded-2xl bg-orange-100 border-2 border-stone-800 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(41,37,36,1)]">
              <Sparkles className="text-orange-500 w-10 h-10" />
            </div>
          )}
          
          <div className={`flex-1 ${isMobile ? 'text-center' : 'text-center md:text-left'}`}>
            <div className="inline-block px-3 py-1 bg-sky-100 text-sky-855 text-xs font-bold rounded-full border border-sky-300 mb-2 uppercase tracking-wider font-display">
              {jobTitle}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 font-display mb-3">
              {fullName}
            </h1>
            
            <div className={`flex flex-wrap gap-4 text-sm text-stone-600 ${
              isMobile ? 'justify-center' : 'justify-center md:justify-start'
            }`}>
              {location && (
                <span className="flex items-center gap-1 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
                  <MapPin size={14} className="text-stone-500" />
                  {location}
                </span>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-1 bg-stone-100 hover:bg-stone-200 px-3 py-1 rounded-full border border-stone-200 transition-colors"
                >
                  <Mail size={14} className="text-stone-500" />
                  {email}
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Grid structure for main layout */}
      <div className={isMobile ? "space-y-8" : "grid grid-cols-1 md:grid-cols-3 gap-8"}>
        
        {/* Left column (About & Skills & Connect) */}
        <div className="space-y-8 md:col-span-1">
          {/* Bio */}
          {bio && (
            <section className="bg-orange-50 border border-stone-850 rounded-2xl p-5 shadow-[3px_3px_0px_0px_rgba(34,34,34,1)]">
              <h2 className="text-lg font-bold text-stone-900 font-display mb-3 flex items-center gap-2">
                <span>👋</span> About Me
              </h2>
              <p className="text-stone-700 text-sm leading-relaxed whitespace-pre-wrap">{bio}</p>
            </section>
          )}

          {/* Social Links */}
          {Object.values(socials).some(Boolean) && (
            <section className="bg-yellow-50 border border-stone-850 rounded-2xl p-5 shadow-[3px_3px_0px_0px_rgba(34,34,34,1)]">
              <h2 className="text-lg font-bold text-stone-900 font-display mb-3">Connect</h2>
              <div className="flex flex-col gap-2">
                {socials.github && (
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-stone-700 hover:text-stone-900 bg-white p-2 rounded-xl border border-stone-200 hover:border-stone-800 transition-colors"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
                {socials.linkedin && (
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-stone-700 hover:text-stone-900 bg-white p-2 rounded-xl border border-stone-200 hover:border-stone-800 transition-colors"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                )}
                {socials.website && (
                  <a
                    href={socials.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-stone-700 hover:text-stone-900 bg-white p-2 rounded-xl border border-stone-200 hover:border-stone-800 transition-colors"
                  >
                    <Globe size={16} /> Website
                  </a>
                )}
              </div>
            </section>
          )}

          {/* Skills */}
          {skills && skills.length > 0 && (
            <section className="bg-sky-50 border border-stone-850 rounded-2xl p-5 shadow-[3px_3px_0px_0px_rgba(34,34,34,1)]">
              <h2 className="text-lg font-bold text-stone-900 font-display mb-3">Skills</h2>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill, index) => {
                  const style = colors[index % colors.length];
                  return (
                    <span
                      key={index}
                      className={`px-2.5 py-1 text-xs font-bold rounded-lg border border-stone-800 ${style.bg} ${style.text}`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        {/* Right column (Projects & Experience & Education) */}
        <div className="md:col-span-2 space-y-8">
          {/* Projects */}
          {projects && projects.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-stone-900 font-display mb-6 flex items-center gap-2">
                <span>🚀</span> Projects
              </h2>
              <div className={`grid grid-cols-1 gap-6 ${isMobile ? '' : 'sm:grid-cols-2'}`}>
                {projects.map((project, index) => {
                  const style = colors[index % colors.length];
                  return (
                    <div
                      key={project.id || index}
                      className="bg-white border border-stone-850 rounded-2xl p-5 shadow-[3px_3px_0px_0px_rgba(34,34,34,1)] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-stone-900 text-lg leading-tight font-display">
                            {project.name}
                          </h3>
                        </div>
                        {project.techStack && (
                          <div className="text-[10px] text-stone-500 font-mono tracking-tighter mb-3 uppercase font-semibold">
                            {project.techStack}
                          </div>
                        )}
                        <p className="text-stone-600 text-xs leading-relaxed mb-4">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex gap-4 border-t border-stone-100 pt-3 text-xs font-semibold">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-stone-600 hover:text-stone-900"
                          >
                            <Github size={12} /> Code
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-stone-600 hover:text-stone-900"
                          >
                            <ExternalLink size={12} /> Demo
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Experience */}
          {experience && experience.length > 0 && (
            <section className="bg-white border border-stone-850 rounded-2xl p-6 shadow-[3px_3px_0px_0px_rgba(34,34,34,1)]">
              <h2 className="text-xl font-bold text-stone-900 font-display mb-6 flex items-center gap-2">
                <span>💼</span> Experience
              </h2>
              <div className="relative border-l-2 border-stone-200 pl-4 ml-2 space-y-6">
                {experience.map((exp, index) => (
                  <div key={exp.id || index} className="relative">
                    {/* Circle bullet */}
                    <div className="absolute -left-[25px] top-1.5 w-3.5 h-3.5 bg-yellow-300 border-2 border-stone-850 rounded-full" />
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                      <div>
                        <h3 className="font-bold text-stone-900">{exp.companyName}</h3>
                        <p className="text-stone-500 text-xs font-semibold">{exp.position}</p>
                      </div>
                      <span className="text-[10px] font-bold text-stone-700 bg-stone-100 border border-stone-300 px-2 py-0.5 rounded-full">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-stone-600 text-xs leading-relaxed whitespace-pre-wrap">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education && (education.college || education.degree) && (
            <section className="bg-green-50 border border-stone-850 rounded-2xl p-5 shadow-[3px_3px_0px_0px_rgba(34,34,34,1)]">
              <h2 className="text-lg font-bold text-stone-900 font-display mb-3 flex items-center gap-2">
                <span>🎓</span> Education
              </h2>
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h3 className="font-bold text-stone-900">{education.college || 'College'}</h3>
                  <p className="text-stone-600 text-sm mt-0.5">{education.degree || 'Degree'}</p>
                </div>
                {education.year && (
                  <span className="text-[10px] font-bold text-stone-700 bg-white border border-stone-300 px-2 py-0.5 rounded-full">
                    {education.year}
                  </span>
                )}
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
}
