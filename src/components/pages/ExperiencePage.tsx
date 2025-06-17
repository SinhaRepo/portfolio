
import { Briefcase, Calendar } from "lucide-react";

const ExperiencePage = () => {
  const experiences = [
    {
      role: "NCC Cadet",
      organization: "National Cadet Corps",
      duration: "6 Years",
      type: "Leadership & Discipline",
      description: "Developed strong leadership, discipline, and teamwork skills through rigorous training and community service activities.",
      responsibilities: [
        "Led team activities and coordinated group projects",
        "Participated in community service initiatives",
        "Developed communication and presentation skills",
        "Maintained discipline and time management"
      ],
      skills: ["Leadership", "Teamwork", "Discipline", "Communication"]
    },
    {
      role: "Technical Project Lead",
      organization: "College Projects",
      duration: "2022 - Present",
      type: "Technical Leadership",
      description: "Leading various technical projects and collaborative development initiatives in college.",
      responsibilities: [
        "Managed full-stack development projects using MERN stack",
        "Coordinated team efforts and project timelines",
        "Presented technical solutions to academic panels",
        "Mentored junior students in programming concepts"
      ],
      skills: ["MERN Stack", "Project Management", "Technical Presentation", "Mentoring"]
    },
    {
      role: "Creative Contributor",
      organization: "College Activities",
      duration: "2021 - Present",
      type: "Creative & Communication",
      description: "Active participation in creative competitions and communication-focused activities.",
      responsibilities: [
        "Designed posters and visual content for college events",
        "Participated in writing competitions and technical documentation",
        "Contributed to college newsletter and technical publications",
        "Organized and participated in technical workshops"
      ],
      skills: ["Creative Design", "Technical Writing", "Event Organization", "Visual Communication"]
    }
  ];

  return (
    <section className="py-20 min-h-screen bg-slate-800/50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional and leadership experiences that shaped my career
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-blue-400"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start animate-fade-in">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-purple-400 rounded-full border-2 border-slate-900 z-10"></div>
                
                {/* Content */}
                <div className="ml-16 bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-xl shadow-lg border border-slate-600 hover:shadow-2xl transition-all duration-300 w-full">
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="text-purple-400" size={20} />
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  </div>
                  
                  <h4 className="text-purple-300 font-bold mb-2">{exp.organization}</h4>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="text-gray-400" size={16} />
                      <span className="text-gray-400 text-sm">{exp.duration}</span>
                    </div>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                      {exp.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="text-white font-bold mb-2">Key Responsibilities:</h5>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <span className="text-purple-400 mr-2 mt-1">•</span>
                          <span className="text-gray-300 text-sm">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-white font-bold mb-2">Skills Developed:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
