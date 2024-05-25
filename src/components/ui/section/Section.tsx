import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { HTMLAttributes } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

gsap.registerPlugin(useGSAP);

const Section = React.forwardRef<HTMLDivElement, ISectionProps>(
  (props, ref) => {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
      const section = document.querySelector(`.${props.className}`);
      if (!titleRef?.current) return;
      const text = new SplitType(titleRef.current, {
        types: 'chars',
      });
      gsap.from(text.chars, {
        y: 40,
        opacity: 0,
        scale: 0.85,
        rotate: 15,
        duration: 0.5,
        stagger: 0.1,
        yoyo: true,

        scrollTrigger: {
          trigger: section,
          start: 'top center',
          toggleActions: 'play none none reverse',
        },
      });
    }, []);

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
              <h2 className='sc__title-text' ref={titleRef}>
                {props.title}
              </h2>
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
