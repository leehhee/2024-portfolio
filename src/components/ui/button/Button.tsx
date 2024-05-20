'use client';
import { HTMLMotionProps, motion } from 'framer-motion';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, MouseEventHandler, useState } from 'react';

const LinkButton = (props: ILinkButtonProps) => {
  const { className, children, type, ...otherProps } = props;
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={`button ${className || ''}`}>
      {type === 'button' ? (
        <motion.button
          onClick={props.onClick}
          initial='initial'
          className={`button__link`}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          {children}
        </motion.button>
      ) : (
        <motion.a {...otherProps} initial='initial' className={`button__link`} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
          {children}
        </motion.a>
      )}
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

export interface ILinkButtonProps extends TLinkButtonBaseProps {
  type?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

export type TLinkButtonBaseProps = AnchorHTMLAttributes<HTMLAnchorElement> & HTMLMotionProps<'a'>;
type TAnchorBaseType = AnchorHTMLAttributes<HTMLAnchorElement> & HTMLMotionProps<'a'>;
type TButtonBaseType = ButtonHTMLAttributes<HTMLButtonElement> & HTMLMotionProps<'button'>;
export default LinkButton;
