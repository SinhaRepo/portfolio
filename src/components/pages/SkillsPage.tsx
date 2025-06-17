import { Code, Database, Cloud, Award, Trophy, Star, Brain, Terminal, Settings2 } from "lucide-react";


const SkillsPage = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"],
      icon: Database,
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Problem Solving",
      items: ["Data Structures (Java)", "Algorithms", "Leetcode", "Codeforces"],
      icon: Brain,
      color: "from-red-500 to-pink-500"
    },
    {
      category: "CI/CD & Deployment",
      items: ["GitHub Actions", "Vercel", "Netlify", "Render"],
      icon: Settings2,
      color: "from-teal-500 to-blue-600",
    },
    {
      category: "Programming Languages",
      items: ["Java", "Python", "C"],
      icon: Terminal,
      color: "from-sky-500 to-indigo-500"
    },
    {
      category: "Tools & Technologies",
      items: ["Git", "Docker", "AWS", "Firebase", "Postman", "Jest"],
      icon: Cloud,
      color: "from-purple-500 to-violet-500"
    },
    {
      category: "Certifications",
      items: ["Cloud Security", "Web Development", "Database Management"],
      icon: Award,
      color: "from-orange-500 to-red-500"
    }
  ];



  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="h-8 w-8 text-yellow-400 animate-pulse" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Skills & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <Trophy className="h-8 w-8 text-yellow-400 animate-pulse delay-300" />
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Skills I've built through real-world projects and consistent practice
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-slate-700/50 hover:border-slate-600 transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${skillGroup.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <skillGroup.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{skillGroup.category}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-4 py-3 bg-slate-700/30 text-blue-300 rounded-lg text-sm border border-blue-500/20 hover:bg-blue-500/10 hover:border-blue-500/40 transition-all duration-200 transform hover:scale-105 cursor-pointer"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Highlight */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-500/30 shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="h-8 w-8 text-yellow-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Continuous Learning Journey
              </h3>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Continuously learning and experimenting with tools to improve how I build and solve problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
