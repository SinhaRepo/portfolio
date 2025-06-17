
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", page: "home" },
    { label: "About", page: "about" },
    { label: "Projects", page: "projects" },
    { label: "Skills", page: "skills" },
    { label: "Education", page: "education" },
    { label: "Experience", page: "experience" },
    { label: "Contact", page: "contact" },
  ];

  const handleNavClick = (page: string) => {
    onPageChange(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-slate-700/50" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            className="flex items-center gap-2 cursor-pointer group transition-all duration-300"
            onClick={() => handleNavClick("home")}
          >
            <Sparkles className="h-6 w-6 text-purple-400 group-hover:animate-pulse" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ansh Sinha
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page)}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 transform ${
                  currentPage === item.page 
                    ? "text-blue-400 font-semibold bg-blue-500/10 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.3)]" 
                    : "text-gray-300 hover:text-white hover:bg-slate-800/50 hover:shadow-[0_0_12px_rgba(147,197,253,0.25)]"
                }`}
              >
                {item.label}
                {currentPage === item.page && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-slate-800/50 hover:shadow-[0_0_10px_rgba(147,197,253,0.3)]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 p-4 animate-fade-in border border-slate-700/50 shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                  currentPage === item.page 
                    ? "text-blue-400 font-semibold bg-blue-500/10 border border-blue-500/30 shadow-[0_0_12px_rgba(59,130,246,0.25)]" 
                    : "text-gray-300 hover:text-white hover:bg-slate-700/50 hover:shadow-[0_0_10px_rgba(147,197,253,0.2)]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
