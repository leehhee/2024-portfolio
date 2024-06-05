import { PropsWithChildren } from 'react';

const VisualText: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className='visual__text'>
      <span className='visual__text-inner'>{props.children}</span>
    </div>
  );
};

export default VisualText;
