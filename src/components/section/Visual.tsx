'use client';
import Lottie from 'lottie-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import SplitType from 'split-type';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Section } from '@/components/ui/section';
import { visual } from '@/components/ui/icon';
import { VisualIconProps, VisualVideo } from '@/components/ui/visual';

const visualIcon = Object.entries(visual);
const VISUAL_01 = require('/public/icon/visual/visual_01.json');
const VISUAL_05 = require('/public/icon/visual/visual_05.json');

const Visual = () => {
  // PARAM dom
  const visualRef = useRef<HTMLDivElement>(null);

  // FUNCTION motion
  useGSAP(
    () => {
      const visualText = document.querySelectorAll(
        '.visual--main .visual__text'
      );
      // const splitWord = new SplitType('.visual--main .visual__text-container', {
      //   types: 'words',
      // });

      console.log(visualText);
      const tl = gsap.timeline({
        yoyo: true,
        scrollTrigger: {
          trigger: visualRef.current,
          start: () => 'top top',
          end: () => `bottom top`,
          invalidateOnRefresh: true,
          markers: true,
        },
      });

      // tl.from(splitWord, {
      //   yPercent: 100,
      // });
    },
    { scope: visualRef }
  );
  return (
    <Section className='visual visual--main' autoheight={true} dom={visualRef}>
      <h2 className='sound-only'>비주얼 영역</h2>
      <div className='visual__text-container pc-only'>
        <div className='visual__text-row'>
          <div className='visual__text'>We</div>
          <div className='visual__icon' data-icon='1'>
            <Lottie animationData={VISUAL_01} loop={false} />
          </div>
          <div className='visual__text'>craft</div>
          <VisualVideo id={1} />
          <VisualIcon id={2} />
          <VisualIcon id={3} />
        </div>
        <div className='visual__text-row'>
          {/* <VisualIcon id={4} /> */}
          <div className='visual__line' data-line='1'></div>
          <VisualVideo id={2} />
          <div className='visual__text'>visual</div>
          <div className='visual__text'>stories</div>
        </div>
        <div className='visual__text-row'>
          <div className='visual__text'>through</div>
          <div className='visual__icon' data-icon='5'>
            <Lottie
              className='visual__icon'
              data-icon='5'
              animationData={VISUAL_05}
              loop={false}
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
          <div className='visual__text'>authentic</div>
          {/* <VisualIcon id={8} /> */}
          <div className='visual__line' data-line='2'></div>
        </div>
        <div className='visual__text-row'>
          <VisualIcon id={9} />
          <VisualIcon id={2} />
          <VisualIcon id={10} />
          <VisualIcon id={2} />
          <VisualVideo id={5} />
          <div className='visual__text'>design.</div>
        </div>
      </div>
      <div className='visual__text-container tb-only'>
        <div className='visual__text-row'>
          <div className='visual__text'>We</div>
          <div className='visual__icon' data-icon='1'>
            <Lottie animationData={VISUAL_01} loop={false} />
          </div>
          <div className='visual__text'>craft</div>
          <VisualIcon id={2} />
          <VisualIcon id={3} />
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={1} />
        </div>
        <div className='visual__text-row'>
          <div className='visual__text'>visual</div>
          <div className='visual__text'>stories</div>
        </div>
        <div className='visual__text-row'>
          <div className='visual__line' data-line='1'></div>
          <VisualVideo id={2} />
        </div>
        <div className='visual__text-row'>
          <div className='visual__text'>through</div>
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
          <div className='visual__text'>authentic</div>
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
          <div className='visual__text'>design.</div>
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
