import { Mail, MapPin, ExternalLink, Globe } from 'lucide-react';
import { Github, Linkedin } from '../Icons';

export default function ProfessionalTemplate({ data, isMobile }) {
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

  return (
    <div className="max-w-5xl mx-auto px-8 py-12 text-stone-850 bg-white min-h-full font-sans shadow-sm border border-stone-200">
      
      {/* Top Section */}
      <header className={`border-b-2 border-stone-800 pb-6 mb-8 flex gap-6 ${
        isMobile ? 'flex-col items-start' : 'flex-col md:flex-row justify-between items-start md:items-center'
      }`}>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-stone-900 font-display">
            {fullName}
          </h1>
          <p className="text-lg font-medium text-stone-500 font-mono mt-1">{jobTitle}</p>
        </div>
        
        <div className={`flex flex-col text-sm text-stone-600 gap-1 font-mono ${
          isMobile ? '' : 'md:text-right'
        }`}>
          {location && (
            <span className={`flex items-center gap-1.5 ${isMobile ? '' : 'md:justify-end'}`}>
              <MapPin size={14} className="text-stone-400" />
              {location}
            </span>
          )}
          {email && (
            <a href={`mailto:${email}`} className={`flex items-center gap-1.5 hover:text-stone-900 hover:underline ${
              isMobile ? '' : 'md:justify-end'
            }`}>
              <Mail size={14} className="text-stone-400" />
              {email}
            </a>
          )}
        </div>
      </header>

      {/* Main Two-Column Content Grid */}
      <div className={isMobile ? "space-y-8" : "grid grid-cols-1 md:grid-cols-4 gap-8"}>
        
        {/* Sidebar Left (1 of 4 columns) */}
        <div className={isMobile ? "space-y-6" : "md:col-span-1 space-y-6 border-r-0 md:border-r border-stone-200 pr-0 md:pr-6"}>
          
          {/* Profile pic */}
          {profileImage && (
            <img
              src={profileImage}
              alt={fullName}
              className="w-full aspect-square rounded object-cover border border-stone-300 bg-stone-50 mb-4"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          )}

          {/* Social Links */}
          {Object.values(socials).some(Boolean) && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-stone-400 border-b border-stone-200 pb-1.5 mb-3 font-display">
                Online
              </h2>
              <ul className="space-y-2 text-xs font-medium">
                {socials.github && (
                  <li>
                    <a href={socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone-600 hover:text-stone-900 hover:underline">
                      <Github size={14} /> GitHub
                    </a>
                  </li>
                )}
                {socials.linkedin && (
                  <li>
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone-600 hover:text-stone-900 hover:underline">
                      <Linkedin size={14} /> LinkedIn
                    </a>
                  </li>
                )}
                {socials.website && (
                  <li>
                    <a href={socials.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-stone-600 hover:text-stone-900 hover:underline">
                      <Globe size={14} /> Website
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Skills */}
          {skills && skills.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-stone-400 border-b border-stone-200 pb-1.5 mb-3 font-display">
                Expertise
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 text-[10px] font-mono border border-stone-300 rounded bg-stone-50 text-stone-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education && (education.college || education.degree) && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-stone-400 border-b border-stone-200 pb-1.5 mb-3 font-display">
                Education
              </h2>
              <div className="text-xs">
                <p className="font-bold text-stone-850">{education.college}</p>
                <p className="text-stone-500 font-mono italic mt-0.5">{education.degree}</p>
                {education.year && (
                  <p className="text-stone-400 font-mono text-[10px] mt-1">{education.year}</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Core Main Panel Right (3 of 4 columns) */}
        <div className={isMobile ? "space-y-8" : "md:col-span-3 space-y-8"}>
          
          {/* Summary / Bio */}
          {bio && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-stone-400 border-b border-stone-200 pb-1.5 mb-3 font-display">
                Professional Summary
              </h2>
              <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-wrap">
                {bio}
              </p>
            </section>
          )}

          {/* Experience */}
          {experience && experience.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-stone-400 border-b border-stone-200 pb-1.5 mb-4 font-display">
                Employment History
              </h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={exp.id || index}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1.5">
                      <div>
                        <span className="font-bold text-stone-900">{exp.companyName}</span>
                        <span className="text-stone-400 mx-2 text-xs">|</span>
                        <span className="text-stone-600 text-sm font-semibold italic">{exp.position}</span>
                      </div>
                      <span className="text-xs font-mono text-stone-500 bg-stone-50 border border-stone-200 px-2 py-0.5 rounded">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-wrap pl-0 md:pl-2 border-l border-stone-100">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {projects && projects.length > 0 && (
            <section>
              <h2 className="text-sm font-bold uppercase tracking-wider text-stone-400 border-b border-stone-200 pb-1.5 mb-4 font-display">
                Select Projects
              </h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={project.id || index} className="p-4 border border-stone-200 rounded">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-1.5">
                      <div>
                        <h3 className="font-bold text-stone-900 text-base flex items-center gap-1.5">
                          {project.name}
                          {project.techStack && (
                            <span className="text-[10px] text-stone-400 font-mono font-normal">
                              ({project.techStack})
                            </span>
                          )}
                        </h3>
                      </div>
                      
                      <div className="flex gap-3 text-xs font-mono">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-950 flex items-center gap-0.5 underline">
                            Source <ExternalLink size={10} />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-950 flex items-center gap-0.5 underline">
                            Demo <ExternalLink size={10} />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-stone-655 text-xs leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
}
