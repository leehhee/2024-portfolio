import { HTMLAttributes } from 'react';

const Section = (props: ISectionProps) => {
  return (
    <section
      className={`sc ${props.className || ''}`}
      data-autoheight={props.autoheight}
    >
      <div className={`sc__inner ${props.className + '__inner' || ''}`}>
        {props.children}
      </div>
    </section>
  );
};

export interface ISectionProps extends HTMLAttributes<HTMLDivElement> {
  autoheight?: boolean;
}

export default Section;
