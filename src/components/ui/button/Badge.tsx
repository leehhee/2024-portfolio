'use client';
import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

const Badge = (props: IBadgeProps) => {
  return (
    <div className={`badge ${props.className || ''}`}>
      <div className='badge__link'>{props.children}</div>
      <motion.div className='badge__line-container'>
        <motion.div
          className='glow-border'
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ ease: 'linear', duration: 4, repeat: Infinity }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export interface IBadgeProps extends HTMLAttributes<HTMLDivElement> {}

export default Badge;
