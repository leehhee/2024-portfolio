'use client';
import LinkButton from '@/components/ui/button/Button';
import { useState } from 'react';

const menu = [
  { text: 'Work', href: '#' },
  { text: 'About', href: '#' },
  { text: 'Contact', href: '#' },
];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  return (
    <header className='header'>
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
        <LinkButton type='button' className='nav__button'>
          <span className='nav__bar'></span>
          <span className='nav__bar'></span>
          <span className='nav__bar'></span>
        </LinkButton>
      </div>
      {isMenuOpen && (
        <nav className='nav tb-only'>
          <ul className='nav__list'>
            {menu.map((el) => {
              return (
                <a className='nav__list-item' key={el.text} href='#'>
                  {el.text}
                </a>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
