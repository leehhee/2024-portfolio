import LinkButton from '@/components/ui/button/Button';

const menu = [
  { text: 'Work', href: '#' },
  { text: 'About', href: '#' },
  { text: 'Contact', href: '#' },
];
const Header = () => {
  return (
    <header className='header'>
      <div className='header__inner'>
        <div className='header__logo-container'>
          <div className='header__logo'>
            <a href='/'>YERIM.e</a>
          </div>
        </div>
        <nav className='nav'>
          <ul className='nav__list'>
            {menu.map((el) => {
              return <LinkButton key={el.text}>{el.text}</LinkButton>;
            })}
          </ul>
        </nav>
        {/* <button className='header__nav'></button> */}
      </div>
    </header>
  );
};

export default Header;
