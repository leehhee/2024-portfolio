import Image from 'next/image';
import { Section } from '@/components/ui/section';
import { project, IProjectItem } from '@/data';

const Project = () => {
  return (
    <Section className='project'>
      <h2 className='sound-only'>프로젝트</h2>
      <ul className='project__list'>
        {project.map((el) => (
          <ProjectItem {...el} key={el.key} />
        ))}
      </ul>
    </Section>
  );
};

const ProjectItem = (props: IProjectItem) => {
  return (
    <li className='project__item'>
      <a className='project__item-inner' href='#' target='__blank'>
        <div className='project__item-text'>
          <div className='project__item-title-container'>
            <h3 className='project__item-title'>{props.title}</h3>
            {/* <p className='project__item-sub'>{props.category}</p> */}
          </div>
          <ul className='project__tag pc-only'>
            {props.tags?.map((el, idx) => (
              <li className='project__tag-item' key={`tag__${idx}-${el}`}>
                <span className='project__tag-text'>#{el}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='project__item-img'>
          <Image src={props.thumb} fill alt='' />
        </div>
      </a>
    </li>
  );
};

export default Project;
