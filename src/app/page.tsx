import { Project, Visual, Video } from '@/components/section';

export default function Home() {
  return (
    <main>
      <Video />
      <div className='contents-wrap'>
        <Visual />
        <Project />
      </div>
      {/* <Visual />
      <Skill />
      <Project />
      <Contact /> */}
    </main>
  );
}
