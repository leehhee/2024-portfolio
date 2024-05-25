'use client';
import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';
import { social } from '@/components/ui/icon';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { springOption } from '@/utils';

const Contact = () => {
  const sectionRef = useRef(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['100% 100%', '50% 100%'],
  });
  useGSAP(() => {
    if (!textRef.current) return;
    const text = new SplitType(textRef.current, { types: 'lines,chars' });

    if (!text.lines || text.lines.length < 3) return;

    const tl1 = gsap.timeline({
      ease: 'circ.inOut',
      yoyo: true,
      scrollTrigger: {
        trigger: textRef.current,
        toggleActions: 'play none none reverse',
        start: 'start center',
      },
    });

    tl1
      .from(text.lines[0], {
        y: -30,
        opacity: 0,
        rotate: 10,
        duration: 0.3,
      })
      .from(text.lines[1], {
        x: -20,
        opacity: 0,
        duration: 0.4,
      })
      .from(text.lines[2], {
        x: 40,
        opacity: 0,
        duration: 0.7,
      });
  }, []);

  const filter = useTransform(scrollYProgress, (v) => `blur(${v * 1.5}rem)`);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.1]);
  const textScale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  const animateValue = {
    filter: useSpring(filter, springOption),
    scale: useSpring(scale, springOption),
    opacity: useSpring(opacity, springOption),
    textScale: useSpring(textScale, springOption),
  };

  return (
    <Section className='contact' id='contact'>
      <h2 className='sound-only'>contact</h2>
      <motion.p
        className='contact__text'
        ref={textRef}
        style={{ scale: animateValue.textScale }}
      >
        <span className='light'>Let{`'`}s</span>
        <br /> work
        <br /> together
      </motion.p>
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
        style={{
          filter,
          scale: animateValue.scale,
          opacity: animateValue.opacity,
        }}
      ></motion.div>
    </Section>
  );
};

export default Contact;
