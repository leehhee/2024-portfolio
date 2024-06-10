import dynamic from 'next/dynamic';

// export { default as Project } from './Project';
export const Project = dynamic(() => import('./Project'));
export { default as Visual } from './Visual';
export { default as Video } from './Video';
// export { default as Posts } from './Posts';
export const Posts = dynamic(() => import('./Posts'));
// export { default as Introduce } from './Introduce';

export const Introduce = dynamic(() => import('./Introduce'));
// export { default as OutroVisual } from './OutroVisual';
export const OutroVisual = dynamic(() => import('./OutroVisual'));
