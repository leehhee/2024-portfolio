const Header = () => {
  return (
    <header className='Header'>
      <div className='Header__inner'>
        <div className='Header__logo-container'>
          <div className='Header__logo'>
            <a href='/'>YERIM.e</a>
          </div>
        </div>
        <nav className='Header__nav'>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
