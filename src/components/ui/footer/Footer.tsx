const currentYear = new Date().getFullYear().toString();

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__inner'>
        <p className='footer__copy'>ParkYeRim © {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
