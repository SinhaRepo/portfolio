
import { User, Target, Award, Lightbulb, Code2, Palette, Users, Trophy } from "lucide-react";

const AboutPage = () => {
  return (
    <section className="py-20 bg-slate-800/50 min-h-screen font-sans relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6 bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-full px-8 py-4 border border-slate-600/50 shadow-2xl">
            <User className="h-8 w-8 text-blue-400 animate-pulse" />
            <h2 className="text-5xl lg:text-6xl font-bold text-white">
              About <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <Lightbulb className="h-8 w-8 text-yellow-400 animate-pulse delay-300" />
          </div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            I'm a Computer Engineering student who enjoys building things, working on real problems and improving every day through practice and learning.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Journey Section */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 shadow-2xl hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500 hover:border-blue-500/40">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  My Journey
                </h3>
              </div>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                {[
                  {
                    icon: <Code2 className="h-6 w-6 text-blue-400" />,
                    text: "Computer Engineering student at Government Engineering College, Dahod. learning and building in the tech world."
                  },
                  {
                    icon: <Award className="h-6 w-6 text-purple-400" />,
                    text: "I’ve learned to approach problems thoughtfully and stay consistent with effort."
                  },
                  {
                    icon: <Users className="h-6 w-6 text-green-400" />,
                    text: "My time in NCC taught me responsibility, time management and collaboration."
                  },
                  {
                    icon: <Trophy className="h-6 w-6 text-yellow-400" />,
                    text: "Group projects and presentations at college helped me communicate better and work well with others."
                  },
                  {
                    icon: <Code2 className="h-6 w-6 text-cyan-400" />,
                    text: "I focus on the MERN stack and have completed certifications in security and cloud fundamentals."
                  },
                  {
                    icon: <Palette className="h-6 w-6 text-pink-400" />,
                    text: "Outside tech, I enjoy creative activities like poster-making and writing, which give me a fresh perspective."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 transform border border-slate-600/30 hover:border-slate-500/50">
                    <div className="mt-1 p-2 bg-slate-600/50 rounded-lg">
                      {item.icon}
                    </div>
                    <span className="text-lg flex-1">{item.text}</span>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* Enhanced Core Strengths Section */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 shadow-2xl hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500 hover:border-purple-500/40">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Core Strengths
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    title: "Data Structures & Algorithms",
                    desc: "Strong grasp of DSA concepts — helps me write optimized and scalable code.",
                    icon: <Award className="h-6 w-6" />,
                    gradient: "from-indigo-400 to-blue-500",
                    shadowColor: "rgba(99, 102, 241, 0.3)"
                  },
                  {
                    title: "Hands-On Tech Skills",
                    desc: "Experience with the MERN stack and tools that support fast, responsive web apps.",
                    icon: <Code2 className="h-6 w-6" />,
                    gradient: "from-blue-400 to-cyan-500",
                    shadowColor: "rgba(59, 130, 246, 0.3)"
                  },
                  {
                    title: "Problem Solving",
                    desc: "I like finding clear, simple solutions to tricky challenges.",
                    icon: <Lightbulb className="h-6 w-6" />,
                    gradient: "from-yellow-400 to-orange-500",
                    shadowColor: "rgba(251, 191, 36, 0.3)"
                  },
                  {
                    title: "Working With People",
                    desc: "Comfortable in team environments and enjoy working toward shared goals.",
                    icon: <Users className="h-6 w-6" />,
                    gradient: "from-green-400 to-emerald-500",
                    shadowColor: "rgba(34, 197, 94, 0.3)"
                  },
                  {
                    title: "Always Improving",
                    desc: "Curious by nature and constantly exploring new tech and better ways to build.",
                    icon: <Target className="h-6 w-6" />,
                    gradient: "from-purple-400 to-pink-500",
                    shadowColor: "rgba(168, 85, 247, 0.3)"
                  },
                ].map((strength, index) => (

                  <div
                    key={index}
                    className="bg-gradient-to-br from-slate-700/80 to-slate-800/80 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-slate-600/50 hover:border-slate-500/70 group"
                    style={{ boxShadow: `0 0 0 rgba(0,0,0,0)` }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 25px ${strength.shadowColor}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 bg-gradient-to-r ${strength.gradient} rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {strength.icon}
                      </div>
                      <h4 className="text-white font-bold text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {strength.title}
                      </h4>
                    </div>
                    <p className="text-gray-400 text-base group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      {strength.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* New Achievement Highlights Section */}
        <div className="mt-20 animate-fade-in">
          <div className="bg-gradient-to-r from-slate-800/60 via-purple-800/20 to-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Key Highlights
              </h3>
              <p className="text-gray-400 text-lg">Some achievements that define my journey</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: "6", label: "Years of NCC", color: "text-blue-400" },
                { number: "5+", label: "Projects Completed", color: "text-purple-400" },
                { number: "100%", label: "Passion & Dedication", color: "text-pink-400" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-5xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
