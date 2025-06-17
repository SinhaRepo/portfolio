
const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Driven by creativity, ambition, and a passion for solving complex problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                As a Computer Engineering student at Government Engineering College, Dahod, 
                I've embarked on an exciting journey in the world of technology. My path has been 
                shaped by creativity, discipline, and an unwavering ambition to excel.
              </p>
              <p>
                Through six years of NCC involvement, I've developed strong discipline and teamwork 
                skills that complement my technical abilities. My college experiences have honed my 
                communication skills through presentations and collaborative group projects.
              </p>
              <p>
                I'm passionate about the MERN stack and have completed certifications in security 
                and cloud technologies. My creative side shines through co-curricular activities 
                like poster-making and writing competitions, bringing a unique perspective to my development work.
              </p>
            </div>
          </div>

          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-6">Core Strengths</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Creative Problem Solving", desc: "Innovative approaches to complex challenges" },
                { title: "Technical Excellence", desc: "Proficient in MERN stack and modern technologies" },
                { title: "Team Leadership", desc: "Strong communication and collaboration skills" },
                { title: "Continuous Learning", desc: "Always exploring new technologies and best practices" },
              ].map((strength, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-slate-600"
                >
                  <h4 className="text-white font-semibold mb-2">{strength.title}</h4>
                  <p className="text-gray-400 text-sm">{strength.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
