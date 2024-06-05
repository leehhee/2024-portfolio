import { Section } from '@/components/ui/section';
import { skill } from '@/components/ui/icon';

const skillData = [
  { icon: skill.HTML, name: 'HTML' },
  { icon: skill.CSS, name: 'CSS' },
  { icon: skill.SASS, name: 'SASS/SCSS' },
  { icon: skill.SC, name: 'Styled-components' },
  { icon: skill.JAVASCRIPT, name: 'Javascript(ES6+)' },
  { icon: skill.TYPESCRIPT, name: 'Typescript' },
  { icon: skill.JQUERY, name: 'JQuery' },
  { icon: skill.REACT, name: 'React.js' },
  { icon: skill.NEXT, name: 'Next.js' },
  { icon: skill.GIT, name: 'Git' },
  // { icon: skill.PHOTOSHOP, name: 'Photoshop' },
  // { icon: skill.FIGMA, name: 'Figma' },
];

const Introduce = () => {
  return (
    <Section className='introduce'>
      {/* autoheight={true} */}
      <h2 className='introduce__title'>
        Honest
        <br />
        Creativity
      </h2>
      <div className='introduce__contents'>
        <p className='introduce__desc'>
          Studio Kanda is a digital-first design studio—mixing brand and digital
          to help bring your business to life in new and unexpected ways.
        </p>
        <h3 className='sound-only'>사용 기술스택</h3>
        <ul className='introduce__icon-list'>
          {skillData.map((el) => (
            <li key={el.name} className='introduce__icon-item'>
              {el.icon}
              <span className='sound-only'>{el.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Introduce;
