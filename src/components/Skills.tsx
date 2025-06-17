
const Skills = () => {
  const skills = {
    "Frontend": ["React", "JavaScript", "HTML5", "CSS3", "Redux", "Tailwind CSS"],
    "Backend": ["Node.js", "Express", "Python", "RESTful APIs", "GraphQL"],
    "Database": ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    "Cloud & DevOps": ["Google Cloud", "AWS", "Docker", "Git", "Linux"],
    "Data Science": ["Pandas", "NumPy", "Matplotlib", "Data Analysis"],
    "Security": ["Chronicle SIEM", "Cybersecurity Practices", "JWT Authentication"]
  };

  const certifications = [
    "Security Practices with Chronicle SIEM",
    "Introduction to Responsible AI",
    "Google Cloud: Security and Operations",
    "Innovating with Data on Google Cloud",
    "Analyzing BigQuery Data in Connected Sheets"
  ];

  const awards = [
    "National Science Day Video Competition (Winner)",
    "Azadi ka Amrit Mahotsav Drawing Competition (2021)",
    "Ecosystem Restoration e-quiz participant",
    "'Water Conservation: Making the Invisible Visible' Poster Contest"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technical proficiency across the full development stack
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-slate-600 animate-fade-in"
              >
                <h4 className="text-xl font-semibold text-white mb-4 border-b border-blue-500/30 pb-2">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-500/30 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-4 rounded-lg border border-green-500/30 hover:border-green-500/50 transition-colors duration-300"
                >
                  <p className="text-gray-300">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-6">Honors & Awards</h3>
            <div className="space-y-3">
              {awards.map((award, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-lg border border-purple-500/30 hover:border-purple-500/50 transition-colors duration-300"
                >
                  <p className="text-gray-300">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
