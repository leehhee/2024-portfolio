import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/button';
import { skill } from '@/components/ui/icon';
import { ReactNode } from 'react';

const Skill = () => {
  return (
    <Section className='skill' title='Skill'>
      <div className='skill__text-container'>
        <p className='skill__text'>
          견고한 마크업을 바탕으로, 서비스에 멋진 UI와 인터랙션을 구현하고 문제를 해결하여 사용자의 니즈를 충족시키는 것에서 보람을 느낍니다. <br />
          기억에 남아 오래 사용하고 싶은 플랫폼을 만드는 것, 그리고 개발을 통해 더 많은 사람들의 문제를 해결하는 것이 목표입니다.
        </p>
      </div>
      <div className='skill__bg'>
        <ul className='skill__list'>
          <SkillItem icon={skill.JAVASCRIPT} title='타이틀' desc='데스크' />
          <li className='skill__item glassbox'>
            <div className='skill__item-title-container'>
              <Badge className='skill__icon'>
                <span className='skill__icon-inner'>{skill.HTML}</span>
              </Badge>
              <h3 className='skill__item-title'>기술 제목</h3>
            </div>
            <p className='skill__item-desc'>
              페이지 구조와 태그의 의미를 고려한 시맨틱 마크업을 지향하며 웹 표준과 웹 접근성에 대해 이해하고 있습니다. <br />
              디자인 시안을 빠르게 웹에 구현해 낼 수 있으며 다양한 디바이스를 대응하는 반응형 웹 퍼블리싱이 가능합니다.
            </p>
          </li>
          <li className='skill__item glassbox'>
            페이지 구조와 태그의 의미를 고려한 시맨틱 마크업을 지향하며 웹 표준과 웹 접근성에 대해 이해하고 있습니다. <br />
            디자인 시안을 빠르게 웹에 구현해 낼 수 있으며 다양한 디바이스를 대응하는 반응형 웹 퍼블리싱이 가능합니다.
          </li>
        </ul>
      </div>
    </Section>
  );
};

const SkillItem = (props: ISkillItemProps) => {
  return (
    <li className='skill__item glassbox'>
      <div className='skill__item-title-container'>
        <Badge className='skill__icon'>
          <span className='skill__icon-inner'>{props.icon}</span>
        </Badge>
        <h3 className='skill__item-title'>{props.title}</h3>
      </div>
      <p className='skill__item-desc'>{props.desc}</p>
    </li>
  );
};

interface ISkillItemProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

export default Skill;
