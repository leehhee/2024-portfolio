import { social } from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const socialItem = [
  { link: '#', icon: social.GITHUB, title: 'github' },
  { link: '#', icon: social.MAIL, title: 'mail' },
  { link: '#', icon: social.VELOG, title: 'velog' },
];
const Social = () => {
  return (
    <ul className='social'>
      {socialItem.map((el, idx) => {
        return (
          // <li className='social__item' key={el.title}>
          //   <a className='social__icon' href={el.link}>
          //     {el.icon}
          //     <span className='sound-only'>{el.title}</span>
          //   </a>
          // </li>
          <Button className='social__item' key={el.title} href={el.link}>
            <span className='social__icon'>{el.icon}</span> <span className='sound-only'>{el.title}</span>
          </Button>
        );
      })}
    </ul>
  );
};

export default Social;
