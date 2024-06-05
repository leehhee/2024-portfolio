import { Section } from '@/components/ui/section';
const Introduce = () => {
  return (
    <Section className='introduce'>
      {/* autoheight={true} */}
      <h2 className='introduce__title'>
        Honest
        <br />
        Creativity
      </h2>
      <p className='introduce__desc'>
        Studio Kanda is a digital-first design studio—mixing brand and digital
        to help bring your business to life in new and unexpected ways.
      </p>
    </Section>
  );
};

export default Introduce;
