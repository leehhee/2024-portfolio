'use client';
import LinkButton from '@/components/ui/button/Button';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useState } from 'react';
import LOGO from '/public/icon/logo.svg';
import { LinkArrow, common } from '@/components/ui/icon';
import { link } from '@/data';

const menu = [
  { text: 'Project', href: '#project' },
  { text: 'About', href: '#skill' },
  { text: 'Contact', href: '#contact' },
];

gsap.registerPlugin(useGSAP, ScrollToPlugin);

const onScrollBody = (href: string | number) => (e: React.MouseEvent) => {
  e.preventDefault();
  gsap.to(window, 0.3, { scrollTo: href });
};

const Header = () => {
  const { scrollYProgress } = useScroll({
    offset: ['0', '50vh'],
  });
  const [isDisable, setIsDisable] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    const disable = value >= 0.5 ? true : false;
    setIsDisable(disable);
  });

  const opacity = {
    normal: useTransform(scrollYProgress, [0, 1], [1, 0]),
    reverse: useTransform(scrollYProgress, [0, 1], [0, 1]),
  };
  const scale = {
    normal: useTransform(scrollYProgress, [0, 1], [1, 0.8]),
    reverse: useTransform(scrollYProgress, [0, 1], [0.7, 1]),
  };

  const top = {
    reverse: useTransform(scrollYProgress, [0, 1], [100, 0]),
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className='header'>
        <div className='header__inner'>
          <div className='header__logo'>
            <a href='/' title='홈으로'>
              <h1 className='sound-only'>YERIM.e</h1>
              <LOGO className='logo' />
            </a>
          </div>
          <nav className='header__nav'>
            <div className='header__clock pc-only'>Los Angeles, CA 4:45 PM</div>
            <ul className='header__nav-list pc-only' role='menu'>
              <li className='header__nav-item'>
                <a role='menuitem' className='header__nav-item-link' href='#'>
                  Work
                </a>
              </li>
              <li className='header__nav-item'>
                <a role='menuitem' className='header__nav-item-link' href='#'>
                  Info
                </a>
              </li>
            </ul>
            <button
              className='header__nav-opener tb-only'
              aria-haspopup='true'
              aria-controls='menu'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className='header__nav-opener-title'>Menu</div>
              <div
                className='header__nav-opener-icon'
                data-isopen={isMenuOpen}
              ></div>
            </button>
          </nav>
        </div>
        <Menu isOpen={isMenuOpen} />
      </header>
    </>
    // <>
    //   <motion.header
    //     className='header'
    //     style={{
    //       opacity: opacity.normal,
    //       pointerEvents: isDisable ? 'none' : 'auto',
    //     }}
    //   >
    //     <motion.div className='header__inner' style={{ scale: scale.normal }}>
    //       <div className='header__logo-container'>
    //         <div className='header__logo'>
    //           <a href='/' title='홈으로'>
    //             <LOGO className='logo' />
    //             <span className='sound-only'>YERIM.e</span>
    //           </a>
    //         </div>
    //       </div>
    //       <nav className='nav pc-only'>
    //         <ul className='nav__list'>
    //           {menu.map((el) => {
    //             return (
    //               <LinkButton
    //                 key={el.text}
    //                 href={el.href}
    //                 onClick={onScrollBody(el.href)}
    //               >
    //                 {el.text}
    //               </LinkButton>
    //             );
    //           })}
    //         </ul>
    //       </nav>
    //       <LinkButton
    //         type='button'
    //         className='nav__button'
    //         onClick={() => setIsMenuOpen(!isMenuOpen)}
    //       >
    //         <div className='nav__bar-inner'>
    //           <motion.span
    //             className='nav__bar'
    //             initial={{ width: '100%' }}
    //             animate={isMenuOpen ? { width: 0 } : { width: '100%' }}
    //           ></motion.span>
    //           <motion.span
    //             className='nav__bar'
    //             initial={{ rotate: 0 }}
    //             animate={isMenuOpen ? { rotate: 45 } : { rotate: 0 }}
    //           ></motion.span>
    //           <motion.span
    //             className='nav__bar'
    //             initial={{ rotate: 0 }}
    //             animate={
    //               isMenuOpen
    //                 ? { rotate: -45, top: 'calc(50% - 0.1rem)' }
    //                 : { rotate: 0 }
    //             }
    //           ></motion.span>
    //         </div>
    //       </LinkButton>
    //     </motion.div>
    //     <AnimatePresence initial={false} mode='wait'>
    //       {isMenuOpen && (
    //         <motion.nav
    //           className='nav tb-only'
    //           key='mb-nav'
    //           initial={{
    //             height: 0,
    //             opacity: 0,
    //           }}
    //           animate={{
    //             height: 'auto',
    //             opacity: 1,
    //           }}
    //           exit={{
    //             height: 0,
    //             opacity: 0,
    //           }}
    //         >
    //           <ul className='nav__list'>
    //             {menu.map((el) => {
    //               return (
    //                 <li key={el.text}>
    //                   <a
    //                     className='nav__list-item'
    //                     href={el.href}
    //                     onClick={onScrollBody(el.href)}
    //                   >
    //                     {el.text}
    //                   </a>
    //                 </li>
    //               );
    //             })}
    //           </ul>
    //         </motion.nav>
    //       )}
    //     </AnimatePresence>
    //   </motion.header>
    //   <motion.div
    //     className='top-btn'
    //     onClick={onScrollBody(0)}
    //     style={{
    //       scale: scale.reverse,
    //       opacity: opacity.reverse,
    //       y: top.reverse,
    //     }}
    //   >
    //     <LinkButton type='button'>TOP</LinkButton>
    //   </motion.div>
    // </>
  );
};

const Menu = (props: IHeaderMenuProps) => {
  return (
    <>
      <AnimatePresence initial={false} mode='wait'>
        {props.isOpen && (
          <div className='menu'>
            <div className='menu__inner'>
              <ul className='menu__list' role='menu'>
                <li className='menu__item'>
                  <a className='menu__item-link' href='#' role='menuitem'>
                    <span className='menu__item-link-text'>Info</span>
                    <span className='menu__item-arrow'>
                      {common.ARROW_RIGHT}
                    </span>
                  </a>
                </li>
                <li className='menu__item'>
                  <a className='menu__item-link' href='#' role='menuitem'>
                    <span className='menu__item-link-text'>Work</span>
                    <span className='menu__item-arrow'>
                      {common.ARROW_RIGHT}
                    </span>
                  </a>
                </li>
              </ul>
              <div className='menu__info'>
                <div className='menu__info-left'>
                  <div className='menu__info-title'>Connect</div>
                  <ul className='menu__info-list'>
                    <li className='menu__info-item'>
                      <a href={link.mail}>highcolor_12@naver.com</a>
                    </li>
                  </ul>
                </div>
                <div className='menu__info-right'>
                  <ul className='menu__info-list'>
                    <li className='menu__info-item'>
                      <a href={link.github} target='_blank'>
                        Github <LinkArrow />
                      </a>
                    </li>
                    <li className='menu__info-item'>
                      <a href={link.velog} target='_blank'>
                        Velog <LinkArrow />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className='menu__category'></ul>
              <p className='menu__copy'>Copyright ©2024 | Park Ye rim</p>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

interface IHeaderMenuProps {
  isOpen: boolean;
}

export default Header;
