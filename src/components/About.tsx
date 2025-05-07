import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'SQL', level: 85 },
  { name: 'AWS', level: 70 },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Who am I?
              </h3>
              <p className="text-gray-300 mb-6">
                I'm a passionate Full Stack Developer with a strong foundation in web technologies
                and a keen eye for creating beautiful, user-friendly applications. With several
                years of experience in the industry, I've worked on various projects ranging
                from small business websites to large-scale enterprise applications.
              </p>
              <p className="text-gray-300">
                My approach combines technical expertise with creative problem-solving,
                always striving to deliver solutions that are both efficient and elegant.
                I'm constantly learning and adapting to new technologies to stay at the
                forefront of web development.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">
                My Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <motion.a
              href="#contact"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Work Together
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 