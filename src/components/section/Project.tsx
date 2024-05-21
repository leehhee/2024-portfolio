'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { IProjectItem, project } from '@/data';
import { Section } from '@/components/ui/section';

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
    offset: ['end end', 'start start'],
  });

  const scale = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 1],
    // Into these values:
    [0.5, 1]
  );

  useEffect(() => {
    console.log(scale);
  }, [scale]);

  useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <li className='project__item' ref={itemRef}>
      <a
        href={props.link}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <motion.div
          className='project__item-img-container'
          style={{ scale: scale }}
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
        </div>
      </a>
    </li>
  );
};

export default Project;
