import React, { ReactNode, useEffect, useRef } from 'react';
import { motion, useAnimation, Variant, useInView } from 'framer-motion';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideIn' | 'scale' | 'staggered';
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animation = 'fadeIn',
  duration = 0.5,
  delay = 0,
  threshold = 0.1,
  className = '',
  once = true,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { 
    amount: threshold, 
    once 
  });

  // Animation variants
  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    slideIn: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    staggered: {
      hidden: { opacity: 0, y: 20 },
      visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.1,
          duration: 0.6
        }
      })
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  const selectedVariant = variants[animation];
  const transition = { duration, delay, ease: "easeOut" };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={selectedVariant}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Scroll-aware header animation
export const useScrollAwareAnimation = (threshold = 50) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [scrollDirection, setScrollDirection] = React.useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we've scrolled past threshold
      setScrolled(currentScrollY > threshold);
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, threshold]);

  return { scrolled, scrollDirection };
};

// Staggered children animation
export const StaggeredChildren: React.FC<{
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  inViewThreshold?: number;
}> = ({ 
  children, 
  staggerDelay = 0.1, 
  className = '',
  inViewThreshold = 0.1
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: inViewThreshold });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Parallax effect on scroll
export const ParallaxSection: React.FC<{
  children: ReactNode;
  speed?: number;
  className?: string;
}> = ({ 
  children, 
  speed = 0.5,
  className = '' 
}) => {
  return (
    <motion.div
      className={className}
      style={{ 
        position: 'relative',
        zIndex: 1
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.div
        style={{
          position: 'relative',
          zIndex: 1
        }}
        initial={{ y: 0 }}
        animate={{ 
          y: typeof window !== 'undefined' ? window.scrollY * speed * -1 : 0
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
