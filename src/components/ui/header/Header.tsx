'use client';
import { gsap, useGSAP } from '@/components/register/gsap';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import LOGO from '/public/icon/logo.svg';
import { LinkArrow, common } from '@/components/ui/icon';
import { link } from '@/data';
import { useResize } from '@/hooks/useResize';
import useTime, { getFormattedTime } from '@/hooks/useTime';

const menu = [
  { text: 'Project', href: '#project' },
  { text: 'About', href: '#skill' },
  { text: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const size = useResize();
  const time = useTime();

  useEffect(() => {
    if (!size.width) return;
    if (isMenuOpen && size.width > 990) {
      setIsMenuOpen(false);
    }
  }, [size.width, isMenuOpen]);

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
            <div className='header__clock pc-only'>
              Seoul, Korea {getFormattedTime(time.hour)}
              <span className='header__clock-spliter'>:</span>
              {getFormattedTime(time.min)} {time.amPm}
            </div>
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
  );
};

const Menu = (props: IHeaderMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const menuFixerAnimation = {
    initial: { backdropFilter: 'blur(0)' },
    animate: { backdropFilter: 'blur(24px)' },
    exit: { backdropFilter: 'blur(0)' },
  };
  const menuAnimation = {
    initial: { height: '0', backDropfilter: 'blur(0)' },
    animate: {
      height: '100%',
      backDropfilter: 'blur(4rem)',
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    exit: {
      height: '0',
      backDropfilter: 'blur(0)',
      transition: { delay: 0.5, duration: 0.5, ease: 'easeInOut' },
    },
  };

  useGSAP(
    () => {
      if (!props.isOpen) return;
      const tl = gsap.timeline({
        yoyo: true,
        paused: true,
      });
      const link = gsap.utils.toArray('.menu__item-link');

      tl.fromTo(
        link,
        { yPercent: 100 },
        { yPercent: 0, stagger: 0.05, duration: 0.3 },
        'fade-in'
      );
      tl.fromTo(
        '.menu__info-title-inner',
        { yPercent: 200 },
        { yPercent: 0 },
        'fade-in'
      );
      tl.fromTo(
        '.menu__info-item a',
        { yPercent: 100 },
        { yPercent: 0, stagger: 0.05 },
        'fade-in'
      );

      if (props.isOpen) {
        tl.play();
      } else {
        tl.reverse(0);
      }
    },
    { scope: menuRef, dependencies: [props.isOpen] }
  );

  return (
    <>
      <AnimatePresence initial={false} mode='wait'>
        {props.isOpen && (
          <motion.div
            className='menu__fixer'
            variants={menuFixerAnimation}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            <motion.div
              className='menu'
              variants={menuAnimation}
              initial='initial'
              animate='animate'
              exit='exit'
              ref={menuRef}
            >
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
                    <div className='menu__info-title'>
                      <span className='menu__info-title-inner'>Connect</span>
                    </div>
                    <ul className='menu__info-list'>
                      <li className='menu__info-item'>
                        <a href={link.mail}>highcolor9871@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                  <div className='menu__info-right'>
                    <ul className='menu__info-list'>
                      <li className='menu__info-item'>
                        <a href={link.resume} target='_blank'>
                          Resume <LinkArrow />
                        </a>
                      </li>
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

interface IHeaderMenuProps {
  isOpen: boolean;
}

export default Header;
