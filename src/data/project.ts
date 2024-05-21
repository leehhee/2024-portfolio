import PROJECT01 from '/public/image/project01.png';
import PROJECT02 from '/public/image/project02.jpg';

export const project: TProject = [
  {
    key: 0,
    title: '테스트 프로젝트',
    link: '#',
    desc: '테스트 요약정보',
    thumb: PROJECT01.src,
    category: '테스트 카테고리',
    tags: ['tag1', 'tag2'],
  },
  {
    key: 1,
    title: '테스트 프로젝트2',
    link: '#',
    desc: '테스트 요약정보',
    thumb: PROJECT02.src,
    category: '테스트 카테고리',
    tags: ['tag1', 'tag2'],
  },
];

export type TProject = IProjectItem[];
export interface IProjectItem {
  key: number;
  title: string;
  link: string;
  desc: string;
  thumb: string;
  category: string;
  tags?: string[];
}
