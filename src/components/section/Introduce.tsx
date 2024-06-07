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
          } else {
            tl.progress(0);
          }
        },
      });

      const tl = gsap.timeline({
        yoyo: true,
        repeatRefresh: true,
        paused: true,
      });

      tl.to('.introduce__title-changer-item', {
        // text: 'Flexible',
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
        yPercent: () => -150,
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
          {/* Studio Kanda is a digital-first design studio—mixing brand and digital
          to help bring your business to life in new and unexpected ways. */}
          By implementing impressive UI and interactions based on solid markup,{' '}
          <br className='pc-only' />I enhance the value of the service and
          provide a better user experience.
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
