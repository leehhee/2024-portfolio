'use client';
import Image from 'next/image';
import { Section } from '@/components/ui/section';

const Posts = (props: IPostsProps) => {
  return (
    <Section className='post'>
      <h2 className='post__title'>Recent Posts</h2>
      <ul className='post__list'>
        {props.posts.map((el, idx) => (
          <PostItem {...el} key={`post__${idx}`} />
        ))}
      </ul>
    </Section>
  );
};

const PostItem = (props: TPostsItemProps) => {
  return (
    <li className='post__item'>
      <a
        className='post__item-link'
        href={`${'https://velog.io/@kimbangul/' + props.url_slug}` || '#'}
        target='_blank'
      >
        <div className='post__item-thumb'>
          <Image src={props.thumbnail} fill alt='' />
        </div>
        <div className='post__item-date'>{props.released_at}</div>
        <h3 className='post__item-title'>{props.title}</h3>
      </a>
    </li>
  );
};

export interface IPostsProps {
  posts: TPostsItemProps[];
}

export type TPostsItemProps = {
  id: string;
  title: string;
  short_description: string;
  thumbnail: string;
  url_slug: string;
  released_at: string;
  updated_at: string;
  comments_count: number;
  tags: string[];
  likes: number;
};

export default Posts;
