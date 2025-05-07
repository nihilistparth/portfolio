import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Company Inc.',
    period: '2021 - Present',
    description: [
      'Led development of enterprise-level applications using React and Node.js',
      'Implemented CI/CD pipelines reducing deployment time by 40%',
      'Mentored junior developers and conducted code reviews',
      'Optimized application performance resulting in 30% faster load times',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    period: '2019 - 2021',
    description: [
      'Developed and maintained multiple web applications',
      'Collaborated with UX designers to implement responsive designs',
      'Integrated third-party APIs and services',
      'Participated in agile development processes',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Innovations',
    period: '2018 - 2019',
    description: [
      'Built frontend components using React and TypeScript',
      'Assisted in database design and optimization',
      'Implemented automated testing procedures',
      'Contributed to codebase documentation',
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Work Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-900 rounded-lg p-6 shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.a
              href="#projects"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 