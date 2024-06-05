import { PropsWithChildren } from 'react';

const Ticker: React.FC<PropsWithChildren> = (props) => {
  return (
    <div className='ticker'>
      <ul className='ticker__inner'>
        {props.children}
        {props.children}
        {props.children}
        {props.children}
      </ul>
    </div>
  );
};

export default Ticker;
