'use client';
import LOGO from '/public/icon/flowkat logo.svg';
import { useRef } from 'react';
import { link } from '@/data';
import { Reference, IReference } from '@/data';

import Ticker from '@/components/ui/ticker/ticker';


const tickerData = [
  "/icon/ticker/dcco.png",
  "/icon/ticker/hanbat.png",
  "/icon/ticker/IBM.png",
  "/icon/ticker/iworks.png",
  "/icon/ticker/pro.png",
  "/icon/ticker/Veritas.png"
];

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  //const baseProjectNum = 6;
  //const flagshipProject = project.slice(0, baseProjectNum);


  return (
    <>
      <footer className='footer' ref={footerRef} id='contact'>
        <div className='footer__inner'>
          <p className='footer__copy'>
            <span className='footer__copy-icon'><LOGO className='logo' /></span>
          </p>
          <ul className='footer__info'>
            <li className='footer__info-item footer__year'>© 2024</li>
            <li className='footer__info-item'>
              <a className='footer__info-link' href={link.manual} target='_blank'>
                MANUAL
              </a>
            </li>
            <li className='footer__info-item'>
              <a
                className='footer__info-link'
                href={link.instgram}
                target='_blank'
              >
                instagram
              </a>
            </li>
            <li className='footer__info-item'>
              <a
                className='footer__info-link'
                href={link.velog}
                target='_blank'
              >
                techblog
              </a>
            </li>
            <li className='footer__info-item'>
              <a
                className='footer__info-link'
                href={link.github}
                target='_blank'
              >
                Github
              </a>
            </li>
          </ul>
        </div>



       <Ticker>
         {tickerData.map((imgSrc, idx) => (
           <li className='ticker__item' key={`ticker__${idx}`}>
             <img src={imgSrc} alt={`ticker-item-${idx}`} />
           </li>
         ))}
       </Ticker>

      </footer>
    </>
  );
};


export default Footer;
