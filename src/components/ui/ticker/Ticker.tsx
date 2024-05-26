'use client';
import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

const Ticker: React.FC<ITickerProps> = (props) => {
  const { children, duration, gap, ...otherProps } = props;
  return (
    <div {...otherProps} className={`ticker ${otherProps.className}`}>
      <motion.div
        className={`ticker__list ${otherProps.className}-list`}
        transition={{ duration: duration, ease: 'linear', repeat: Infinity }}
        initial={{ x: 0 }}
        animate={{ x: '-25%' }}
        // whileHover={{ x: '-25%', transition: { duration: duration * 4 } }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
};

interface ITickerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  duration: number;
  gap?: string;
}

export default Ticker;
