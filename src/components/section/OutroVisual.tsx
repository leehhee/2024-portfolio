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
          <VisualText>Work</VisualText>
          <VisualVideo id={6} />
          <VisualText>with me</VisualText>
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={7} />
          <VisualText>if</VisualText>
          <VisualText>you{`'`}re</VisualText>
          <VisualText>looking</VisualText>
          <VisualText>for</VisualText>
          <VisualText>a</VisualText>
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={10} />
          <VisualText>passionate</VisualText>
          <VisualVideo id={8} />
        </div>
        <div className='visual__text-row'>
          <VisualText>{`&`}</VisualText>
          <VisualText>dedicated</VisualText>
          <VisualText>developer.</VisualText>
        </div>
        <div className='visual__text-row'></div>
      </div>
      <div className='visual__text-container tb-only'>
        <div className='visual__text-row'>
          <VisualText>Work</VisualText>
          <VisualText>with</VisualText>
          <VisualText>me</VisualText>
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={6} />
          <VisualText>if</VisualText>
          <VisualText>you{`'`}re</VisualText>
        </div>
        <div className='visual__text-row'>
          <VisualText>looking</VisualText>
          <VisualVideo id={8} />
          <VisualText>for</VisualText>
          <VisualText>a</VisualText>
        </div>
        <div className='visual__text-row'>
          <VisualText>passionate</VisualText>
          <VisualVideo id={9} />
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={7} />
          <VisualText>{`&`}</VisualText>
          <VisualText>dedicated</VisualText>
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={10} />
        </div>
        <div className='visual__text-row'>
          <VisualText>developer.</VisualText>
        </div>
      </div>
    </Section>
  );
};

export default OutroVisual;
