'use client';
import Lottie from 'lottie-react';
import { Section } from '@/components/ui/section';
import { visual } from '@/components/ui/icon';
import { VisualIconProps, VisualVideo } from '@/components/ui/visual';

const visualIcon = Object.entries(visual);
const VISUAL_01 = require('/public/icon/visual/visual_01.json');
const VISUAL_05 = require('/public/icon/visual/visual_05.json');

const Visual = () => {
  return (
    <Section className='visual' autoheight={true}>
      <h2 className='sound-only'>비주얼 영역</h2>
      <div className='visual__text-container pc-only'>
        <div className='visual__text-row'>
          <span className='visual__text'>We</span>
          <div className='visual__icon' data-icon='1'>
            <Lottie animationData={VISUAL_01} loop={false} />
          </div>
          <span className='visual__text'>craft</span>
          <VisualVideo id={1} />
          <VisualIcon id={2} />
          <VisualIcon id={3} />
        </div>
        <div className='visual__text-row'>
          {/* <VisualIcon id={4} /> */}
          <span className='visual__line' data-line='1'></span>
          <VisualVideo id={2} />
          <span className='visual__text'>visual</span>
          <span className='visual__text'>stories</span>
        </div>
        <div className='visual__text-row'>
          <span className='visual__text'>through</span>
          <div className='visual__icon' data-icon='5'>
            <Lottie animationData={VISUAL_05} loop={false} />
          </div>
          <VisualIcon id={6} />
          <VisualIcon id={6} />
          <VisualIcon id={6} />
          <VisualVideo id={3} />
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={4} />
          <VisualIcon id={7} />
          <span className='visual__text'>authentic</span>
          {/* <VisualIcon id={8} /> */}
          <span className='visual__line' data-line='2'></span>
        </div>
        <div className='visual__text-row'>
          <VisualIcon id={9} />
          <VisualIcon id={2} />
          <VisualIcon id={10} />
          <VisualIcon id={2} />
          <VisualVideo id={5} />
          <span className='visual__text'>design.</span>
        </div>
      </div>
      <div className='visual__text-container tb-only'>
        <div className='visual__text-row'>
          <span className='visual__text'>We</span>
          <div className='visual__icon' data-icon='1'>
            <Lottie animationData={VISUAL_01} loop={false} />
          </div>
          <span className='visual__text'>craft</span>
          <VisualIcon id={2} />
          <VisualIcon id={3} />
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={1} />
        </div>
        <div className='visual__text-row'>
          <span className='visual__text'>visual</span>
          <span className='visual__text'>stories</span>
        </div>
        <div className='visual__text-row'>
          <span className='visual__line' data-line='1'></span>
          <VisualVideo id={2} />
        </div>
        <div className='visual__text-row'>
          <span className='visual__text'>through</span>
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
          <span className='visual__text'>authentic</span>
          <span className='visual__line' data-line='2'></span>
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
          <span className='visual__text'>design.</span>
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
