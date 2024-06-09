'use client';
import { gsap, useGSAP } from '@/components/register/gsap';
import useThrottle from '@/hooks/useThrottle';
import { useEffect, useRef, useState } from 'react';

const Cursor = () => {
  const bodyRef = useRef<HTMLBodyElement>();
  const cursorRef = useRef<HTMLDivElement>(null);
  const xTo = useRef<gsap.QuickToFunc>();
  const yTo = useRef<gsap.QuickToFunc>();
  const [cursorState, setCursorState] = useState('auto');

  useEffect(() => {
    xTo.current = gsap.quickTo(cursorRef.current, 'x', {
      duration: 0.6,
      ease: 'power3',
    });

    yTo.current = gsap.quickTo(cursorRef.current, 'y', {
      duration: 0.6,
      ease: 'power3',
    });
  }, []);

  const onMoveMouse = (e: MouseEvent) => {
    if (!xTo.current || !yTo.current) return;
    if (e.target && e.target instanceof HTMLElement) {
      const currentCursorState = window.getComputedStyle(e.target)['cursor'];
      setCursorState(currentCursorState);
    }
    xTo.current(e.clientX);
    yTo.current(e.clientY);
  };

  useGSAP(
    () => {
      if (cursorState === 'pointer') {
        gsap.to(cursorRef.current, {
          scale: 5,
          duration: 0.3,
        });
      } else {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.3,
        });
      }
    },
    { dependencies: [cursorState] }
  );

  const throttleOnMove = useThrottle<[MouseEvent]>(onMoveMouse, 30);

  useEffect(() => {
    bodyRef.current = document.querySelector('body') || undefined;

    if (bodyRef.current) {
      bodyRef.current.addEventListener('mousemove', throttleOnMove);
    }

    return () => {
      if (bodyRef.current) {
        bodyRef.current.removeEventListener('mousemove', throttleOnMove);
      }
    };
  }, []);

  return <div className='cursor' ref={cursorRef}></div>;
};

export default Cursor;
