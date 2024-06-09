'use client';
import { gsap, ScrollTrigger, useGSAP } from '@/components/register/gsap';
import SYMBOL from '/public/icon/common/footer_symbol.svg';
import { useRef } from 'react';

const Symbol = () => {
  const symbolRef = useRef<HTMLDivElement>(null);

  // // FUNCTION motion
  useGSAP(() => {
    const svg = symbolRef.current?.querySelector('svg') || null;
    const tl = gsap.timeline({
      yoyo: true,
      paused: true,
      repeatRefresh: true,
    });

    tl.to(symbolRef.current, {
      position: 'sticky',
      bottom: () => '1.6rem',
      duration: 0,
    });

    ScrollTrigger.create({
      trigger: 'body',
      start: () => `${window.innerHeight} top`,
      end: () => `bottom top`,
      invalidateOnRefresh: true,
      markers: true,
      onToggle: (self) => {
        if (self.isActive) {
          tl.play();
        } else {
          tl.reverse(0);
        }
      },
    });
    ScrollTrigger.create({
      trigger: 'footer',
      start: () => `top bottom`,
      end: () => `bottom top`,
      invalidateOnRefresh: true,
      onToggle: (self) => {
        if (self.isActive) {
          gsap.to(symbolRef.current, {
            xPercent: () => 0,
            yPercent: () => 0,
          });
          gsap.to(svg, {
            width: '200%',
            yPercent: () => -100,
            y: () => -16,
            ease: 'circ.inOut',
            duration: 0.3,
          });
        } else {
          gsap.to(symbolRef.current, {
            xPercent: () => 0,
            yPercent: () => 0,
          });
          gsap.to(svg, {
            width: '100%',
            y: () => 0,
            ease: 'circ.inOut',
            duration: 0.3,
          });
        }
      },
    });
  });

  return (
    <div className='symbol' ref={symbolRef}>
      <SYMBOL />
    </div>
  );
};

export default Symbol;
