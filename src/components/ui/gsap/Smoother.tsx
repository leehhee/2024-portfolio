'use client';
import React, { ReactNode, useLayoutEffect, useRef } from 'react';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const Smoother = (props: ISmootherProps) => {
  const wrapper = useRef(null);
  const smoother = useRef<ScrollSmoother | null>(null);

  useGSAP(
    () => {
      // create the smooth scroller FIRST!
      smoother.current = ScrollSmoother.create({
        smooth: 2, // seconds it takes to "catch up" to native scroll position
        effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      });
      ScrollTrigger.create({
        trigger: '.box-c',
        pin: true,
        start: 'center center',
        end: '+=300',
        markers: true,
      });
    },
    { scope: wrapper }
  );

  return (
    <div className='smoother' ref={wrapper}>
      {props.children}
    </div>
  );
};

interface ISmootherProps {
  children: ReactNode;
}

export default Smoother;
