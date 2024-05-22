'use client';
import { ReactNode, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/button';
import { skill } from '@/components/ui/icon';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { springOption } from '@/utils';

const Skill = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.skill__item');
    const testSkill = document.querySelectorAll('.skill__item').length;
    gsap.to(sections, {
      xPercent: -100 * (testSkill - 1),
      ease: 'none', // <-- IMPORTANT!
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 0.3,
        start: 'top top',
        end: () => '+=' + listRef.current?.offsetWidth,
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
        <p className='skill__text'>
          견고한 마크업을 바탕으로, 서비스에 멋진 UI와 인터랙션을 구현하고
          문제를 해결하여 사용자의 니즈를 충족시키는 것에서 보람을 느낍니다.{' '}
          <br />
          기억에 남아 오래 사용하고 싶은 플랫폼을 만드는 것, 그리고 개발을 통해
          더 많은 사람들의 문제를 해결하는 것이 목표입니다.
        </p>
      </div>
      <div>
        <ul className='skill__list' ref={listRef}>
          <SkillItem icon={skill.JAVASCRIPT} title='타이틀' desc='데스크' />
          <SkillItem icon={skill.JAVASCRIPT} title='타이틀' desc='데스크' />
          <SkillItem icon={skill.JAVASCRIPT} title='타이틀' desc='데스크' />
          <SkillItem icon={skill.JAVASCRIPT} title='타이틀' desc='데스크' />
          <SkillItem icon={skill.JAVASCRIPT} title='타이틀' desc='데스크' />
          <SkillItem icon={skill.JAVASCRIPT} title='타이틀' desc='데스크' />
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
