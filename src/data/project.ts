import PROJECT13 from '/public/image/project13.gif';
import PROJECT12 from '/public/image/project12.webp';
import PROJECT11 from '/public/image/project11.webp';
import PROJECT07 from '/public/image/project07.webp';
import PROJECT06 from '/public/image/project06.webp';

export const project: TProject = [
  {
    key: 13,
    title: 'PP Fragment',
    subtitle: '인터랙티브 반응형 Web',
    thumb: PROJECT13.src,
    category: '사이트 클론코딩',
    link: 'https://kimbangul.github.io/pp-fragment/',
    tags: ['퍼블리싱 100%', 'HTML', 'SCSS', 'JavaScript(ES6+)', 'GSAP'],
    notion:
      'https://meadow-touch-c48.notion.site/PP-Fragment-d84fc55c51fd46a48b33eb58578aae47?pvs=74',
    desc: '인터랙티브 구현에 중점을 둔 클론 코딩',
    duration: '2024.06 ~ 2024.06',
    section: 'PP Fragment 메인 페이지 클론코딩',
    tool: 'HTML, SCSS, JavaScript(ES6+), GSAP',
  },
  {
    key: 12,
    title: '엔터프라이즈블록체인',
    subtitle: '인터랙티브 PC Web',
    thumb: PROJECT12.src,
    category: '사이트 클론코딩',
    link: 'https://kimbangul.github.io/enterpriseblockchain/',
    tags: ['퍼블리싱 100%', 'HTML', 'SCSS', 'JavaScript(ES6+)', 'GSAP'],
    notion:
      'https://meadow-touch-c48.notion.site/6f3bc970afc54f2c828d1af6ac3c27a4',
    desc: '인터랙티브 구현에 중점을 둔 클론 코딩',
    duration: '2024.06 ~ 2024.06',
    section: '엔터프라이즈블록체인 메인 페이지 클론코딩',
    tool: 'HTML, SCSS, JavaScript(ES6+), GSAP',
  },
  {
    key: 11,
    subtitle: '반응형 Web',
    title: 'CRAFT',
    thumb: PROJECT11.src,
    category: '사이트 클론코딩',
    link: 'https://craftcharter.vercel.app/',
    notion:
      'https://meadow-touch-c48.notion.site/CraftCharter-89bf85bbd0314c98954afffa437de978?pvs=74',
    tags: ['퍼블리싱 100%', 'React.js', 'SCSS', 'TypeScript', 'Lottie'],
    desc: 'React.js를 활용한 클론코딩 사이트',
    duration: '2023.01 ~ 2023.01',
    section: 'craftcharter 사이트 클론코딩',
    tool: 'React.js, SCSS, TypeScript, Lottie',
  },
  {
    key: 7,
    title: 'RebitX',
    subtitle: '상업용 부동산 조각투자 플랫폼',
    thumb: PROJECT07.src,
    category: '상업용 부동산 조각투자 플랫폼 구축',
    link: 'https://rebitx.com/',
    notion:
      'https://meadow-touch-c48.notion.site/RebitX-2e919c1788d4452a94ddfd65c89dc1c0',
    tags: [
      '디자인 100%',
      '프론트엔드 60%',
      'Next.js',
      'JavaScript(ES6+)',
      'SCSS',
    ],
    desc: '상업용 부동산 조각투자 서비스의 웹 플랫폼 구축 프로젝트에 참여하여 사용자 및 관리자 사이트 전반 디자인 및 Front-end 개발 업무를 담당하였습니다.\n 프론트엔드 초기 개발환경 세팅과, 전역 상태관리 라이브러리 MobX를 도입하였으며 SCSS 스타일 가이드 명세화, 버튼이나 모달 등의 공통 컴포넌트 구축으로 커뮤니케이션 리소스를 줄여 빠르고 효율적인 작업에 기여하고자 하였습니다.',
    duration: '2022.10 ~ 2023.01',
    section: '사용자, 관리자 페이지 전반 디자인 및 Front-end 개발 담당',
    tool: 'Figma, Next.js, SCSS, JavaScript(ES6+), MobX, Git',
  },
  {
    key: 6,
    title: '데이터 활용의 최적화',
    thumb: PROJECT06.src,
    subtitle: '온라인 P2P 플랫폼',
    category: '온라인 P2P 플랫폼 서비스 구축',
    //link: 'https://funchy.vercel.app/',
    notion:
      'https://meadow-touch-c48.notion.site/FUNCHY-P2P-00f2f5c02e5e403f831814c23bb2274b',
    tags: [
      '디자인 40%',
      '프론트엔드 40%',
      'Next.js',
      'JavaScript(ES6+)',
      'SCSS',
    ],
    desc: "Telegraf, InfluxDB, Grafana, Elasticsearch, Kibana, LogStash, Filebeat 등등의 다양한 오픈소스와 연계할 수 있습니다.",
    duration: '2022.07 ~ 2022.10',
    section: '사이트 전반 디자인 및 Front-end 개발 담당',
    tool: 'Figma, Next.js, SCSS, JavaScript(ES6+), Git',
  },
  {
    key: 9,
    title: '강력한 프로파일링',
    subtitle: '반응형 PC 웹사이트',
    // thumb: PROJECT09.src,
    category: '기업 사이트 제작',
    //link: 'http://daeainfosys.co.kr/',
    tags: ['프론트엔드 100%', 'Next.js', 'JavaScript(ES6+)', '반응형', 'SCSS'],
    desc: '전체 트랜잭션을 한눈에 파악할 수 있고, 느리거나 오류가 발생한 트랜잭션을 선별하여 조회할 수 있습니다.',
    duration: '2023.11 ~ 2023.12',
    section: '사이트 전반 디자인 및 구현',
    tool: 'Next.js, SCSS, TypeScript, Recoil, Node.js, Git',
  },
  {
    key: 8,
    title: '클라이언트 설치로부터 해방',
    subtitle: '모바일 Web App',
    //    thumb: PROJECT08.src,
    category: '상업용 부동산 조각투자 플랫폼 웹앱 버전 구축',
    //link: 'https://rebit-x.vercel.app/mobile',
    notion:
      'https://meadow-touch-c48.notion.site/RebitX-2e919c1788d4452a94ddfd65c89dc1c0',
    tags: ['프론트엔드 60%', 'Next.js', 'JavaScript(ES6+)', 'SCSS'],
    desc: '손쉬운 화면 구성과 직관적인 UI를 제공하는 대시보드로 다양한 관점의 모니터링이 가능합니다.',
    duration: '2023.01 ~ 2023.02',
    section: '주요 기능 및 게시판 페이지 Front-end 개발 담당',
    tool: 'Next.js, SCSS, JavaScript(ES6+), Git',
  },
  // {
  //   key: 10,
  //   title: '150만건 이상의 대량 데이터 조회',
  //   subtitle: '사이드 프로젝트',
  //   thumb: PROJECT10.src,
  //   category: '주류 칵테일 플랫폼 개발 사이드 프로젝트',
  //   notion:
  //     'https://meadow-touch-c48.notion.site/DRINKLE-5188ca8da8784e848a68702cdb80726c',
  //   tags: [
  //     '기획 30%',
  //     '구현 50%',
  //     'Next.js',
  //     'Styled-Component',
  //     'Framer-motion',
  //   ],
  //   desc: `트랜젝션의 트렌드를 확인하여 문제의 발생 시점과 종료 시점을 파악할 수 있습니다.`,
  //   duration: '2024.01 ~ 진행중',
  //   section: '사이트 기획 및 Front-end 개발 담당',
  //   tool: 'Next.js, Redux, Styled-components, Framer-motion, react-query, storybook',
  //   isProgress: true,
  // },
  {
    key: 5,
    title: '쉬운 구성과 자유로운 설치',
    // thumb: PROJECT05.src,
    subtitle: 'PC Web',
    category: '기업 사이트 제작',
    //link: 'http://xn--z69au0yv6quza.kr/',
    tags: ['퍼블리싱 100%', 'HTML', 'CSS', 'JQuery', '그누보드'],
    desc: '수집서버/API서버/대시보드 서버는 모듈 형태로 구성되어 있어 운영하고 있는 네트워크 환경에 따라 자유롭게 배치할 수 있습니다.',
    duration: '2022.01 ~ 2022.01',
    section: '기획, 디자인, 퍼블리싱 등 전반적인 사이트 제작 업무 담당',
    tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
  },
  {
    key: 3,
    title: '표준! 표준! 표준! ',
    subtitle: 'PC Web',
    //  thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work06.jpg`,
    category: '기업 사이트 리뉴얼',
    //link: 'http://memoryan.com/',
    tags: ['퍼블리싱 100%', 'HTML', 'CSS', 'JQuery', '그누보드', '적응형'],
    desc: '언제 어디에서나 모니터링할 수 있는 환경을 만들기 위해 웹 표준, 호환성, 접근성을 준수하고 있습니다.',
    duration: '2022.03 ~ 2022.03',
    section: '기획, 디자인, 퍼블리싱 등 전반적인 사이트 제작 업무 담당',
    tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
  },
  /*{
    key: 2,
    title: 'ITECH',
    subtitle: 'PC Web',
    // thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work12.jpg`,
    category: '기업 사이트 제작',
    //link: 'http://itechate.co.kr/',
    tags: ['퍼블리싱 100%', 'HTML', 'CSS', 'JQuery', '그누보드', 'PC'],
    desc: 'PHP 기반 그누보드 솔루션을 커스텀하여 계측장비 판매 기업 아이텍의 웹 사이트를 제작하였습니다.',
    duration: '2022.03 ~ 2022.03',
    section: '기획, 디자인, 퍼블리싱 등 전반적인 사이트 제작 업무 담당',
    tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
*/
];

export type TProject = IProjectItem[];
export interface IProjectItem {
  key: number;
  title: string;
  subtitle: string;
  link?: string;
  desc: string;
  thumb?: string;
  category: string;
  tags?: string[];
  duration: string;
  section: string;
  tool: string;
  notion?: string;
  isProgress?: boolean;
}
