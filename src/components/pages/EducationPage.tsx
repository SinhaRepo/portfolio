import { BookOpen, Calendar } from "lucide-react";

const EducationPage = () => {
  const education = [
    {
      degree: "Bachelor of Engineering [BE]",
      field: "Computer Engineering",
      institution: "Government Engineering College, Dahod",
      duration: "2023 - 2026",
      grade: "Current CGPA: 8.5 / 10",
      description:
        "Studying key topics in computer engineering such as data structures, algorithms, software development, computer networks, operating systems and cloud basics. Working on coding projects, technical presentations and group collaborations.",
      achievements: [
        "Maintained steady academic performance",
        "Participated in coding competitions and technical events",
        "Worked on collaborative projects and presentations"
      ]
    },
    {
      degree: "Diploma in Engineering",
      field: "Electrical Engineering",
      institution: "Dr S & SS Ghandhy College of Engineering and Technology, Surat",
      duration: "2020 - 2023",
      grade: "Final CGPA: 8.59 / 10",
      description:
        "Completed diploma-level coursework in electrical circuits, machines, control systems and power systems. Gained hands-on experience through lab sessions and projects involving Physics and Mathematics.",
      achievements: [
        "Scored well in Mathematics across semesters",
        "Took part in science and innovation events",
        "Maintained good academic standing"
      ]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Siddhakutir Sanchalit Sadhana Vidhyabhawan English Medium School, Surat",
      field: "Gujarat Secondary and Higher Secondary Education Board (GSEB)",
      duration: "2019 - 2020",
      grade: "Percentage: 76%",
      description:
        "Completed SSC with focus on Mathematics, Science, English and Social Studies. Built a strong academic base for higher studies.",
      achievements: [
        "Scored distinction in Mathematics and Science",
        "Participated in school-level academic activities",
        "Maintained overall good performance"
      ]
    }
  ];

  return (
    <section className="py-20 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Academic journey and learning milestones
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start animate-fade-in">
                <div className="absolute left-6 w-4 h-4 bg-blue-400 rounded-full border-2 border-slate-900 z-10"></div>

                <div className="ml-16 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-lg border border-slate-700 hover:shadow-2xl transition-all duration-300 w-full">
                  <div className="flex items-center gap-3 mb-3">
                    <BookOpen className="text-blue-400" size={20} />
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  </div>

                  <h4 className="text-blue-300 font-bold mb-1 text-lg">{edu.field}</h4>

                  {edu.grade && (
                    <h5 className="text-blue-200 font-medium mb-2 text-sm">{edu.grade}</h5>
                  )}

                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="text-gray-400" size={16} />
                    <span className="text-gray-400 text-sm">{edu.duration}</span>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>

                  <div>
                    <h5 className="text-white font-bold mb-2">Highlights:</h5>
                    <ul className="space-y-2 pl-1">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-baseline gap-2">
                          <span className="text-blue-400 text-lg leading-snug">•</span>
                          <span className="text-gray-300 text-sm leading-snug">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                  <div className="mt-4 text-right">
                    <span className="text-purple-400 font-bold">{edu.institution}</span>
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

export default EducationPage;
