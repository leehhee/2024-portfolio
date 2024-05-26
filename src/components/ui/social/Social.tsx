import { social } from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { link } from '@/data';

const socialItem = [
  { link: link.github, icon: social.GITHUB, title: 'github' },
  { link: link.mail, icon: social.MAIL, title: 'mail' },
  { link: link.velog, icon: social.VELOG, title: 'velog' },
];
const Social = () => {
  return (
    <ul className='social'>
      {socialItem.map((el, idx) => {
        return (
          <Button
            className='social__item'
            key={el.title}
            href={el.link}
            target='_blank'
          >
            <span className='social__icon'>{el.icon}</span>{' '}
            <span className='sound-only'>{el.title}</span>
          </Button>
        );
      })}
    </ul>
  );
};

export default Social;
