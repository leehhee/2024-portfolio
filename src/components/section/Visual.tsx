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
    const text = new SplitType('.visual__text', { types: 'chars,lines,words' });
    if (!text.words) return;
    const hello = text.words[0];

    const tl = gsap.timeline();

    tl.fromTo(
      text.chars,
      {
        y: 20,
        opacity: 0,
        scale: 0.85,
        rotate: 10,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.07,
        duration: 0.3,
        scale: 1,
        rotate: 0,
        ease: 'power4.out',
      }
    ).to(hello, {
      letterSpacing: '0.1em',
      duration: 1,
      repeat: Infinity,
      repeatDelay: 5,
      yoyo: true,
      ease: 'expo.inOut',
    });
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
        I&apos;m a Front-end
        <br />
        Developer
        <br />
        with flexible. <br />
      </p>
      <Ticker className='visual__ticker' duration={20}>
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
