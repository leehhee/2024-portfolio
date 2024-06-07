'use client';
import { useRef } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/components/register/gsap';

import { Section } from '@/components/ui/section';
import { VisualText, VisualVideo } from '@/components/ui/visual';

const OutroVisual = () => {
  const visualRef = useRef(null);
  // FUNCTION motion
  useGSAP(
    () => {
      const visualText = gsap.utils.toArray('.visual__text');
      const visualTextInner = gsap.utils.toArray('.visual__text-inner');
      const visualVideo = gsap.utils.toArray('.visual__video-inner');

      const tl = gsap.timeline({
        yoyo: true,
        paused: true,
        repeatRefresh: true,
      });

      tl.set(visualTextInner, { y: 0, yPercent: 100 });

      tl.to(
        visualTextInner,
        {
          yPercent: () => 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
        },
        'fade-in'
      );
      tl.to(
        visualVideo,
        {
          width: '100%',
          duration: 1,
          ease: 'sine.out',
        },
        'fade-in'
      );
      tl.to(visualText, {
        overflow: 'visible',
      });

      ScrollTrigger.create({
        trigger: visualRef.current,
        start: () => 'top center',
        end: () => `bottom top`,
        invalidateOnRefresh: true,
        onToggle: (self) => {
          if (self.isActive) {
            tl.play();
          } else {
            tl.progress(0);
            tl.pause();
          }
        },
      });
    },
    { scope: visualRef }
  );

  return (
    <Section className='visual visual--outro' autoheight={true} dom={visualRef}>
      <h2 className='sound-only'>비주얼 영역</h2>
      <div className='visual__text-container pc-only'>
        <div className='visual__text-row'>
          <VisualText>A diverse</VisualText>
          <VisualVideo id={6} />
          <VisualText>studio</VisualText>
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={7} />
          <VisualText>fueled by boundless</VisualText>
        </div>
        <div className='visual__text-row'>
          <VisualText>curiosity &</VisualText>
          <VisualVideo id={8} />
          <VisualText>passion</VisualText>
        </div>
        <div className='visual__text-row'>
          <VisualText>for</VisualText>
          <VisualVideo id={9} />
          <VisualText>narratives that</VisualText>
        </div>
        <div className='visual__text-row'>
          <VisualText>transcend reality.</VisualText>
          <VisualVideo id={10} />
        </div>
      </div>
      <div className='visual__text-container tb-only'>
        <div className='visual__text-row'>
          <VisualText>A</VisualText>
          <VisualText>diverse</VisualText>
          <VisualText>studio</VisualText>
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={6} />
          <VisualText>fueled</VisualText>
          <VisualText>by</VisualText>
        </div>
        <div className='visual__text-row'>
          <VisualText>boundless</VisualText>
          <VisualVideo id={7} />
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={8} />
          <VisualText>curiosity</VisualText>
          <VisualText>&</VisualText>
        </div>
        <div className='visual__text-row'>
          <VisualText>passion</VisualText>
          <VisualVideo id={9} />
          <VisualText>for</VisualText>
        </div>
        <div className='visual__text-row'>
          <VisualText>narratives</VisualText>
          <VisualText>that</VisualText>
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={10} />
        </div>
        <div className='visual__text-row'>
          <VisualText>transcend</VisualText>
          <VisualText>reality.</VisualText>
        </div>
      </div>
    </Section>
  );
};

export default OutroVisual;
