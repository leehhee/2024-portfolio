'use client';
import { motion } from 'framer-motion';
import { HTMLAttributes, useMemo } from 'react';

const Badge = (props: IBadgeProps) => {
  const contents = useMemo(() => props.children, [props.children]);
  const isAnimate = useMemo(() => props.animate, [props.animate]);

  return (
    <div className={`badge ${props.className || ''}`}>
      <div className='badge__link'>{contents}</div>
      <motion.div className='badge__line-container'>
        <motion.div
          className='glow-border'
          initial={{ rotate: 0 }}
          animate={isAnimate && { rotate: 360 }}
          transition={{ ease: 'linear', duration: 4, repeat: Infinity }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export interface IBadgeProps extends HTMLAttributes<HTMLDivElement> {
  animate?: boolean;
}

export default Badge;
