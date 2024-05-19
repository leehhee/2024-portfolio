import { HTMLAttributes } from 'react';

const Section: React.FC<ISectionProps> = (props) => {
  return (
    <section {...props} className={`sc ${props.className}`} data-autoheight={props.autoheight}>
      <div className={`sc__inner ${props.className}__inner`} data-unlimit={props.unlimit}>
        {props.children}
      </div>
    </section>
  );
};

export interface ISectionProps extends HTMLAttributes<HTMLDivElement> {
  unlimit?: boolean;
  autoheight?: boolean;
}

export default Section;
