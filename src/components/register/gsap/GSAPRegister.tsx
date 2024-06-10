'use client';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PropsWithChildren } from 'react';

const GSAPRegister: React.FC<PropsWithChildren> = (props) => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  return <>{props.children}</>;
};

export default GSAPRegister;
