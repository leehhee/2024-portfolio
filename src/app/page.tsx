import { Project, Visual } from '@/components/section';
import { skill } from '@/components/ui/icon';

export default function Home() {
  return (
    <main>
      <h1 className='sound-only'>박예림 포트폴리오</h1>
      <Visual />
      <Project />
    </main>
  );
}
