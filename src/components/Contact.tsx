import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      text: 'parthtusham@tamu.edu',
      link: 'mailto:parthtusham@tamu.edu',
    },
    {
      icon: FaPhone,
      text: '+1 (737) 334-9956',
      link: 'tel:+17373349956',
    },
    {
      icon: FaLinkedin,
      text: 'LinkedIn Profile',
      link: 'https://linkedin.com/in/yourusername',
    },
    {
      icon: FaGithub,
      text: 'GitHub Profile',
      link: 'https://github.com/yourusername',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors"
                    whileHover={{ x: 10 }}
                  >
                    <info.icon className="text-blue-500" size={24} />
                    <span>{info.text}</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Texas A&M University
                    </h4>
                    <p className="text-gray-300">Master of Computer Science</p>
                    <p className="text-gray-400">College Station, TX | 2026</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Indian Institute of Technology
                    </h4>
                    <p className="text-gray-300">
                      (B.Tech + M.Tech) Dual Degree, Computer Science and Engineering
                    </p>
                    <p className="text-gray-400">Kharagpur, India | 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 