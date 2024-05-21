'use client';
import { easeInOut, motion } from 'framer-motion';
import { skill } from '@/components/ui/icon';
import { Section } from '@/components/ui/section';
import { Ticker } from '@/components/ui/ticker';
import { Badge } from '@/components/ui/button';

const tickerIcon = Object.entries(skill);

const Visual = () => {
  return (
    <Section className='visual' id='visual'>
      <h2 className='sound-only'>비주얼 영역</h2>
      <Badge className='visual__badge' animate>
        <div className='badge__dot'>
          <motion.span
            initial={{ scale: 1 }}
            animate={{ scale: 2.5 }}
            transition={{ duration: 2, repeat: Infinity }}
            className='badge__dot-bg'
          ></motion.span>
        </div>
        Available for Work
      </Badge>
      <p className='visual__text'>
        <span className='light'>Hello, </span>
        <br />
        I'm a Front-end
        <br />
        Developer
        <br />
        with flexible. <br />
      </p>
      <Ticker className='visual__ticker' duration={30}>
        {tickerIcon.map((el, idx) => {
          return (
            <div className='skill-icon' key={el[0]}>
              {el[1]}
            </div>
          );
        })}
      </Ticker>
    </Section>
  );
};

export default Visual;
