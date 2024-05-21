'use client';
import LinkButton from '@/components/ui/button/Button';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { useState } from 'react';

const menu = [
  { text: 'Work', href: '#' },
  { text: 'About', href: '#' },
  { text: 'Contact', href: '#' },
];

const Header = () => {
  const { scrollYProgress } = useScroll({
    offset: ['0', '50vh'],
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <motion.header className='header' style={{ scale: scrollYProgress }}>
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
                <LinkButton key={el.text} href='#'>
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
                    <a className='nav__list-item' href='#'>
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
  );
};

export default Header;
