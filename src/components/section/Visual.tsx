'use client';
import { motion } from 'framer-motion';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

import { skill } from '@/components/ui/icon';
import { Section } from '@/components/ui/section';
import { Ticker } from '@/components/ui/ticker';
import { Badge } from '@/components/ui/button';
import { useRef } from 'react';
import SplitType from 'split-type';

const tickerIcon = Object.entries(skill);

gsap.registerPlugin(useGSAP);

const Visual = () => {
  const textContainerRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const text = new SplitType('.visual__text', { types: 'chars' });

    const tl = gsap.timeline();

    // tl.to(textContainerRef, {
    //   duration: 3,
    //   text:
    // });
    gsap.fromTo(
      text,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 10,
        ease: 'power4.out',
      }
    );
  }, []);

  return (
    <Section className='visual' id='visual'>
      <h2 className='sound-only'>비주얼 영역</h2>
      <Badge className='visual__badge' animate>
        <div className='badge__dot'>
          <motion.span
            initial={{ scale: 1 }}
            animate={{ scale: 2.5 }}
            transition={{ duration: 2, repeat: Infinity }}
            className='badge__dot-bg'
          ></motion.span>
        </div>
        Available for Work
      </Badge>
      <p className='visual__text' ref={textContainerRef}>
        <span className='light'>Hello, </span>
        <br />
        I'm a Front-end
        <br />
        Developer
        <br />
        with flexible. <br />
      </p>
      <Ticker className='visual__ticker' duration={30}>
        {tickerIcon.map((el, idx) => {
          return (
            <div className='skill-icon' key={el[0]}>
              {el[1]}
            </div>
          );
        })}
      </Ticker>
    </Section>
  );
};

export default Visual;
