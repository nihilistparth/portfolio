import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Background3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      containerRef.current.style.setProperty('--mouse-x', `${x}`);
      containerRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        '--mouse-x': '0.5',
        '--mouse-y': '0.5',
      } as React.CSSProperties}
    >
      {/* Animated grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-blue-500/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: i * 0.01,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating orbs */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Interactive 3D effect */}
      <div 
        className="absolute inset-0 transition-transform duration-200"
        style={{
          transform: `
            perspective(1000px)
            rotateX(calc((var(--mouse-y) - 0.5) * 10deg))
            rotateY(calc((var(--mouse-x) - 0.5) * 10deg))
          `,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-3xl" />
      </div>
    </div>
  );
};

export default Background3D; 