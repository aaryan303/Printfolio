import { Mail, MapPin, ExternalLink, Globe } from 'lucide-react';
import { Github, Linkedin } from '../Icons';

export default function MinimalTemplate({ data }) {
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
    <div className="max-w-3xl mx-auto px-6 py-12 text-stone-800 bg-[#FAF7F2] min-h-full font-sans">
      {/* Header */}
      <header className="mb-12 border-b border-stone-200 pb-8">
        <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-6">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-stone-900 font-display mb-2">
              {fullName}
            </h1>
            <p className="text-xl font-medium text-stone-600 mb-4">{jobTitle}</p>
            
            <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm text-stone-500">
              {location && (
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {location}
                </span>
              )}
              {email && (
                <a href={`mailto:${email}`} className="flex items-center gap-1 hover:text-stone-900 transition-colors">
                  <Mail size={14} />
                  {email}
                </a>
              )}
            </div>
          </div>
          
          {profileImage && (
            <img
              src={profileImage}
              alt={fullName}
              className="w-24 h-24 rounded-full object-cover border border-stone-200 bg-stone-100 self-start md:self-center"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          )}
        </div>
      </header>

      {/* About Section */}
      {bio && (
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-4 font-display">About</h2>
          <p className="text-stone-600 leading-relaxed text-base whitespace-pre-wrap">{bio}</p>
        </section>
      )}

      {/* Social Links */}
      {Object.values(socials).some(Boolean) && (
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-4 font-display">Connect</h2>
          <div className="flex flex-wrap gap-4 text-sm">
            {socials.github && (
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-stone-600 hover:text-stone-900 border-b border-transparent hover:border-stone-900 transition-all pb-0.5"
              >
                <Github size={14} /> GitHub
              </a>
            )}
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-stone-600 hover:text-stone-900 border-b border-transparent hover:border-stone-900 transition-all pb-0.5"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            )}
            {socials.website && (
              <a
                href={socials.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-stone-600 hover:text-stone-900 border-b border-transparent hover:border-stone-900 transition-all pb-0.5"
              >
                <Globe size={14} /> Website
              </a>
            )}
          </div>
        </section>
      )}

      {/* Skills */}
      {skills && skills.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-4 font-display">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs font-medium rounded bg-stone-100 text-stone-700 border border-stone-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects && projects.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-6 font-display">Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={project.id || index} className="group">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-semibold text-stone-900 group-hover:text-stone-600 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex gap-3 text-xs text-stone-500">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 flex items-center gap-0.5">
                        GitHub <ExternalLink size={10} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-stone-900 flex items-center gap-0.5">
                        Demo <ExternalLink size={10} />
                      </a>
                    )}
                  </div>
                </div>
                {project.techStack && (
                  <p className="text-xs text-stone-400 font-mono mb-2">{project.techStack}</p>
                )}
                <p className="text-stone-600 text-sm leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Experience */}
      {experience && experience.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-6 font-display">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={exp.id || index}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                  <div>
                    <h3 className="font-semibold text-stone-900">{exp.companyName}</h3>
                    <p className="text-stone-500 text-sm">{exp.position}</p>
                  </div>
                  <span className="text-xs font-mono text-stone-400 bg-stone-100 px-2 py-0.5 rounded self-start">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed whitespace-pre-wrap">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education && (education.college || education.degree) && (
        <section>
          <h2 className="text-xs uppercase tracking-widest text-stone-400 font-bold mb-4 font-display">Education</h2>
          <div>
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold text-stone-900">{education.college || 'College'}</h3>
              {education.year && (
                <span className="text-xs font-mono text-stone-400">{education.year}</span>
              )}
            </div>
            <p className="text-stone-500 text-sm">{education.degree || 'Degree'}</p>
          </div>
        </section>
      )}
    </div>
  );
}
