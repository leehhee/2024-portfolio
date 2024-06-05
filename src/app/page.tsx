import { Project, Visual, Video, Posts, Introduce } from '@/components/section';
import { IPostsProps } from '@/components/section/Posts';

const getPostList = async (
  name: string,
  limit: number
): Promise<IPostsProps> => {
  const param = { name: name, limit: limit };
  const res = await fetch(`http://localhost:3000/api/post/list`, {
    method: 'post',
    body: JSON.stringify(param),
  });

  if (!res.ok) {
    throw new Error('data fetch failed');
  }

  return await res.json();
};

export default async function Home() {
  const postData = await getPostList('kimbangul', 3);
  console.log(postData);

  return (
    <main>
      <Video />
      <div className='contents-wrap'>
        <Visual />
        <Introduce />
        <Project />
        <Posts posts={postData.posts} />
      </div>
    </main>
  );
}
