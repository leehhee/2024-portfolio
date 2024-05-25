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
    const words = gsap.utils.toArray(text.lines[1].querySelectorAll('.char'));

    const tl1 = gsap.timeline({
      ease: 'circ.inOut',
      yoyo: true,
      scrollTrigger: {
        trigger: textRef.current,
        toggleActions: 'play none none reverse',
        markers: true,
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
      })
      .from(words, {
        scale: 0.8,
        ease: 'circ.inOut',
        duration: 0.3,
      });
  }, []);

  const filter = useTransform(scrollYProgress, (v) => `blur(${v * 1.5}rem)`);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.1]);

  const animateValue = {
    filter: useSpring(filter, springOption),
    scale: useSpring(scale, springOption),
    opacity: useSpring(opacity, springOption),
  };

  return (
    <Section className='contact' id='contact'>
      <h2 className='sound-only'>contact</h2>
      <p className='contact__text' ref={textRef}>
        <span className='light'>Let{`'`}s</span>
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
