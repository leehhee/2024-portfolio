import { Social } from '@/components/ui/social';

const currentYear = new Date().getFullYear().toString();

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__inner'>
        <p className='footer__copy'>Park Yerim © {currentYear}</p>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
