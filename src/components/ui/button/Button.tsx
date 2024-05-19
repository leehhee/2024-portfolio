'use client';
import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

export const LinkButtonMotion = {
  initial: {},
  active: {},
};

const LinkButton = (props: ILinkButtonProps) => {
  return (
    <div className={`button ${props.className || ''}`}>
      <motion.a
        // variants={LinkButtonMotion}
        initial='initial'
        className={`button__link`}
        href='#'
        data-border='true'
      >
        {props.children}
      </motion.a>
      <motion.div className='button__line-container'>
        <motion.div
          className='button__line'
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
