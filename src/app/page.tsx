import { Project, Visual, Video } from '@/components/section';

async function getPostList(name: string, limit: number) {
  const param = { name: name, limit: limit };
  const res = await fetch(`http://localhost:3000/api/post/list`, {
    method: 'post',
    body: JSON.stringify(param),
  });

  if (!res.ok) {
    throw new Error('데이터 가져오기 실패');
  }

  return await res;
}

export default async function Home() {
  const postData = await getPostList('kimbangul', 3);

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
