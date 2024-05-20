import { Contact, Project, Visual } from '@/components/section';

export default function Home() {
  return (
    <main>
      <h1 className='sound-only'>박예림 포트폴리오</h1>
      <Visual />
      <Project />
      <Contact />
    </main>
  );
}
