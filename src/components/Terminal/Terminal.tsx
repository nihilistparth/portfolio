import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaTools, FaProjectDiagram } from 'react-icons/fa';

interface TerminalProps {
  activeTab: string;
}

export function Terminal({ activeTab }: TerminalProps) {
  const [history, setHistory] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const sections = {
    about: {
      title: 'SYSTEM://ABOUT',
      content: [
        'A passionate developer with expertise in full-stack development,',
        '3D graphics, and interactive web applications.',
        'Focused on creating immersive digital experiences.',
      ],
      icon: <FaCode className="text-2xl" />
    },
    skills: {
      title: 'SYSTEM://SKILLS',
      content: [
        'Frontend: React, TypeScript, Three.js, WebGL',
        'Backend: Node.js, Python, SQL',
        'Tools: Git, Docker, AWS',
        'Design: UI/UX, 3D Modeling',
      ],
      icon: <FaTools className="text-2xl" />
    },
    projects: {
      title: 'SYSTEM://PROJECTS',
      content: [
        '1. Interactive 3D Portfolio',
        '2. Real-time Data Visualization',
        '3. AI-Powered Web Application',
        '4. Mobile Game Development',
      ],
      icon: <FaProjectDiagram className="text-2xl" />
    },
    contact: {
      title: 'SYSTEM://CONTACT',
      content: [
        'Email: your.email@example.com',
        'GitHub: github.com/yourusername',
        'LinkedIn: linkedin.com/in/yourusername',
      ],
      icon: <FaEnvelope className="text-2xl" />
    },
  };

  const displaySection = (section: keyof typeof sections) => {
    const { title, content } = sections[section];
    setHistory([`> ${title}`, ...content]);
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (activeTab !== 'home') {
      displaySection(activeTab as keyof typeof sections);
    }
  }, [activeTab]);

  return (
    <div className="h-[400px] flex flex-col">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-sm text-[#00ff00]/60">terminal@portfolio:~</span>
      </div>

      {/* Quick Access Buttons */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {Object.entries(sections).map(([key, { title, icon }]) => (
          <motion.button
            key={key}
            onClick={() => displaySection(key as keyof typeof sections)}
            className="flex items-center gap-2 p-3 bg-[#111] rounded-lg border border-[#00ff00]/20 hover:border-[#00ff00]/40 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {icon}
            <span>{title.replace('SYSTEM://', '')}</span>
          </motion.button>
        ))}
      </div>

      {/* Terminal Output */}
      <div
        ref={terminalRef}
        className="flex-1 overflow-y-auto font-mono text-sm mb-2 p-4 bg-black/50 rounded"
      >
        {history.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className="mb-1"
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-4 mt-4">
        <motion.a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-[#00ff00]/60 hover:text-[#00ff00] transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-[#00ff00]/60 hover:text-[#00ff00] transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="mailto:your.email@example.com"
          className="text-2xl text-[#00ff00]/60 hover:text-[#00ff00] transition-colors"
          whileHover={{ scale: 1.1 }}
        >
          <FaEnvelope />
        </motion.a>
      </div>
    </div>
  );
} 