import { Contact, Project, Skill, Visual } from '@/components/section';
import { ScrollSmoother } from '@/components/ui/gsap';

export default function Home() {
  return (
    <main>
      <h1 className='sound-only'>박예림 포트폴리오</h1>
      <Visual />
      <Skill />
      <Project />
      <Contact />
    </main>
  );
}
