import { Contact, Project, Skill, Visual, Video } from '@/components/section';

export default function Home() {
  return (
    <main>
      <Video />
      <div className='contents-wrap'>
        <Visual />
      </div>
      {/* <Visual />
      <Skill />
      <Project />
      <Contact /> */}
    </main>
  );
}
