import { social } from '@/components/ui/icon';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <Section className='contact'>
      <h2 className='sound-only'>contact</h2>
      <p className='contact__text'>
        <span className='light'>Let's</span>
        <br /> work
        <br /> together
      </p>
      <div className='contact__button-container'>
        <Button className='contact__button' href='#'>
          <span className='icon'>{social.MAIL}</span>
          highcolor_12@g.hongik.ac.kr
        </Button>
        <Button className='contact__button' href='#'>
          <span className='icon'>{social.RESUME}</span>
          Get resume
        </Button>
      </div>
    </Section>
  );
};

export default Contact;
