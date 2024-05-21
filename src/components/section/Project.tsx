'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { IProjectItem, project } from '@/data';
import { Section } from '@/components/ui/section';

const springOption = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
};

const Project = () => {
  return (
    <Section className='project' title='Project'>
      <ul className='project__list'>
        {project.map((el) => (
          <ProjectItem {...el} key={el.key} />
        ))}
      </ul>
    </Section>
  );
};

const ProjectItem = (props: IProjectItem) => {
  const [isHover, setIsHover] = useState(false);

  const itemRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: itemRef,
    offset: ['0% 100%', '50% 100%'],
  });

  const mappedScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const mappedOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const mappedRotate = useTransform(scrollYProgress, [0, 1], [20, 0]);

  const animateValue = {
    scale: useSpring(mappedScale, springOption),
    rotate: useSpring(mappedRotate, springOption),
    opacity: useSpring(mappedOpacity, springOption),
  };

  return (
    <li className='project__item' ref={itemRef}>
      <a
        href={props.link}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <motion.div
          className='project__item-img-container'
          style={{
            scale: animateValue.scale,
            opacity: animateValue.opacity,
            rotateX: animateValue.rotate,
          }}
        >
          <Image src={props.thumb} alt={`${props.title} 이미지`} fill />
          <motion.img
            className='project__item-img--blur'
            initial={{ opacity: 0 }}
            animate={isHover ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
            src={props.thumb}
            alt={`${props.title} 이미지`}
          />
        </motion.div>
        <div className='project__item-text-container glassbox'>
          <h3 className='project__item-title'>{props.title}</h3>
          <p className='project__item-desc'>{props.desc}</p>
          {props.tags && (
            <ul className='project__item-tag-list'>
              {props.tags.map((el, idx) => (
                <li key={`tag-${el}-${idx}`} className='tag'>
                  # {el}
                </li>
              ))}
            </ul>
          )}
        </div>
      </a>
    </li>
  );
};

export default Project;
