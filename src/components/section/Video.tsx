'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/components/register/gsap';
import { DownArrow } from '@/components/ui/icon';
import { Section } from '@/components/ui/section';

const Video = () => {
  // PARAM dom
  const videoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLButtonElement>(null);

  // FUNCTION motion
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: videoRef.current,
        start: () => '0 0',
        end: () => '1px 0',
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (self.progress >= 1) {
            gsap.to(moreRef.current, {
              yPercent: -200,
              opacity: 0,
              duration: 0.3,
            });
          } else {
            gsap.to(moreRef.current, {
              yPercent: 0,
              opacity: 1,
              duration: 0.3,
            });
          }
        },
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector('body'),
          scrub: true,
          start: () => '0 0',
          end: () => `+=${(window.innerHeight / 3) * 2}`,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        titleRef.current,
        {
          yPercent: () => -80,
        },
        'fade-out'
      );

      tl.to(
        videoRef.current,
        {
          opacity: 0,
        },
        'fade-out+=0.2'
      );
    },
    { scope: videoRef }
  );

  const scrollToVisual = (e: React.MouseEvent) => {
    e.preventDefault();
    const visual = document.querySelector('.visual');

    if (!visual) return;

    visual.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <Section className='video' dom={videoRef}>
      <h2 className='sound-only'>상단 비디오 영역</h2>
      <div className='video__container'>
        <video
          src='/video/main_video.mp4'
          loop
          autoPlay={true}
          muted
          playsInline
        ></video>
      </div>
      <div className='video__title-container' ref={titleRef}>
        <p className='video__title'>Park Ye rim, UI Developer</p>
        <div className='video__info pc-only'>
          <p>Featured Reel ‘24</p>
          <button className='video__timer'>00:00</button>
        </div>
      </div>
      <button className='video__more' ref={moreRef} onClick={scrollToVisual}>
        Scroll for more <DownArrow />
      </button>
    </Section>
  );
};

export default Video;
