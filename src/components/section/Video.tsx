'use client';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DownArrow } from '@/components/ui/icon';
import { Section } from '@/components/ui/section';
import { progress } from 'framer-motion';

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
        start: () => 'top top',
        end: () => '1px top',
        markers: true,
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
        // yoyo: true,
        scrollTrigger: {
          trigger: videoRef.current,
          scrub: true,
          start: () => 'top top',
          end: () => `center top`,
          markers: true,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        titleRef.current,
        {
          yPercent: -70,
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
        <p className='video__title'>Experience Worlds Unseen</p>
        <div className='video__info pc-only'>
          <p>Featured Reel ‘24</p>
          <button className='video__timer'>00:00</button>
        </div>
      </div>
      <button className='video__more' ref={moreRef}>
        Scroll for more <DownArrow />
      </button>
    </Section>
  );
};

export default Video;
