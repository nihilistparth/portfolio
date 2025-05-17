import { useRef } from 'react';
import { Scene3D } from './components/3D/Scene3D';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

function App() {
  const sections = {
    home: {
      title: "Hi, I'm Parth Tusham",
      subtitle: "Computer Science Graduate Student",
      description: "Passionate about Software Development, Security, and Distributed Systems"
    },
    about: {
      title: "About Me",
      description: "I am a Computer Science graduate student at Texas A&M University, with a strong background in software development, security, and distributed systems. My experience spans across teaching, research, and industry internships, where I've worked on challenging problems in computer security, machine learning, and system optimization."
    },
    education: {
      title: "Education",
      items: [
        {
          school: "Texas A&M University",
          degree: "Master of Computer Science",
          location: "College Station, TX",
          year: "2026"
        },
        {
          school: "Indian Institute of Technology",
          degree: "B.Tech + M.Tech Dual Degree, Computer Science and Engineering",
          location: "Kharagpur, India",
          year: "2024"
        }
      ]
    },
    experience: {
      title: "Experience",
      items: [
        {
          role: "Teaching Assistant",
          company: "Texas A&M University",
          period: "Aug'23 - Sep'24",
          details: "Led Computer and Network Security course with focus on practical implementations and threat analysis. Mentored students in Advanced Algorithms and Computer Architecture, emphasizing system-level understanding and problem-solving skills."
        },
        {
          role: "Software Developer Intern",
          company: "Cohesity",
          period: "May'23 - Jun'23",
          details: "Architected and implemented a cloud-native monitoring solution for customer clusters, improving system reliability. Designed an intelligent metadata processing pipeline that reduced manual configuration time by 44%. Implemented comprehensive monitoring using Prometheus and Grafana for real-time system insights."
        },
        {
          role: "Innovation Intern",
          company: "OnePlus",
          period: "May'22 - Jun'22",
          details: "Led research on adversarial machine learning, implementing advanced attack methodologies. Enhanced model robustness through innovative data augmentation techniques. Developed explainable AI solutions using LIME and OMNIXAI for model interpretability."
        }
      ]
    },
    projects: {
      title: "Projects",
      items: [
        {
          title: "Malware Analysis Chat",
          description: "An AI-powered chat interface for malware analysis and reverse engineering assistance",
          tech: ["Python", "LLMs", "Security"],
          github: "https://github.com/nihilistparth/MalwareAnalysisChat"
        },
        {
          title: "Supermarket Automation",
          description: "Automated inventory management and billing system with real-time stock tracking",
          tech: ["Python", "SQL", "GUI"],
          github: "https://github.com/nihilistparth/Supermarket-automation-"
        },
        {
          title: "EventNXT",
          description: "RESTful referral-reward system for event management with real-time seat tracking",
          tech: ["Ruby on Rails", "Docker", "AWS"],
          github: "https://github.com/nihilistparth/EventNXT-Fall2024"
        },
        {
          title: "Network and Socket Programming",
          description: "Implementation of various network protocols and socket programming concepts in C",
          tech: ["C", "Networking", "Systems Programming"],
          github: "https://github.com/nihilistparth/Network-and-Socket-Programming"
        },
        {
          title: "Systems Programming",
          description: "Collection of systems programming projects including process management and IPC",
          tech: ["C", "Operating Systems", "Linux"],
          github: "https://github.com/nihilistparth/Systems-Programming"
        },
        {
          title: "KGP RISC",
          description: "Custom RISC processor implementation with pipelining and hazard detection",
          tech: ["C", "Computer Architecture", "Verilog"],
          github: "https://github.com/nihilistparth/KGP_RISC"
        }
      ]
    },
    skills: {
      title: "Skills",
      items: [
        { category: "Languages", skills: ["C", "C++", "Java", "Python", "Rust", "Ruby", "Bash", "Verilog", "MIPS32", "Javascript"] },
        { category: "Technologies", skills: ["Linux", "Github", "Docker", "Postgres", "Tensorflow", "MySQL", "Django", "Rails", "AWS", "Agile"] },
        { category: "Competitive Programming", skills: ["CodeForces (1634)", "Codechef (2015)"] }
      ]
    },
    research: {
      title: "Research Publications",
      items: [
        {
          title: "Multilingual Hierarchical Entity Classification and Narrative Reasoning using Instruct-Tuned LLMs",
          authors: "Tusham, P., et al.",
          journal: "19th International Workshop on Semantic Evaluation (SemEval-2025), co-located with ACL 2025",
          year: "2025",
          status: "Accepted",
          abstract: "This paper presents our work on multilingual hierarchical entity classification and narrative reasoning using instruction-tuned large language models, accepted for presentation at SemEval-2025."
        }
      ]
    },
    contact: {
      title: "Contact Me",
      description: "Let's connect and discuss potential opportunities",
      email: "parthtusham@tamu.edu",
      phone: "+1 (737) 334-9956",
      location: "College Station, TX"
    }
  };

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const researchRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-slate-900/50 backdrop-blur-lg border-b border-slate-700/20 p-4 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent"
          >
            Parth Tusham
          </motion.h1>
          <nav className="flex gap-6">
            {Object.keys(sections).map((section) => (
              <motion.button
                key={section}
                onClick={() => scrollToSection(eval(`${section}Ref`))}
                className="px-4 py-2 rounded-lg transition-all text-slate-400 hover:text-slate-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </motion.button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24">
        {/* Hero Section */}
        <motion.section 
          ref={homeRef} 
          className="min-h-[85vh] flex items-center"
          style={{ scale, opacity }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent">
                  {sections.home.title}
                </h1>
                <h2 className="text-3xl mb-4 text-slate-300">{sections.home.subtitle}</h2>
                <p className="text-xl text-slate-400 mb-8">{sections.home.description}</p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://github.com/nihilistparth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-slate-400 hover:text-slate-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/parth-tusham-40272b1a1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl text-slate-400 hover:text-slate-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href="mailto:parthtusham@tamu.edu"
                    className="text-2xl text-slate-400 hover:text-slate-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaEnvelope />
                  </motion.a>
                </div>
              </div>
              <div className="h-[400px]">
                <Scene3D />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          ref={aboutRef} 
          className="min-h-[70vh] flex items-center py-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent text-center">
                {sections.about.title}
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                {sections.about.description}
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          ref={educationRef} 
          className="min-h-[70vh] flex items-center py-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent text-center">
                {sections.education.title}
              </h2>
              <div className="space-y-8">
                {sections.education.items.map((edu) => (
                  <motion.div
                    key={edu.school}
                    className="bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm border border-slate-700/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-2xl font-semibold mb-2 text-slate-200">
                      {edu.school}
                    </h3>
                    <p className="text-slate-300 mb-2">{edu.degree}</p>
                    <p className="text-slate-400">{edu.location} | {edu.year}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          ref={experienceRef} 
          className="min-h-[70vh] flex items-center py-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent text-center">
                {sections.experience.title}
              </h2>
              <div className="space-y-8">
                {sections.experience.items.map((exp) => (
                  <motion.div
                    key={exp.role}
                    className="bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm border border-slate-700/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-2xl font-semibold mb-2 text-slate-200">
                      {exp.role}
                    </h3>
                    <p className="text-slate-300 mb-4">{exp.company} | {exp.period}</p>
                    <p className="text-slate-400 leading-relaxed">{exp.details}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          ref={projectsRef} 
          className="min-h-[70vh] flex items-center py-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent text-center">
                {sections.projects.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sections.projects.items.map((project) => (
                  <motion.div
                    key={project.title}
                    className="bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm border border-slate-700/20 h-full flex flex-col"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-2xl font-semibold mb-3 text-slate-200">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-700/30 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-slate-300 hover:text-slate-200 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaGithub className="text-lg" />
                      <span>View on GitHub</span>
                    </motion.a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          ref={skillsRef} 
          className="min-h-[70vh] flex items-center py-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent text-center">
                {sections.skills.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sections.skills.items.map((category) => (
                  <motion.div
                    key={category.category}
                    className="bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm border border-slate-700/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-2xl font-semibold mb-4 text-slate-200">
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-slate-700/30 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Research Section */}
        <motion.section 
          ref={researchRef} 
          className="min-h-[70vh] flex items-center py-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent text-center">
                {sections.research.title}
              </h2>
              <div className="space-y-8">
                {sections.research.items.map((paper) => (
                  <motion.div
                    key={paper.title}
                    className="bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm border border-slate-700/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-2xl font-semibold mb-2 text-slate-200">
                      {paper.title}
                    </h3>
                    <p className="text-slate-300 mb-2">{paper.authors}</p>
                    <p className="text-slate-400 mb-2">{paper.journal} ({paper.year})</p>
                    <p className="text-slate-400 mb-4">Status: {paper.status}</p>
                    <p className="text-slate-300 leading-relaxed">{paper.abstract}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          ref={contactRef} 
          className="min-h-[70vh] flex items-center py-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent text-center">
                {sections.contact.title}
              </h2>
              <p className="text-xl text-slate-300 mb-12 text-center">{sections.contact.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  className="bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm border border-slate-700/20 flex items-center gap-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <FaEnvelope className="text-3xl text-slate-300" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a href={`mailto:${sections.contact.email}`} className="text-slate-300 hover:text-slate-200">
                      {sections.contact.email}
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  className="bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm border border-slate-700/20 flex items-center gap-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <FaPhone className="text-3xl text-slate-300" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <a href={`tel:${sections.contact.phone}`} className="text-slate-300 hover:text-slate-200">
                      {sections.contact.phone}
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  className="bg-slate-800/30 rounded-xl p-6 backdrop-blur-sm border border-slate-700/20 flex items-center gap-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <FaMapMarkerAlt className="text-3xl text-slate-300" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-slate-300">{sections.contact.location}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-lg border-t border-slate-700/20 p-4">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>© 2024 Parth Tusham. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 