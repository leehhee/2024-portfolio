'use client';
import { gsap, ScrollTrigger, useGSAP } from '@/components/register/gsap';
import { useRef } from 'react';
import { link } from '@/data';
import Ticker from '@/components/ui/ticker/Ticker';
import SYMBOL from '/public/icon/common/footer_symbol.svg';

const tickerData = ['Web Publisher', 'Front-end Developer', 'UI Developer'];

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const symbolRef = useRef<HTMLDivElement>(null);

  // // FUNCTION motion
  // useGSAP(
  //   () => {
  //     const tl = gsap.timeline({
  //       yoyo: true,
  //       paused: true,
  //       repeatRefresh: true,
  //     });
  //     const footerHeight = () => footerRef.current?.offsetHeight || 0;
  //     console.log(footerHeight());

  //     tl.set(symbolRef.current, {
  //       position: 'absolute',
  //       bottom: () => 'calc(100% + 3.2rem)',
  //     });

  //     tl.to(symbolRef.current, {
  //       position: 'absolute',
  //       bottom: () => 'calc(100% + 1.6rem)',
  //       //scale: () => 2,
  //       width: () => '10vw',
  //       // y: 20,
  //     });

  //     ScrollTrigger.create({
  //       trigger: footerRef.current,
  //       start: () => 'top bottom',
  //       end: () => `bottom top`,
  //       invalidateOnRefresh: true,
  //       onToggle: (self) => {
  //         console.log(self.isActive);
  //         // if (self.isActive) {
  //         //   tl.play();
  //         // } else {
  //         //   tl.reverse(0);
  //         // }
  //       },
  //     });
  //   },
  //   { scope: footerRef }
  // );

  return (
    <>
      {/* <div className='footer__symbol' ref={symbolRef}>
        <SYMBOL />
      </div> */}
      <footer className='footer' ref={footerRef}>
        <div className='footer__inner'>
          <p className='footer__copy'>
            <span className='footer__copy-icon'>©</span>
            Park Ye rim
          </p>
          <ul className='footer__info'>
            <li className='footer__info-item footer__year'>© 2024</li>
            <li className='footer__info-item'>
              <a className='footer__info-link' href={link.mail} target='_blank'>
                highcolor9871@gmail.com
              </a>
            </li>
            <li className='footer__info-item'>
              <a
                className='footer__info-link'
                href={link.resume}
                target='_blank'
              >
                resume
              </a>
            </li>
            <li className='footer__info-item'>
              <a
                className='footer__info-link'
                href={link.velog}
                target='_blank'
              >
                Velog
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
          {tickerData.map((el, idx) => (
            <li className='ticker__item' key={`ticker__${idx}`}>
              {el}
            </li>
          ))}
        </Ticker>
      </footer>
    </>
  );
};

export default Footer;
