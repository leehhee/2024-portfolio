const Header = () => {
  return (
    <header className='header'>
      <div className='header__inner'>
        <div className='header__logo-container'>
          <div className='header__logo'>
            <a href='/'>YERIM.e</a>
          </div>
        </div>
        {/* <nav className='header__nav'>
          <ul>
            <li>
              <a href='#'>Work</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav> */}
        <button className='header__nav'></button>
      </div>
    </header>
  );
};

export default Header;
