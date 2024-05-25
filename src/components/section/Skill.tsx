'use client';
import { ReactNode, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/button';
import { skill } from '@/components/ui/icon';
import { skill as skillData } from '@/data';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { springOption } from '@/utils';
import SplitType from 'split-type';

const Skill = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (!descRef.current) return;
    const sections = gsap.utils.toArray('.skill__item');
    const testSkill = document.querySelectorAll('.skill__item').length;
    const text = new SplitType(descRef.current, {
      types: 'chars,lines',
    });

    gsap.to(sections, {
      xPercent: -100 * (testSkill - 1),
      ease: 'none', // <-- IMPORTANT!
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 0.3,
        start: 'top top',
        end: () =>
          '+=' +
          (listRef.current?.offsetWidth ? listRef.current?.offsetWidth / 2 : 0),
      },
    });

    gsap.from(text.lines, {
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.3,
      delay: 0.3,
      yoyo: true,

      scrollTrigger: {
        trigger: descRef.current,
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['0%', '200vh'],
  });

  const filter = useTransform(scrollYProgress, (v) => `blur(${v * 1.5}rem)`);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  const animateValue = {
    filter: useSpring(filter, springOption),
    scale: useSpring(scale, springOption),
  };

  return (
    <Section className='skill' title='Skill' id='skill' ref={sectionRef}>
      <div className='skill__text-container'>
        <p className='skill__text' ref={descRef}>
          견고한 마크업을 바탕으로, 서비스에 멋진 UI와 인터랙션을 구현하고{' '}
          <br className='br' />
          문제를 해결하여 사용자의 니즈를 충족시키는 것에서 보람을 느낍니다.{' '}
          <br />
          <br />
          기억에 남아 오래 사용하고 싶은 플랫폼을 만드는 것, 그리고 개발을 통해{' '}
          <br className='br' />더 많은 사람들의 문제를 해결하는 것이 목표입니다.
        </p>
      </div>
      <div className='skill__container'>
        <ul className='skill__list' ref={listRef}>
          {skillData.map((el, idx) => (
            <SkillItem
              key={el.title + idx}
              icon={skill.JAVASCRIPT}
              title={el.title}
              desc={el.desc}
            />
          ))}
        </ul>
      </div>
      <motion.div
        className='skill__bg'
        style={{
          filter,
          scale: animateValue.scale,
        }}
      ></motion.div>
    </Section>
  );
};

const SkillItem = (props: ISkillItemProps) => {
  return (
    <li className='skill__item glassbox'>
      <div className='skill__item-title-container'>
        <Badge className='skill__icon'>
          <span className='skill__icon-inner'>{props.icon}</span>
        </Badge>
        <h3 className='skill__item-title'>{props.title}</h3>
      </div>
      <p className='skill__item-desc'>{props.desc}</p>
    </li>
  );
};

interface ISkillItemProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

export default Skill;
