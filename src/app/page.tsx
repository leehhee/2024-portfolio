import { skill } from '@/components/ui/icon';
import { Section } from '@/components/ui/section';
import { Ticker } from '@/components/ui/ticker';

const tickerIcon = Object.entries(skill);

export default function Home() {
  return (
    <main>
      <h1 className='sound-only'>박예림 포트폴리오</h1>
      <Section className='visual'>
        <h2 className='sound-only'>비주얼 영역</h2>
        <p className='visual__text'>
          <span className='light'>Hello, </span>
          <br />
          I'm a Front-end
          <br />
          Developer
          <br />
          with flexible. <br />
        </p>
        <Ticker className='visual__ticker' duration={30}>
          {tickerIcon.map((el, idx) => {
            return (
              <div className='skill-icon' key={el[0]}>
                {el[1]}
              </div>
            );
          })}
        </Ticker>
      </Section>
    </main>
  );
}
