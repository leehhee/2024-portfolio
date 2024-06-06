'use client';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { gsap, ScrollTrigger, useGSAP } from '@/components/register/gsap';
import { useRef } from 'react';
import { Section } from '@/components/ui/section';
import { visual } from '@/components/ui/icon';
import {
  VisualIconProps,
  VisualVideo,
  VisualText,
} from '@/components/ui/visual';

const visualIcon = Object.entries(visual);
const VISUAL_01 = require('/public/icon/visual/visual_01.json');
const VISUAL_05 = require('/public/icon/visual/visual_05.json');

const Visual = () => {
  // PARAM dom
  const visualRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<LottieRefCurrentProps>(null);
  const icon2Ref = useRef<LottieRefCurrentProps>(null);

  // FUNCTION motion
  useGSAP(
    () => {
      const visualText = gsap.utils.toArray('.visual__text');
      const visualTextInner = gsap.utils.toArray('.visual__text-inner');
      const visualVideo = gsap.utils.toArray('.visual__video-inner');
      const visualIcon = gsap.utils.toArray(
        '.visual__icon svg, .visual__icon > div'
      );
      const visualLine = gsap.utils.toArray('.visual__line');

      const tl = gsap.timeline({
        yoyo: true,
        paused: true,
        repeatRefresh: true,
      });

      tl.set(visualTextInner, { y: 0, yPercent: 100 });
      tl.set(visualIcon, { x: 0, xPercent: -100 });

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
      tl.to(
        visualLine,
        {
          scaleX: 1,
          duration: 1,
        },
        'fade-in'
      );
      tl.to(
        visualIcon,
        {
          xPercent: () => 0,
          opacity: 1,
          duration: 1,
          ease: 'sine.out',
        },
        'fade-in'
      );
      tl.to(visualText, {
        overflow: 'visible',
      });

      gsap.fromTo(
        "[data-icon='3'] svg, [data-icon='10'] svg",
        {
          rotate: 0,
        },
        {
          rotate: 360,
          duration: 1,
          repeatDelay: 3,
          repeat: Infinity,
        }
      );

      const visualIcon6: SVGElement[] = gsap.utils.toArray(
        "[data-icon='6'] svg"
      );
      gsap.fromTo(
        visualIcon6,
        {
          rotate: 0,
        },
        {
          rotate: 360,
          duration: 1,
          repeatDelay: 1,
          stagger: 0.7,
          repeat: Infinity,
        }
      );

      ScrollTrigger.create({
        trigger: visualRef.current,
        start: () => 'top center',
        end: () => `bottom top`,
        invalidateOnRefresh: true,
        onToggle: (self) => {
          console.log('toggled, isActive:', self.isActive);
          if (self.isActive) {
            tl.play();
            iconRef.current?.play();
            icon2Ref.current?.play();
          } else {
            tl.reverse(0);
            iconRef.current?.goToAndStop(0);
            icon2Ref.current?.goToAndStop(0);
          }
        },
      });
    },
    { scope: visualRef }
  );

  return (
    <Section className='visual visual--main' autoheight={true} dom={visualRef}>
      <h2 className='sound-only'>비주얼 영역</h2>
      <div className='visual__text-container pc-only'>
        <div className='visual__text-row'>
          <VisualText>We</VisualText>
          <div className='visual__icon' data-icon='1'>
            <Lottie
              lottieRef={iconRef}
              animationData={VISUAL_01}
              loop={false}
              autoplay={false}
            />
          </div>
          <VisualText>craft</VisualText>
          <VisualVideo id={1} />
          <VisualIcon id={2} />
          <VisualIcon id={3} />
        </div>
        <div className='visual__text-row'>
          {/* <VisualIcon id={4} /> */}
          <div className='visual__line' data-line='1'></div>
          <VisualVideo id={2} />
          <VisualText>visual</VisualText>
          <VisualText>stories</VisualText>
        </div>
        <div className='visual__text-row'>
          <VisualText>through</VisualText>
          <div className='visual__icon' data-icon='5'>
            <Lottie
              lottieRef={icon2Ref}
              animationData={VISUAL_05}
              loop={false}
              autoplay={false}
            />
          </div>
          <VisualIcon id={6} />
          <VisualIcon id={6} />
          <VisualIcon id={6} />
          <VisualVideo id={3} />
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={4} />
          <VisualIcon id={7} />
          <VisualText>authentic</VisualText>
          {/* <VisualIcon id={8} /> */}
          <div className='visual__line' data-line='2'></div>
        </div>
        <div className='visual__text-row'>
          <VisualIcon id={9} />
          <VisualIcon id={2} />
          <VisualIcon id={10} />
          <VisualIcon id={2} />
          <VisualVideo id={5} />
          <VisualText>design.</VisualText>
        </div>
      </div>
      <div className='visual__text-container tb-only'>
        <div className='visual__text-row'>
          <VisualText>We</VisualText>
          <div className='visual__icon' data-icon='1'>
            <Lottie animationData={VISUAL_01} loop={false} />
          </div>
          <VisualText>craft</VisualText>
          <VisualIcon id={2} />
          <VisualIcon id={3} />
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={1} />
        </div>
        <div className='visual__text-row'>
          <VisualText>visual</VisualText>
          <VisualText>stories</VisualText>
        </div>
        <div className='visual__text-row'>
          <div className='visual__line' data-line='1'></div>
          <VisualVideo id={2} />
        </div>
        <div className='visual__text-row'>
          <VisualText>through</VisualText>
          <div className='visual__icon' data-icon='5'>
            <Lottie animationData={VISUAL_05} loop={false} />
          </div>
          <VisualIcon id={6} />
          <VisualIcon id={6} />
          <VisualIcon id={6} />
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={3} />
        </div>
        <div className='visual__text-row'>
          <VisualText>authentic</VisualText>
          <div className='visual__line' data-line='2'></div>
        </div>
        <div className='visual__text-row'>
          <VisualIcon id={9} />
          <VisualIcon id={2} />
          <VisualIcon id={10} />
          <VisualIcon id={2} />
          <VisualVideo id={4} />
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={5} />
          <VisualText>design.</VisualText>
        </div>
      </div>
    </Section>
  );
};

const VisualIcon = (props: VisualIconProps) => {
  return (
    <div className='visual__icon' data-icon={props.id}>
      {visualIcon[props.id - 1][1]}
    </div>
  );
};

export default Visual;
