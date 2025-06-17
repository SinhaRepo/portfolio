
import { useState } from "react";
import Hero from "../components/Hero";
import AboutPage from "../components/pages/AboutPage";
import ProjectsPage from "../components/pages/ProjectsPage";
import SkillsPage from "../components/pages/SkillsPage";
import EducationPage from "../components/pages/EducationPage";
import ExperiencePage from "../components/pages/ExperiencePage";
import ContactPage from "../components/pages/ContactPage";
import Navigation from "../components/Navigation";
import CursorSpotlight from "../components/CursorSpotlight";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <Hero />;
      case "about":
        return <AboutPage />;
      case "projects":
        return <ProjectsPage />;
      case "skills":
        return <SkillsPage />;
      case "education":
        return <EducationPage />;
      case "experience":
        return <ExperiencePage />;
      case "contact":
        return <ContactPage />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Cursor Spotlight Effect */}
      <CursorSpotlight />
      
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/10 to-transparent"></div>
      </div>
      
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <div className="relative z-10">
        {renderCurrentPage()}
      </div>
    </div>
  );
};

export default Index;
