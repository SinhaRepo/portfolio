const ProjectsPage = () => {
  return (
    <section className="py-20 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of work I've built to learn and apply my skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "CryptoGlance",
              description: "Tracks live cryptocurrency prices using the CoinGecko API. Includes search, filters, small charts and a responsive layout.",
              tech: ["React", "Tailwind CSS", "Chart.js", "CoinGecko API", "Axios"],
              status: "Completed",
              link: "https://cryptoglance.cyrus.com"
            },
            {
              title: "CinemaVault",
              description: "Lets users explore movies using the TMDB API. Includes search, filtering and detailed movie info.",
              tech: ["React", "Tailwind CSS", "TMDB API", "React Router", "Axios"],
              status: "Completed",
              link: "https://cinemavault.cyrus.com"
            },
            {
              title: "SmartCV",
              description: "Resume builder with live editing, templates and PDF export. Uses GPT to provide content suggestions.",
              tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Radix Ui"],
              status: "Completed",
              link: "https://smartcv.cyrus.com"
            },
            {
              title: "Flashcard Quiz",
              description: "Flashcard-based quiz app for learning web development topics. Includes font control and chart tracking.",
              tech: ["React", "API Integration", "Tailwind CSS", "CSS3", "Chart.js"],
              status: "Completed",
              link: "https://flashcards.cyrus.com"
            },
            {
              title: "Spotify",
              description: "Frontend for music streaming using Spotify Web API. Includes playlist browsing and playback previews.",
              tech: ["React", "Spotify Web API", "Tailwind CSS", "OAuth", "React Router", "Axios"],
              status: "Pending",
              link: "https://spotify.cyrus.com"
            }
          ].map((project, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-slate-700 animate-fade-in"
            >
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Completed'
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                  : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                  }`}>
                  {project.status}
                </span>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
                >
                  View Details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
