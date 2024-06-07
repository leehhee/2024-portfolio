'use client';
import { gsap, ScrollTrigger, useGSAP } from '@/components/register/gsap';
import SYMBOL from '/public/icon/common/footer_symbol.svg';
import { useRef } from 'react';

const Symbol = () => {
  const symbolRef = useRef<HTMLDivElement>(null);

  // // FUNCTION motion
  useGSAP(() => {
    const footer = document.querySelector('body');
    const tl = gsap.timeline({
      yoyo: true,
      paused: true,
      repeatRefresh: true,
    });
    const footerHeight = () => footer?.offsetHeight || 0;
    console.log(footerHeight());

    // tl.set(symbolRef.current, {
    //   position: 'fixed',
    //   bottom: () => '2.4rem',
    // });

    tl.to(symbolRef.current, {
      position: 'sticky',
      bottom: () => '1.6rem',
      //scale: () => 2,
      // width: () => '10vw',
      // y: 20,
    });

    ScrollTrigger.create({
      // trigger: '.contents-wrap',
      trigger: 'body',
      start: () => `${window.innerHeight} top`,
      end: () => `bottom top`,
      invalidateOnRefresh: true,
      markers: true,
      onToggle: (self) => {
        console.log(self.isActive);
        if (self.isActive) {
          tl.play();
        } else {
          tl.reverse(0);
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
