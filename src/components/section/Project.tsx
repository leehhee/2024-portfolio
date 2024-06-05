'use client';
import Image from 'next/image';
import { Section } from '@/components/ui/section';
import { project, IProjectItem } from '@/data';
import { useState } from 'react';

const Project = () => {
  return (
    <>
      <Section className='project'>
        <h2 className='sound-only'>대표 프로젝트</h2>
        <ul className='project__list'>
          {project.map((el) => (
            <ProjectItem {...el} key={el.key} />
          ))}
        </ul>
      </Section>
      <Section className='sub-project' autoheight={true}>
        <h2 className='sound-only'>그 외 프로젝트</h2>
        <ul className='sub-project__list'>
          {project.map((el, idx) => (
            <SubProjectItem {...el} key={el.key} idx={idx} />
          ))}
        </ul>
      </Section>
    </>
  );
};

const ProjectItem = (props: IProjectItem) => {
  const [isHover, setIsHover] = useState(false);

  const linkOption = {
    onMouseOver: () => setIsHover(true),
    onMouseOut: () => setIsHover(false),
  };

  return (
    <li className='project__item' data-hover={isHover}>
      <div className='project__item-text'>
        <div className='project__item-title-container'>
          <a href={props.link} target='__blank' {...linkOption} tabIndex={-1}>
            <h3 className='project__item-title'>{props.title}</h3>
            <p className='project__item-sub'>{props.subtitle}</p>
          </a>
          <div className='project__item-link'>
            <a
              className='project__item-link-item tb-only'
              target='_blank'
              href={props.link}
              {...linkOption}
            >
              View Project →
            </a>
            <a
              className='project__item-link-item project__item-link-info'
              target='_blank'
              href='#'
            >
              View Detail →
            </a>
          </div>
        </div>
        <ul className='project__tag pc-only'>
          {props.tags?.map((el, idx) => (
            <li className='project__tag-item' key={`tag__${idx}-${el}`}>
              <span className='project__tag-text'>#{el}</span>
              <span className='project__tag-text'>#{el}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='project__item-img'>
        <a href={props.link} target='__blank' {...linkOption}>
          <Image src={props.thumb} fill alt='' />
        </a>
      </div>
    </li>
  );
};

const SubProjectItem = (props: ISubProjectItemProps) => {
  return (
    <li className='sub-project__item'>
      <a href={props.link} target='__blank'>
        <div className='sub-project__item-num'>{`(0${props.idx + 1})`}</div>
        <h3 className='sub-project__item-title'>{props.title}</h3>

        <div className='sub-project__item-text-container'>
          <p className='sub-project__item-desc'>{props.desc}</p>
          <ul className='sub-project__tag'>
            {props.tags?.map((el, idx) => (
              <li className='sub-project__tag-item' key={`tag__${idx}-${el}`}>
                <span className='sub-project__tag-text'>#{el}</span>
                {/* <span className='sub-project__tag-text'>#{el}</span> */}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </li>
  );
};

interface ISubProjectItemProps extends IProjectItem {
  idx: number;
}

export default Project;
