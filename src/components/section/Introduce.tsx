'use client';
import { gsap, ScrollTrigger, useGSAP } from '@/components/register/gsap';
import { Section } from '@/components/ui/section';
import { skill } from '@/components/ui/icon';
import { useRef } from 'react';

const skillData = [
  { icon: skill.HTML, name: 'HTML' },
  { icon: skill.CSS, name: 'CSS' },
  { icon: skill.SASS, name: 'SASS/SCSS' },
  { icon: skill.SC, name: 'Styled-components' },
  { icon: skill.JAVASCRIPT, name: 'Javascript(ES6+)' },
  { icon: skill.TYPESCRIPT, name: 'Typescript' },
  { icon: skill.JQUERY, name: 'JQuery' },
  { icon: skill.REACT, name: 'React.js' },
  { icon: skill.NEXT, name: 'Next.js' },
  { icon: skill.GIT, name: 'Git' },
  // { icon: skill.PHOTOSHOP, name: 'Photoshop' },
  // { icon: skill.FIGMA, name: 'Figma' },
];

const Introduce = () => {
  const introduceRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: introduceRef.current,
        start: () => 'top center',
        end: () => 'bottom top',
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (self.isActive) {
            tl.play();
          }
        },
      });

      const tl = gsap.timeline({
        yoyo: true,
        repeatRefresh: true,
        paused: true,
        repeat: 0,
      });

      tl.to('.introduce__title-changer-item', {
        yPercent: () => -100,
        duration: 1.2,
        ease: 'power4.inOut',
      });
      tl.to('.introduce__title-changer-item', {
        yPercent: () => -200,
        duration: 1.2,
        ease: 'power4.inOut',
      });
      tl.to('.introduce__title-changer-item', {
        yPercent: () => 0,
        duration: 1.5,
        ease: 'power4.inOut',
      });
      tl.fromTo(
        '.introduce__desc',
        {
          opacity: 0,
        },
        {
          opacity: 0.4,
          duration: 0.5,
        }
      );
      tl.to('.introduce__icon-item svg', {
        y: () => 0,
        stagger: 0.1,
      });
    },
    { scope: introduceRef }
  );

  return (
    <Section className='introduce' dom={introduceRef}>
      <h2 className='introduce__title'>
        <span className='introduce__title-changer' ref={textRef}>
          <span className='introduce__title-changer-item'>Flexible</span>
          <span className='introduce__title-changer-item' aria-hidden='true'>
            Adaptable
          </span>
          <span className='introduce__title-changer-item' aria-hidden='true'>
            Versatile
          </span>
        </span>
        <br />
        Developer
      </h2>
      <div className='introduce__contents'>
        <p className='introduce__desc'>
          {/* By implementing impressive UI and interactions based on solid markup,{' '}
          <br className='pc-only' />I enhance the value of the service and
          provide a better user experience. */}
          저는 견고한 마크업을 바탕으로, 서비스에 멋진 UI와 인터랙션을 구현하고
          문제를 해결하여 사용자의 니즈를 충족시키는 것에서 보람을 느낍니다.
          <br />
          기억에 남아 오래 사용하고 싶은 플랫폼을 만드는 것, 그리고 개발을 통해
          더 많은 사람들의 문제를 해결하는 것이 목표입니다.
        </p>
        <h3 className='sound-only'>사용 기술스택</h3>
        <ul className='introduce__icon-list'>
          {skillData.map((el) => (
            <li key={el.name} className='introduce__icon-item'>
              {el.icon}
              <span className='sound-only'>{el.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Introduce;
