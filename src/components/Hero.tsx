import { ArrowDown, Download, Eye, Code, Github, Linkedin, Sparkles, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { SiHackerrank } from "react-icons/si";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-bounce delay-300">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg rotate-45 opacity-20"></div>
      </div>
      <div className="absolute bottom-32 left-20 animate-bounce delay-700">
        <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Ansh Sinha
              </span>
            </h1>

            <h2 className="text-2xl lg:text-3xl text-gray-300 mb-6 font-light">
              <span className="text-blue-400 font-semibold">MERN Stack</span> Developer
            </h2>

            <p className="text-lg text-gray-400 mb-8 max-w-2xl leading-relaxed">
              I'm a Computer Engineering student who enjoys building web applications and solving real-world problems.
              I'm focused on learning, growing my skills and creating meaningful digital experiences.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 mb-8 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] hover:border-blue-500/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">5+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center border-x border-slate-700">
                <div className="text-2xl font-bold text-purple-400">2+</div>
                <div className="text-sm text-gray-400">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">100%</div>
                <div className="text-sm text-gray-400">Dedication</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://docs.google.com/document/d/your-doc-id/export?format=pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 group"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Resume
                </Button>
              </a>

            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {/* GitHub */}
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 cursor-pointer border border-slate-700 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)] hover:border-blue-400/50"
              >
                <Github className="h-5 w-5 text-gray-400 hover:text-white" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 cursor-pointer border border-slate-700 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)] hover:border-blue-400/50"
              >
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-400" />
              </a>

              {/* HackerRank */}
              {/* HackerRank */}
              <a
                href="https://www.hackerrank.com/your_username"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 rounded-full hover:bg-slate-700/50 transition-all duration-300 hover:scale-110 cursor-pointer border border-slate-700 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:border-green-400/50"
              >
                <SiHackerrank className="h-5 w-5 text-gray-400 hover:text-green-400" />
              </a>


            </div>

          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Rotating Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-500/30 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-purple-500/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>

              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>

              {/* Profile Image */}
              <img
                src="/images/profile.jpg"
                alt="Ansh Sinha"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-gradient-to-r from-blue-400 to-purple-400 shadow-2xl hover:scale-105 transition-transform duration-300 z-10"
              />

              {/* Floating Skill Tags */}
              <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce hover:shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-all duration-310">
                React
              </div>
              <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce delay-300 hover:shadow-[0_0_10px_rgba(168,85,247,0.6)] transition-all duration-310">
                Node.js
              </div>
              <div className="absolute top-1 -left-8 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce delay-500 hover:shadow-[0_0_10px_rgba(236,72,153,0.6)] transition-all duration-310">
                MongoDB
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section with Call-to-Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/50 shadow-2xl transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:border-blue-500/40">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="h-6 w-6 text-yellow-400 animate-pulse" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ready to Create Something Amazing?
              </h3>
              <Zap className="h-6 w-6 text-yellow-400 animate-pulse delay-300" />
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.fiverr.com/your_username" // replace with your Fiverr URL
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/25"
                >
                  Let's Connect
                </Button>
              </a>

              <div className="text-gray-400 text-sm">
                Available for freelance projects & collaborations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
