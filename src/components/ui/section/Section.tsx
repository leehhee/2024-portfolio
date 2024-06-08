import { HTMLAttributes, RefObject } from 'react';

const Section = (props: ISectionProps) => {
  return (
    <section
      id={props.id ? props.id : ''}
      className={`sc ${props.className || ''}`}
      data-autoheight={props.autoheight}
      ref={props.dom}
    >
      <div className={`sc__inner ${props.className + '__inner' || ''}`}>
        {props.children}
      </div>
    </section>
  );
};

export interface ISectionProps extends HTMLAttributes<HTMLDivElement> {
  autoheight?: boolean;
  dom?: RefObject<HTMLDivElement>;
}

export default Section;
