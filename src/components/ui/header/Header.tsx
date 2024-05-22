'use client';
import LinkButton from '@/components/ui/button/Button';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useState } from 'react';

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
      <motion.header
        className='header'
        style={{ scale: scale.normal, opacity: opacity.normal }}
      >
        <div className='header__inner'>
          <div className='header__logo-container'>
            <div className='header__logo'>
              <a href='/'>YERIM.e</a>
            </div>
          </div>
          <nav className='nav pc-only'>
            <ul className='nav__list'>
              {menu.map((el) => {
                return (
                  <LinkButton
                    key={el.text}
                    href={el.href}
                    onClick={onScrollBody(el.href)}
                  >
                    {el.text}
                  </LinkButton>
                );
              })}
            </ul>
          </nav>
          <LinkButton
            type='button'
            className='nav__button'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className='nav__bar-inner'>
              <motion.span
                className='nav__bar'
                initial={{ width: '100%' }}
                animate={isMenuOpen ? { width: 0 } : { width: '100%' }}
              ></motion.span>
              <motion.span
                className='nav__bar'
                initial={{ rotate: 0 }}
                animate={isMenuOpen ? { rotate: 45 } : { rotate: 0 }}
              ></motion.span>
              <motion.span
                className='nav__bar'
                initial={{ rotate: 0 }}
                animate={
                  isMenuOpen
                    ? { rotate: -45, top: 'calc(50% - 0.1rem)' }
                    : { rotate: 0 }
                }
              ></motion.span>
            </div>
          </LinkButton>
        </div>
        <AnimatePresence initial={false} mode='wait'>
          {isMenuOpen && (
            <motion.nav
              className='nav tb-only'
              key='mb-nav'
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: 'auto',
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
            >
              <ul className='nav__list'>
                {menu.map((el) => {
                  return (
                    <li key={el.text}>
                      <a
                        className='nav__list-item'
                        href={el.href}
                        onClick={onScrollBody(el.href)}
                      >
                        {el.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>
      <motion.div
        className='top-btn'
        onClick={onScrollBody(0)}
        style={{
          scale: scale.reverse,
          opacity: opacity.reverse,
          y: top.reverse,
        }}
      >
        <LinkButton type='button'>TOP</LinkButton>
      </motion.div>
    </>
  );
};

export default Header;
