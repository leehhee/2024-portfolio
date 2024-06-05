import { Section } from '@/components/ui/section';
import { VisualIconProps, VisualVideo } from '@/components/ui/visual';

const OutroVisual = () => {
  return (
    <Section className='visual visual--outro' autoheight={true}>
      <h2 className='sound-only'>비주얼 영역</h2>
      <div className='visual__text-container pc-only'>
        <div className='visual__text-row'>
          <span className='visual__text'>A diverse</span>
          <VisualVideo id={6} />
          <span className='visual__text'>studio</span>
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={7} />
          <span className='visual__text'>fueled by boundless</span>
        </div>
        <div className='visual__text-row'>
          <span className='visual__text'>curiosity &</span>
          <VisualVideo id={8} />
          <span className='visual__text'>passion</span>
        </div>
        <div className='visual__text-row'>
          <span className='visual__text'>for</span>
          <VisualVideo id={9} />
          <span className='visual__text'>narratives that</span>
        </div>
        <div className='visual__text-row'>
          <span className='visual__text'>transcend reality.</span>
          <VisualVideo id={10} />
        </div>
      </div>
      <div className='visual__text-container tb-only'>
        <div className='visual__text-row'>
          <span className='visual__text'>A</span>
          <span className='visual__text'>diverse</span>
          <span className='visual__text'>studio</span>
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={6} />
          <span className='visual__text'>fueled</span>
          <span className='visual__text'>by</span>
        </div>
        <div className='visual__text-row'>
          <span className='visual__text'>boundless</span>
          <VisualVideo id={7} />
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={8} />
          <span className='visual__text'>curiosity</span>
          <span className='visual__text'>&</span>
        </div>
        <div className='visual__text-row'>
          <span className='visual__text'>passion</span>
          <VisualVideo id={9} />
          <span className='visual__text'>for</span>
        </div>
        <div className='visual__text-row'>
          <span className='visual__text'>narratives</span>
          <span className='visual__text'>that</span>
        </div>
        <div className='visual__text-row'>
          <VisualVideo id={10} />
        </div>
        <div className='visual__text-row'>
          <span className='visual__text'>transcend</span>
          <span className='visual__text'>reality.</span>
        </div>
      </div>
    </Section>
  );
};

export default OutroVisual;
