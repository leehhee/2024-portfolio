import { Section } from '@/components/ui/section';

const Project = () => {
  return (
    <Section className='project'>
      <h2 className='project__title'>Project</h2>
      <ul className='project__list'>
        <li className='project__item'>
          <a href='#'>
            <div className='project__item-img-container'></div>
            <div className='project__item-text-container'>
              <h3 className='project__item-title'>Title</h3>
              <p className='project__item-desc'>desc</p>
            </div>
          </a>
        </li>
        <li className='project__item'>
          <a href='#'>
            <div className='project__item-img-container'></div>
            <div className='project__item-text-container'>
              <h3 className='project__item-title'>Title</h3>
              <p className='project__item-desc'>desc</p>
            </div>
          </a>
        </li>
        <li className='project__item'>
          <a href='#'>
            <div className='project__item-img-container'></div>
            <div className='project__item-text-container'>
              <h3 className='project__item-title'>Title</h3>
              <p className='project__item-desc'>desc</p>
            </div>
          </a>
        </li>
      </ul>
    </Section>
  );
};

export default Project;
