'use client';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { social } from '@/components/ui/icon';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

const springOption = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};

const Contact = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['100% 100%', '50% 100%'],
  });

  const filter = useTransform(scrollYProgress, (v) => `blur(${v * 1.5}rem)`);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const animateValue = {
    filter: useSpring(filter, springOption),
    scale: useSpring(scale, springOption),
  };

  return (
    <Section className='contact'>
      <h2 className='sound-only'>contact</h2>
      <p className='contact__text'>
        <span className='light'>Let's</span>
        <br /> work
        <br /> together
      </p>
      <div className='contact__button-container'>
        <Button className='contact__button' href='#'>
          <span className='icon'>{social.MAIL}</span>
          highcolor_12@g.hongik.ac.kr
        </Button>
        <Button className='contact__button' href='#'>
          <span className='icon'>{social.RESUME}</span>
          Get resume
        </Button>
      </div>
      <motion.div
        className='contact__bg'
        ref={sectionRef}
        style={{ filter, scale: animateValue.scale }}
      ></motion.div>
    </Section>
  );
};

export default Contact;
