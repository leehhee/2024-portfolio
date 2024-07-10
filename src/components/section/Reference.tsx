'use client';
import { gsap, ScrollTrigger, useGSAP } from '@/components/register/gsap';
import { useRef } from 'react';


import Ticker from '@/components/ui/ticker/ticker';


const tickerData = [
  "/icon/ticker/dcco.png",
  "/icon/ticker/hanbat.png",
  "/icon/ticker/IBM.png",
  "/icon/ticker/iworks.png",
  "/icon/ticker/pro.png",
  "/icon/ticker/Veritas.png"
];

const Reference = () => {
  const referenceRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);


  return (
     <>
       <Ticker>
         <ul className='ticker__data'>
           {tickerData.map((imgSrc, idx) => (
             <li className='ticker__item' key={`ticker__${idx}`}>
               <img src={imgSrc} alt={`ticker-item-${idx}`} />
             </li>
           ))}
         </ul>
       </Ticker>
     </>
   );
};


export default Reference;
