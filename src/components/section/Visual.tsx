'use client';
import { motion } from 'framer-motion';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

import { skill } from '@/components/ui/icon';
import { Section } from '@/components/ui/section';
import { Ticker } from '@/components/ui/ticker';
import { Badge } from '@/components/ui/button';
import { useRef } from 'react';
import SplitType from 'split-type';

const tickerIcon = Object.entries(skill);

gsap.registerPlugin(useGSAP, TextPlugin);

const Visual = () => {
  const textContainerRef = useRef<HTMLParagraphElement>(null);

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

    // if (textChanger.length < 2) return;
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
    </Section>
  );
};

export default Visual;
