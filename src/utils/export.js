// SVG Icons for self-contained HTML export
const ICONS = {
  MapPin: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:4px;"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  Mail: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:4px;"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  ExternalLink: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-left:2px;"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  Github: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:4px;"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  Linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:4px;"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  Globe: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:4px;"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  Sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>`
};

// Generates Minimal template HTML content
function renderMinimalHTML(data) {
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

  return `
    <div class="max-w-3xl mx-auto px-6 py-12 text-stone-850">
      <!-- Header -->
      <header class="mb-12 border-b border-stone-200 pb-8">
        <div class="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-6">
          <div>
            <h1 class="text-4xl font-extrabold tracking-tight text-stone-900 font-display mb-2">
              ${fullName}
            </h1>
            <p class="text-xl font-medium text-stone-600 mb-4">${jobTitle}</p>
            
            <div class="flex flex-wrap gap-y-2 gap-x-4 text-sm text-stone-500">
              ${location ? `
                <span class="flex items-center gap-1">
                  ${ICONS.MapPin}
                  ${location}
                </span>
              ` : ''}
              ${email ? `
                <a href="mailto:${email}" class="flex items-center gap-1 hover:text-stone-900 transition-colors">
                  ${ICONS.Mail}
                  ${email}
                </a>
              ` : ''}
            </div>
          </div>
          
          ${profileImage ? `
            <img
              src="${profileImage}"
              alt="${fullName}"
              class="w-24 h-24 rounded-full object-cover border border-stone-200 bg-stone-100 self-start md:self-center"
              onerror="this.style.display='none'"
            />
          ` : ''}
        </div>
      </header>

      <!-- About Section -->
      ${bio ? `
        <section class="mb-12">
          <h2 class="text-xs uppercase tracking-widest text-stone-400 font-bold mb-4 font-display">About</h2>
          <p class="text-stone-600 leading-relaxed text-base whitespace-pre-wrap">${bio}</p>
        </section>
      ` : ''}

      <!-- Social Links -->
      ${Object.values(socials).some(Boolean) ? `
        <section class="mb-12">
          <h2 class="text-xs uppercase tracking-widest text-stone-400 font-bold mb-4 font-display">Connect</h2>
          <div class="flex flex-wrap gap-4 text-sm">
            ${socials.github ? `
              <a href="${socials.github}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-stone-600 hover:text-stone-900 border-b border-transparent hover:border-stone-900 transition-all pb-0.5">
                ${ICONS.Github} GitHub
              </a>
            ` : ''}
            ${socials.linkedin ? `
              <a href="${socials.linkedin}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-stone-600 hover:text-stone-900 border-b border-transparent hover:border-stone-900 transition-all pb-0.5">
                ${ICONS.Linkedin} LinkedIn
              </a>
            ` : ''}
            ${socials.website ? `
              <a href="${socials.website}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-stone-600 hover:text-stone-900 border-b border-transparent hover:border-stone-900 transition-all pb-0.5">
                ${ICONS.Globe} Website
              </a>
            ` : ''}
          </div>
        </section>
      ` : ''}

      <!-- Skills -->
      ${skills && skills.length > 0 ? `
        <section class="mb-12">
          <h2 class="text-xs uppercase tracking-widest text-stone-400 font-bold mb-4 font-display">Skills</h2>
          <div class="flex flex-wrap gap-2">
            ${skills.map(skill => `
              <span class="px-2.5 py-1 text-xs font-medium rounded bg-stone-100 text-stone-700 border border-stone-200">
                ${skill}
              </span>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- Projects -->
      ${projects && projects.length > 0 ? `
        <section class="mb-12">
          <h2 class="text-xs uppercase tracking-widest text-stone-400 font-bold mb-6 font-display">Projects</h2>
          <div class="space-y-8">
            ${projects.map(project => `
              <div class="group">
                <div class="flex items-center justify-between mb-1">
                  <h3 class="text-lg font-semibold text-stone-900 group-hover:text-stone-600 transition-colors">
                    ${project.name}
                  </h3>
                  <div class="flex gap-3 text-xs text-stone-500">
                    ${project.githubUrl ? `
                      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="hover:text-stone-900 flex items-center gap-0.5">
                        GitHub ${ICONS.ExternalLink}
                      </a>
                    ` : ''}
                    ${project.liveUrl ? `
                      <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="hover:text-stone-900 flex items-center gap-0.5">
                        Demo ${ICONS.ExternalLink}
                      </a>
                    ` : ''}
                  </div>
                </div>
                ${project.techStack ? `<p class="text-xs text-stone-400 font-mono mb-2">${project.techStack}</p>` : ''}
                <p class="text-stone-600 text-sm leading-relaxed">${project.description}</p>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- Experience -->
      ${experience && experience.length > 0 ? `
        <section class="mb-12">
          <h2 class="text-xs uppercase tracking-widest text-stone-400 font-bold mb-6 font-display">Experience</h2>
          <div class="space-y-6">
            ${experience.map(exp => `
              <div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                  <div>
                    <h3 class="font-semibold text-stone-900">${exp.companyName}</h3>
                    <p class="text-stone-500 text-sm">${exp.position}</p>
                  </div>
                  <span class="text-xs font-mono text-stone-400 bg-stone-100 px-2 py-0.5 rounded self-start">
                    ${exp.duration}
                  </span>
                </div>
                <p class="text-stone-600 text-sm leading-relaxed whitespace-pre-wrap">${exp.description}</p>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- Education -->
      ${education && (education.college || education.degree) ? `
        <section>
          <h2 class="text-xs uppercase tracking-widest text-stone-400 font-bold mb-4 font-display">Education</h2>
          <div>
            <div class="flex justify-between items-start mb-1">
              <h3 class="font-semibold text-stone-900">${education.college || 'College'}</h3>
              ${education.year ? `<span class="text-xs font-mono text-stone-400">${education.year}</span>` : ''}
            </div>
            <p class="text-stone-500 text-sm">${education.degree || 'Degree'}</p>
          </div>
        </section>
      ` : ''}
    </div>
  `;
}

// Generates Creative template HTML content
function renderCreativeHTML(data) {
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

  const colors = [
    { bg: "bg-sky-50", border: "border-sky-200", text: "text-sky-850", pill: "bg-sky-100 border-sky-300" },
    { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-850", pill: "bg-orange-100 border-orange-300" },
    { bg: "bg-green-50", border: "border-green-200", text: "text-green-850", pill: "bg-green-100 border-green-300" },
    { bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-850", pill: "bg-yellow-100 border-yellow-300" }
  ];

  return `
    <div class="max-w-4xl mx-auto px-6 py-12 text-stone-850">
      <!-- Header Profile Box -->
      <header class="bg-white border-2 border-stone-800 rounded-3xl p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(41,37,36,1)] mb-12 relative overflow-hidden">
        <div class="absolute -top-12 -right-12 w-32 h-32 bg-yellow-100 rounded-full opacity-60 pointer-events-none"></div>
        
        <div class="flex flex-col md:flex-row gap-6 items-center relative z-10">
          ${profileImage ? `
            <img
              src="${profileImage}"
              alt="${fullName}"
              class="w-28 h-28 rounded-2xl object-cover border-2 border-stone-800 shadow-[3px_3px_0px_0px_rgba(41,37,36,1)]"
              onerror="this.style.display='none'"
            />
          ` : `
            <div class="w-28 h-28 rounded-2xl bg-orange-100 border-2 border-stone-800 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(41,37,36,1)]">
              ${ICONS.Sparkles}
            </div>
          `}
          
          <div class="text-center md:text-left flex-1">
            <div class="inline-block px-3 py-1 bg-sky-100 text-sky-900 text-xs font-bold rounded-full border border-sky-300 mb-2 uppercase tracking-wider font-display">
              ${jobTitle}
            </div>
            <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 font-display mb-3">
              ${fullName}
            </h1>
            
            <div class="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-stone-600">
              ${location ? `
                <span class="flex items-center gap-1 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
                  ${ICONS.MapPin}
                  ${location}
                </span>
              ` : ''}
              ${email ? `
                <a href="mailto:${email}" class="flex items-center gap-1 bg-stone-100 hover:bg-stone-200 px-3 py-1 rounded-full border border-stone-200 transition-colors">
                  ${ICONS.Mail}
                  ${email}
                </a>
              ` : ''}
            </div>
          </div>
        </div>
      </header>

      <!-- Grid structure for main layout -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Left column (About & Skills & Connect) -->
        <div class="space-y-8 md:col-span-1">
          <!-- Bio -->
          ${bio ? `
            <section class="bg-orange-50 border border-stone-850 rounded-2xl p-5 shadow-[3px_3px_0px_0px_rgba(34,34,34,1)]">
              <h2 class="text-lg font-bold text-stone-900 font-display mb-3 flex items-center gap-2">
                <span>👋</span> About Me
              </h2>
              <p class="text-stone-700 text-sm leading-relaxed whitespace-pre-wrap">${bio}</p>
            </section>
          ` : ''}

          <!-- Social Links -->
          ${Object.values(socials).some(Boolean) ? `
            <section class="bg-yellow-50 border border-stone-850 rounded-2xl p-5 shadow-[3px_3px_0px_0px_rgba(34,34,34,1)]">
              <h2 class="text-lg font-bold text-stone-900 font-display mb-3">Connect</h2>
              <div class="flex flex-col gap-2">
                ${socials.github ? `
                  <a href="${socials.github}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm text-stone-700 hover:text-stone-900 bg-white p-2 rounded-xl border border-stone-200 hover:border-stone-800 transition-colors">
                    ${ICONS.Github} GitHub
                  </a>
                ` : ''}
                ${socials.linkedin ? `
                  <a href="${socials.linkedin}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm text-stone-700 hover:text-stone-900 bg-white p-2 rounded-xl border border-stone-200 hover:border-stone-800 transition-colors">
                    ${ICONS.Linkedin} LinkedIn
                  </a>
                ` : ''}
                ${socials.website ? `
                  <a href="${socials.website}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm text-stone-700 hover:text-stone-900 bg-white p-2 rounded-xl border border-stone-200 hover:border-stone-800 transition-colors">
                    ${ICONS.Globe} Website
                  </a>
                ` : ''}
              </div>
            </section>
          ` : ''}

          <!-- Skills -->
          ${skills && skills.length > 0 ? `
            <section class="bg-sky-50 border border-stone-850 rounded-2xl p-5 shadow-[3px_3px_0px_0px_rgba(34,34,34,1)]">
              <h2 class="text-lg font-bold text-stone-900 font-display mb-3">Skills</h2>
              <div class="flex flex-wrap gap-1.5">
                ${skills.map((skill, index) => {
                  const style = colors[index % colors.length];
                  return `
                    <span class="px-2.5 py-1 text-xs font-bold rounded-lg border border-stone-800 ${style.bg} ${style.text}">
                      ${skill}
                    </span>
                  `;
                }).join('')}
              </div>
            </section>
          ` : ''}
        </div>

        <!-- Right column (Projects & Experience & Education) -->
        <div class="md:col-span-2 space-y-8">
          <!-- Projects -->
          ${projects && projects.length > 0 ? `
            <section>
              <h2 class="text-2xl font-bold text-stone-900 font-display mb-6 flex items-center gap-2">
                <span>🚀</span> Projects
              </h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                ${projects.map((project, index) => `
                  <div class="bg-white border border-stone-850 rounded-2xl p-5 shadow-[3px_3px_0px_0px_rgba(34,34,34,1)] flex flex-col justify-between">
                    <div>
                      <h3 class="font-bold text-stone-900 text-lg leading-tight font-display mb-1">
                        ${project.name}
                      </h3>
                      ${project.techStack ? `
                        <div class="text-[10px] text-stone-500 font-mono tracking-tighter mb-3 uppercase font-semibold">
                          ${project.techStack}
                        </div>
                      ` : ''}
                      <p class="text-stone-600 text-xs leading-relaxed mb-4">
                        ${project.description}
                      </p>
                    </div>
                    
                    <div class="flex gap-4 border-t border-stone-100 pt-3 text-xs font-semibold">
                      ${project.githubUrl ? `
                        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-stone-600 hover:text-stone-900">
                          ${ICONS.Github} Code
                        </a>
                      ` : ''}
                      ${project.liveUrl ? `
                        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 text-stone-600 hover:text-stone-900">
                          ${ICONS.ExternalLink} Demo
                        </a>
                      ` : ''}
                    </div>
                  </div>
                `).join('')}
              </div>
            </section>
          ` : ''}

          <!-- Experience -->
          ${experience && experience.length > 0 ? `
            <section class="bg-white border border-stone-850 rounded-2xl p-6 shadow-[3px_3px_0px_0px_rgba(34,34,34,1)]">
              <h2 class="text-xl font-bold text-stone-900 font-display mb-6 flex items-center gap-2">
                <span>💼</span> Experience
              </h2>
              <div class="relative border-l-2 border-stone-200 pl-4 ml-2 space-y-6">
                ${experience.map(exp => `
                  <div class="relative">
                    <div class="absolute -left-[25px] top-1.5 w-3.5 h-3.5 bg-yellow-300 border-2 border-stone-850 rounded-full"></div>
                    
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-1">
                      <div>
                        <h3 class="font-bold text-stone-900">${exp.companyName}</h3>
                        <p class="text-stone-500 text-xs font-semibold">${exp.position}</p>
                      </div>
                      <span class="text-[10px] font-bold text-stone-700 bg-stone-100 border border-stone-300 px-2 py-0.5 rounded-full">
                        ${exp.duration}
                      </span>
                    </div>
                    <p class="text-stone-600 text-xs leading-relaxed whitespace-pre-wrap">
                      ${exp.description}
                    </p>
                  </div>
                `).join('')}
              </div>
            </section>
          ` : ''}

          <!-- Education -->
          ${education && (education.college || education.degree) ? `
            <section class="bg-green-50 border border-stone-850 rounded-2xl p-5 shadow-[3px_3px_0px_0px_rgba(34,34,34,1)]">
              <h2 class="text-lg font-bold text-stone-900 font-display mb-3 flex items-center gap-2">
                <span>🎓</span> Education
              </h2>
              <div class="flex justify-between items-start gap-2">
                <div>
                  <h3 class="font-bold text-stone-900">${education.college || 'College'}</h3>
                  <p class="text-stone-600 text-sm mt-0.5">${education.degree || 'Degree'}</p>
                </div>
                ${education.year ? `
                  <span class="text-[10px] font-bold text-stone-700 bg-white border border-stone-300 px-2 py-0.5 rounded-full">
                    ${education.year}
                  </span>
                ` : ''}
              </div>
            </section>
          ` : ''}

        </div>
      </div>
    </div>
  `;
}

// Generates Professional template HTML content
function renderProfessionalHTML(data) {
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

  return `
    <div class="max-w-5xl mx-auto px-8 py-12 text-stone-850">
      
      <!-- Top Section -->
      <header class="border-b-2 border-stone-800 pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 class="text-3xl font-bold tracking-tight text-stone-900 font-display">
            ${fullName}
          </h1>
          <p class="text-lg font-medium text-stone-500 font-mono mt-1">${jobTitle}</p>
        </div>
        
        <div class="flex flex-col text-sm text-stone-600 md:text-right gap-1 font-mono">
          ${location ? `
            <span class="flex items-center md:justify-end gap-1.5">
              ${ICONS.MapPin}
              ${location}
            </span>
          ` : ''}
          ${email ? `
            <a href="mailto:${email}" class="flex items-center md:justify-end gap-1.5 hover:text-stone-900 hover:underline">
              ${ICONS.Mail}
              ${email}
            </a>
          ` : ''}
        </div>
      </header>

      <!-- Main Two-Column Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <!-- Sidebar Left (1 of 4 columns) -->
        <div class="md:col-span-1 space-y-6 border-r-0 md:border-r border-stone-200 pr-0 md:pr-6">
          
          ${profileImage ? `
            <img
              src="${profileImage}"
              alt="${fullName}"
              class="w-full aspect-square rounded object-cover border border-stone-300 bg-stone-50 mb-4"
              onerror="this.style.display='none'"
            />
          ` : ''}

          <!-- Social Links -->
          ${Object.values(socials).some(Boolean) ? `
            <div>
              <h2 class="text-xs font-bold uppercase tracking-wider text-stone-400 border-b border-stone-200 pb-1.5 mb-3 font-display">
                Online
              </h2>
              <ul class="space-y-2 text-xs font-medium">
                ${socials.github ? `
                  <li>
                    <a href="${socials.github}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-stone-600 hover:text-stone-900 hover:underline">
                      ${ICONS.Github} GitHub
                    </a>
                  </li>
                ` : ''}
                ${socials.linkedin ? `
                  <li>
                    <a href="${socials.linkedin}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-stone-600 hover:text-stone-900 hover:underline">
                      ${ICONS.Linkedin} LinkedIn
                    </a>
                  </li>
                ` : ''}
                ${socials.website ? `
                  <li>
                    <a href="${socials.website}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-stone-600 hover:text-stone-900 hover:underline">
                      ${ICONS.Globe} Website
                    </a>
                  </li>
                ` : ''}
              </ul>
            </div>
          ` : ''}

          <!-- Skills -->
          ${skills && skills.length > 0 ? `
            <div>
              <h2 class="text-xs font-bold uppercase tracking-wider text-stone-400 border-b border-stone-200 pb-1.5 mb-3 font-display">
                Expertise
              </h2>
              <div class="flex flex-wrap gap-1.5">
                ${skills.map(skill => `
                  <span class="px-2 py-0.5 text-[10px] font-mono border border-stone-300 rounded bg-stone-50 text-stone-700">
                    ${skill}
                  </span>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- Education -->
          ${education && (education.college || education.degree) ? `
            <div>
              <h2 class="text-xs font-bold uppercase tracking-wider text-stone-400 border-b border-stone-200 pb-1.5 mb-3 font-display">
                Education
              </h2>
              <div class="text-xs">
                <p class="font-bold text-stone-850">${education.college || ''}</p>
                <p class="text-stone-500 font-mono italic mt-0.5">${education.degree || ''}</p>
                ${education.year ? `<p class="text-stone-400 font-mono text-[10px] mt-1">${education.year}</p>` : ''}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Core Main Panel Right (3 of 4 columns) -->
        <div class="md:col-span-3 space-y-8">
          
          <!-- Summary / Bio -->
          ${bio ? `
            <section>
              <h2 class="text-sm font-bold uppercase tracking-wider text-stone-400 border-b border-stone-200 pb-1.5 mb-3 font-display">
                Professional Summary
              </h2>
              <p class="text-stone-600 text-sm leading-relaxed whitespace-pre-wrap">
                ${bio}
              </p>
            </section>
          ` : ''}

          <!-- Experience -->
          ${experience && experience.length > 0 ? `
            <section>
              <h2 class="text-sm font-bold uppercase tracking-wider text-stone-400 border-b border-stone-200 pb-1.5 mb-4 font-display">
                Employment History
              </h2>
              <div class="space-y-6">
                ${experience.map(exp => `
                  <div>
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1.5">
                      <div>
                        <span class="font-bold text-stone-900">${exp.companyName}</span>
                        <span class="text-stone-400 mx-2 text-xs">|</span>
                        <span class="text-stone-600 text-sm font-semibold italic">${exp.position}</span>
                      </div>
                      <span class="text-xs font-mono text-stone-500 bg-stone-50 border border-stone-200 px-2 py-0.5 rounded">
                        ${exp.duration}
                      </span>
                    </div>
                    <p class="text-stone-600 text-sm leading-relaxed whitespace-pre-wrap pl-0 md:pl-2 border-l border-stone-100">
                      ${exp.description}
                    </p>
                  </div>
                `).join('')}
              </div>
            </section>
          ` : ''}

          <!-- Projects -->
          ${projects && projects.length > 0 ? `
            <section>
              <h2 class="text-sm font-bold uppercase tracking-wider text-stone-400 border-b border-stone-200 pb-1.5 mb-4 font-display">
                Select Projects
              </h2>
              <div class="space-y-4">
                ${projects.map(project => `
                  <div class="p-4 border border-stone-200 rounded bg-white">
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-1.5">
                      <div>
                        <h3 class="font-bold text-stone-900 text-base flex items-center gap-1.5">
                          ${project.name}
                          ${project.techStack ? `<span class="text-[10px] text-stone-400 font-mono font-normal">(${project.techStack})</span>` : ''}
                        </h3>
                      </div>
                      
                      <div class="flex gap-3 text-xs font-mono">
                        ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="text-stone-500 hover:text-stone-950 flex items-center gap-0.5 underline">Source ${ICONS.ExternalLink}</a>` : ''}
                        ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="text-stone-500 hover:text-stone-950 flex items-center gap-0.5 underline">Demo ${ICONS.ExternalLink}</a>` : ''}
                      </div>
                    </div>
                    <p class="text-stone-655 text-xs leading-relaxed">
                      ${project.description}
                    </p>
                  </div>
                `).join('')}
              </div>
            </section>
          ` : ''}

        </div>
      </div>
    </div>
  `;
}

// Download dynamic file handler
export function downloadHTML(data, templateName) {
  let content = '';
  let bodyClass = 'bg-[#FAF7F2]';

  if (templateName === 'minimal') {
    content = renderMinimalHTML(data);
    bodyClass = 'bg-[#FAF7F2]';
  } else if (templateName === 'creative') {
    content = renderCreativeHTML(data);
    bodyClass = 'bg-[#FAF7F2]';
  } else if (templateName === 'professional') {
    content = renderProfessionalHTML(data);
    bodyClass = 'bg-stone-50';
  }

  const htmlDocument = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${data.fullName || 'Portfolio'} — ${data.jobTitle || 'Developer'}</title>
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
              display: ['Outfit', 'sans-serif'],
            }
          }
        }
      }
    </script>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
    <style>
      body {
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
      }
      .font-display {
        font-family: 'Outfit', sans-serif;
      }
    </style>
  </head>
  <body class="${bodyClass} text-stone-850 antialiased min-h-screen selection:bg-sky-200">
    <div class="py-8">
      ${content}
    </div>
  </body>
</html>`;

  const blob = new Blob([htmlDocument], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  
  // Format file name
  const cleanName = (data.fullName || 'portfolio').toLowerCase().replace(/[^a-z0-9]/g, '-');
  link.download = `${cleanName}-portfolio.html`;
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Exports data as JSON
export function downloadJSON(data) {
  const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(data, null, 2)
  )}`;
  const link = document.createElement('a');
  link.href = jsonString;
  
  const cleanName = (data.fullName || 'portfolio').toLowerCase().replace(/[^a-z0-9]/g, '-');
  link.download = `${cleanName}-printfolio-data.json`;
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
