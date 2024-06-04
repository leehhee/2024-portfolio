import { link } from '@/data';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__inner'>
        <p className='footer__copy'>
          <span className='footer__copy-icon'>©</span>
          Park Ye rim
        </p>
        <ul className='footer__info'>
          <li className='footer__info-item footer__year'>© 2024</li>
          <li className='footer__info-item'>
            <a className='footer__info-link' href={link.mail} target='_blank'>
              highcolor9871@gmail.com
            </a>
          </li>
          <li className='footer__info-item'>
            <a className='footer__info-link' href={link.resume} target='_blank'>
              resume
            </a>
          </li>
          <li className='footer__info-item'>
            <a className='footer__info-link' href={link.velog} target='_blank'>
              Velog
            </a>
          </li>
          <li className='footer__info-item'>
            <a className='footer__info-link' href={link.github} target='_blank'>
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
