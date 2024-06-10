'use client';
import { ScrollTrigger, gsap } from '@/components/register';
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';

const RenisScroll = () => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 700);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  return <></>;
};
export default RenisScroll;
