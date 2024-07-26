'use client';
import { gsap, ScrollTrigger, useGSAP } from '@/components/register/gsap';
import { Section } from '@/components/ui/section';
import { skill } from '@/components/ui/icon';
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
const Introduce = () => {
  const introduceRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: introduceRef.current,
        start: () => 'top center',
        end: () => 'bottom top',
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (self.isActive) {
            tl.play();
          }
        },
      });

      const tl = gsap.timeline({
        yoyo: true,
        repeatRefresh: true,
        paused: true,
        repeat: 0,
      });

      tl.to('.introduce__title-changer-item', {
        yPercent: () => -100,
        duration: 1.2,
        ease: 'power4.inOut',
      });
      tl.to('.introduce__title-changer-item', {
        yPercent: () => -200,
        duration: 1.2,
        ease: 'power4.inOut',
      });
      tl.to('.introduce__title-changer-item', {
        yPercent: () => 0,
        duration: 1.5,
        ease: 'power4.inOut',
      });
      tl.fromTo(
        '.introduce__desc',
        {
          opacity: 0,
        },
        {
          opacity: 0.4,
          duration: 0.5,
        }
      );
      tl.to('.introduce__icon-item svg', {
        y: () => 0,
        stagger: 0.1,
      });
    },
    { scope: introduceRef }  );

  return (
    <Section className='introduce' dom={introduceRef}>


      <h2 className='introduce__title'>
        <span className='introduce__title-changer' ref={textRef}>
          <span className='introduce__title-changer-item'>Flexible</span>
          <span className='introduce__title-changer-item' aria-hidden='true'>
            Adaptable
          </span>
          <span className='introduce__title-changer-item' aria-hidden='true'>
            APM
          </span>
        </span>
        <br />
        FlowKat
      </h2>


      <div className='introduce__contents'>
        <p className='introduce__desc'>

          FlowKat은 오픈소스 APM의 대표격인 스카우터 기반의 Java 애플리케이션 성능 관리 솔루션입니다.
          스카우터가 가진 강력한 기능들은 사용성이 높은 웹으로 이식하여 사용자 편의와 분석 기능을 더해 완성했습니다.

          <br />
           직관적이고 익숙한 UI 때문이었습니다. APM이라고 하면 개발자는 물론 누구든지 쉽게 접근이 가능하고 확인할 수 있어야 한다고 생각했습니다. 이슈를 신속히 확인하고 공유할 수 있다는 점에서 와탭이 가진 직관적인 대시보드와 익숙한 UI가 매우 강력하기 때문에 선택하게 되었습니다.
        </p>

      </div>




            <Ticker >
            <h3 className='sound-only'>사용 기술스택</h3>
             {tickerData.map((imgSrc, idx) => (
               <li className='ticker__item' key={`ticker__${idx}`}>
                 <img src={imgSrc} alt={`ticker-item-${idx}`} />
               </li>
             ))}

           </Ticker>




    </Section>
  );
};

export default Introduce;
