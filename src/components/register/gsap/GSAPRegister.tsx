'use client';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PropsWithChildren, useEffect } from 'react';

const GSAPRegister: React.FC<PropsWithChildren> = (props) => {
  // useEffect(() => {
  //   const body: HTMLDivElement | null =
  //     document.querySelector('.contents-wrap');
  //   if (!body) return;

  //   const smoothScroll = new LocomotiveScroll({
  //     el: body,
  //     smooth: true,
  //   });

  //   smoothScroll.on('scroll', ScrollTrigger.update);

  //   // ScrollTrigger.scrollerProxy('.smooth-scroll', {
  //   //   scrollTop(value) {
  //   //     return arguments.length
  //   //       ? smoothScroll.scrollTo(value, 0, 0)
  //   //       : smoothScroll.scroll.instance.scroll.y;
  //   //   }, // 세로로만 스크롤하므로 Y축만 설정
  //   //   getBoundingClientRect() {
  //   //     return {
  //   //       top: 0,
  //   //       left: 0,
  //   //       width: window.innerWidth,
  //   //       height: window.innerHeight,
  //   //     };
  //   //   },
  //   // });
  //   ScrollTrigger.addEventListener('refresh', () => {
  //     smoothScroll.update();
  //   });
  //   ScrollTrigger.refresh();
  // }, []);

  gsap.registerPlugin(useGSAP, ScrollTrigger);
  return <>{props.children}</>;
};

export default GSAPRegister;
