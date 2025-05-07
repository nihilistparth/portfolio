import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
    image: '/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce',
    live: 'https://ecommerce-demo.com',
    category: 'web',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
    image: '/projects/taskmanager.jpg',
    technologies: ['React', 'Firebase', 'Material-UI'],
    github: 'https://github.com/yourusername/taskmanager',
    live: 'https://taskmanager-demo.com',
    category: 'web',
  },
  {
    title: 'AI Image Generator',
    description: 'An AI-powered image generation tool that creates unique artwork based on text prompts using machine learning models.',
    image: '/projects/ai-generator.jpg',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    github: 'https://github.com/yourusername/ai-generator',
    live: 'https://ai-generator-demo.com',
    category: 'ai',
  },
  {
    title: 'Mobile Fitness App',
    description: 'A cross-platform mobile application for tracking workouts, nutrition, and fitness progress with social features.',
    image: '/projects/fitness.jpg',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/fitness-app',
    live: 'https://fitness-app-demo.com',
    category: 'mobile',
  },
];

const categories = ['all', 'web', 'mobile', 'ai'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'all' || project.category === selectedCategory
  );

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            My Projects
          </h2>

          <div className="flex justify-center space-x-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full capitalize ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={24} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 