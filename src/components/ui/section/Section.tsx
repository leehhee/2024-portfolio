import { motion, useScroll, useSpring } from 'framer-motion';
import React, { RefObject, useRef } from 'react';
import { HTMLAttributes } from 'react';
import { springOption } from '@/utils';

const Section = React.forwardRef<HTMLDivElement, ISectionProps>(
  (props, ref) => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref as RefObject<HTMLDivElement>,
      offset: ['0 1'],
    });

    const animateValue = {
      scaleX: useSpring(scrollYProgress, springOption),
    };

    return (
      <section
        {...props}
        ref={ref}
        className={`sc ${props.className}`}
        data-unlimit={props.unlimit}
        data-autoheight={props.autoheight}
      >
        <div
          className={`sc__inner ${props.className}__inner`}
          data-unlimit={props.unlimit}
        >
          {props.title && (
            <div className={`sc__title ${props.className}__title`}>
              <h2 className='sc__title-text'>{props.title}</h2>
              <motion.span
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 0.3 }}
                transition={{ duration: 1, type: 'tween', ease: 'circInOut' }}
                className='sc__title-bar'
              ></motion.span>
            </div>
          )}
          {props.children}
        </div>
      </section>
    );
  }
);

export interface ISectionProps extends HTMLAttributes<HTMLDivElement> {
  unlimit?: boolean;
  autoheight?: boolean;
  title?: string;
}

export default Section;
