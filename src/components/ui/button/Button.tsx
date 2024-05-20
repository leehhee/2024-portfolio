'use client';
import { motion } from 'framer-motion';
import { HTMLAttributes, useState } from 'react';

const LinkButton = (props: ILinkButtonProps) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className={`button ${props.className || ''}`}>
      <motion.a initial='initial' className={`button__link`} href='#' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        {props.children}
      </motion.a>
      <motion.div className='glow-border-container' initial={{ opacity: 0 }} animate={isHover ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.5 }}>
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

export interface ILinkButtonProps extends HTMLAttributes<HTMLAnchorElement> {}

export default LinkButton;
