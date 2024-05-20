'use client';
import { HTMLMotionProps, motion } from 'framer-motion';
import { AnchorHTMLAttributes, useState } from 'react';

const LinkButton = (props: TLinkButtonProps) => {
  const { className, children, ...otherProps } = props;
  const [isHover, setIsHover] = useState(false);
  return (
    <div className={`button ${className || ''}`}>
      <motion.a {...otherProps} initial='initial' className={`button__link`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        {children}
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

export type TLinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & HTMLMotionProps<'a'>;

export default LinkButton;
