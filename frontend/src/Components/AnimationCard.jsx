import { useRef, useEffect } from 'react';
import { useInView, motion, useAnimation } from 'framer-motion';

function AnimationCard({ children, side }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start('visible');
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: `${side}` },
          visible: { opacity: 1, x: 0 },
        }}
        initial='hidden'
        animate={control}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default AnimationCard;
