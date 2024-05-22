import React from 'react';
import { HTMLAttributes } from 'react';

const Section = React.forwardRef(
  (props: ISectionProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    return (
      <section
        {...props}
        ref={ref}
        className={`sc ${props.className}`}
        data-unlimit={props.unlimit}
        data-autoheight={props.autoheight}
      >
        <div
          className={`sc__inner ${props.className}__inner`}
          data-unlimit={props.unlimit}
        >
          {props.title && (
            <h2 className={`sc__title ${props.className}__title`}>
              {props.title}
            </h2>
          )}
          {props.children}
        </div>
      </section>
    );
  }
);

export interface ISectionProps extends HTMLAttributes<HTMLDivElement> {
  unlimit?: boolean;
  autoheight?: boolean;
  title?: string;
}

export default Section;
