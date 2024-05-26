'use client';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import Image from 'next/image';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

import { skill } from '@/components/ui/icon';
import { Section } from '@/components/ui/section';
import { Ticker } from '@/components/ui/ticker';
import { Badge } from '@/components/ui/button';
import { useRef } from 'react';
import SplitType from 'split-type';

import OBJECT01 from '/public/image/object01.png';
import OBJECT02 from '/public/image/object02.png';
import { springOption } from '@/utils';

const tickerIcon = Object.entries(skill);

gsap.registerPlugin(useGSAP, TextPlugin);

const Visual = () => {
  const textContainerRef = useRef<HTMLParagraphElement>(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    const text = new SplitType('.visual__text', { types: 'chars,lines,words' });
    const textChanger: HTMLDivElement[] = gsap.utils.toArray(
      '.visual__text-changer'
    );

    if (!text.words) return;
    const hello = text.words[0];

    const tl1 = gsap.timeline();
    const tl2 = gsap.timeline({
      repeat: Infinity,
      repeatDelay: 3,
      delay: 0.3,
      repeatRefresh: true,
      yoyo: true,
    });
    tl2
      .to(textChanger[0], {
        text: 'Web',
        duration: 1,
      })
      .to(textChanger[1], {
        text: 'Publisher',
        duration: 1,
      })
      .to(textChanger[0], {
        text: 'Front-end',
        duration: 1,
        delay: 3,
      })
      .to(textChanger[1], {
        text: 'Developer',
        duration: 1,
      });

    tl1
      .fromTo(
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
      )
      .to(hello, {
        letterSpacing: '0.1em',
        duration: 1,
        repeat: Infinity,
        repeatDelay: 3,
        yoyo: true,
        ease: 'expo.inOut',
      })
      .to(text.words[text.words.length - 1], {
        scaleX: 1.1,
        letterSpacing: '0.02em',
        transformOrigin: 'left',
        repeat: Infinity,
        repeatDelay: 3,
        duration: 1,
        yoyo: true,
      })
      .add(tl2);
  }, []);

  const { scrollYProgress } = useScroll({
    offset: ['20vh', '100vh'],
  });

  const filter = useTransform(scrollYProgress, (v) => `blur(${v * 2}rem)`);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const reverseScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.1]);
  const animateValue = {
    filter: useSpring(filter, springOption),
    scale: useSpring(scale, springOption),
    opacity: useSpring(opacity, springOption),
    reverseScale: useSpring(reverseScale, springOption),
  };

  return (
    <Section className='visual' id='visual'>
      <h2 className='sound-only'>비주얼 영역</h2>
      <motion.div
        ref={sectionRef}
        style={{
          filter,
          scale: animateValue.reverseScale,
        }}
      >
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
        <div className='visual__text' ref={textContainerRef}>
          <span className='light'>Hello, </span>
          <br />
          I&apos;m a <div className='visual__text-changer'>Front-end</div>
          <br />
          <div className='visual__text-changer'>Developer</div>
          <br />
          with flexible. <br />
        </div>
        <Ticker className='visual__ticker' duration={20}>
          {tickerIcon.map((el, idx) => {
            return (
              <div className='skill-icon' key={el[0]}>
                {el[1]}
              </div>
            );
          })}
        </Ticker>
      </motion.div>
      <motion.div
        className='visual__bg'
        ref={sectionRef}
        style={{
          scale: animateValue.scale,
          opacity: animateValue.opacity,
        }}
      ></motion.div>
    </Section>
  );
};

export default Visual;
