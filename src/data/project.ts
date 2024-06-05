import PROJECT12 from '/public/image/project12.png';
import PROJECT11 from '/public/image/project11.png';
import PROJECT10 from '/public/image/project10.png';
import PROJECT09 from '/public/image/project09.png';
import PROJECT08 from '/public/image/project08.png';
import PROJECT07 from '/public/image/project07.png';
import PROJECT06 from '/public/image/project06.png';
import PROJECT05 from '/public/image/project05.png';

export const project: TProject = [
  {
    key: 12,
    title: '엔터프라이즈블록체인',
    subtitle: '인터랙티브 PC 웹',
    thumb: PROJECT12.src,
    category: '사이트 클론코딩',
    link: 'https://kimbangul.github.io/enterpriseblockchain/',
    tags: ['퍼블리싱 100%', 'HTML', 'SCSS', 'JavaScript(ES6+)', 'GSAP'],
    desc: '인터랙티브 구현에 중점을 둔 클론 코딩',
    duration: '2024.06 ~ 2024.06',
    section: '엔터프라이즈블록체인 메인 페이지 클론코딩',
    tool: 'HTML, SCSS, JavaScript(ES6+), GSAP',
  },
  {
    key: 11,
    subtitle: '반응형 PC 웹사이트',
    title: 'CRAFT',
    thumb: PROJECT11.src,
    category: '사이트 클론코딩',
    link: 'https://craftcharter.vercel.app/',
    tags: ['퍼블리싱 100%', 'React.js', 'SCSS', 'TypeScript', 'Lottie'],
    desc: 'React.js를 활용한 클론코딩 사이트',
    duration: '2023.01 ~ 2023.01',
    section: 'craftcharter 사이트 클론코딩',
    tool: 'React.js, SCSS, TypeScript, Lottie',
  },
  // {
  //   key: 10,
  //   title: 'DRINKLE',
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
  //   desc: `편의점에서 쉽게 구할 수 있는 재료들로 칵테일을 제조할 수 있는 여러 가지 방법을 소개하여 칵테일에 대한 진입 장벽을 낮추고, 주류 문화의 다양화에 기여하고자 제작 중인 사이드 프로젝트입니다.\n디자이너 2명, 프론트엔드 2명, 백엔드 2명의 인원으로 개발하고 있으며 프론트엔드 및 UI 개발을 담당하고 있습니다.\n주 1회 디스코드 회의를 진행하며 기획 및 개발에 참여하고 있으며, Github를 통한 이슈 관리 및 코드 리뷰를 수행하고 있습니다.`,
  //   duration: '2024.01 ~ 진행중',
  //   section: '사이트 기획 및 Front-end 개발 담당',
  //   tool: 'Next.js, Redux, Styled-components, Framer-motion, react-query, storybook',
  //   isProgress: true,
  // },
  // {
  //   key: 9,
  //   title: '대아정보시스템',
  //   subtitle: '반응형 PC 웹사이트',
  //   thumb: PROJECT09.src,
  //   category: '기업 사이트 제작',
  //   link: 'http://daeainfosys.co.kr/',
  //   tags: ['디자인 100%', '구현 100%', 'Next.js', '반응형', 'SCSS'],
  //   desc: '기존 노코드 툴로 제작되었던 홈페이지를 자유롭게 커스텀 및 관리할 수 있도록 Next.js 프레임워크를 이용하여 제작하였습니다. 의료IT기업의 이미지에 맞게끔 기존 사이트를 더 현대적이고 깔끔하게 리디자인하고자 하였습니다.\nInterSection Observer API로 스크롤 애니메이션을 구현하였으며 모바일 환경에서도 이용이 용이하도록 반응형 웹을 구축하였습니다.\n리뉴얼 후 검색엔진 노출 순위의 증가로 페이지 방문수 증대에 기여하였습니다.',
  //   duration: '2023.11 ~ 2023.12',
  //   section: '사이트 전반 디자인 및 구현',
  //   tool: 'Next.js, SCSS, TypeScript, Recoil, Node.js, Git',
  // },
  // {
  //   key: 8,
  //   title: 'RebitX Mobile',
  //   subtitle: '모바일 웹앱 구축',
  //   thumb: PROJECT08.src,
  //   category: '상업용 부동산 조각투자 플랫폼 웹앱 버전 구축',
  //   link: 'https://rebit-x.vercel.app/mobile',
  //   notion:
  //     'https://meadow-touch-c48.notion.site/RebitX-2e919c1788d4452a94ddfd65c89dc1c0',
  //   tags: ['구현 60%', 'Next.js', 'SCSS'],
  //   desc: 'RebitX의 App 디자인을 토대로 모바일 Web 플랫폼을 제작하였습니다. 메인 페이지, 청약, 거래, 알림, 공지사항과 이벤트, 이용가이드 등의 게시판 페이지들의 프론트엔드 개발 작업을 주로 진행하였으며 그 외 마이페이지, 나의 정보 페이지들의 일부 데이터 바인딩 및 수정 작업을 진행하였습니다. 짧은 시간 내에 다양한 해상도의 모바일 디바이스를 대응할 수 있도록 rem 단위를 사용했습니다.',
  //   duration: '2023.01 ~ 2023.02',
  //   section: '주요 기능 및 게시판 페이지 Front-end 개발 담당',
  //   tool: 'Next.js, SCSS, JavaScript, Git',
  // },
  // {
  //   key: 7,
  //   title: 'RebitX',
  //   subtitle: '상업용 부동산 조각투자 플랫폼',
  //   thumb: PROJECT07.src,
  //   category: '상업용 부동산 조각투자 플랫폼 구축',
  //   link: 'https://rebitx.com/',
  //   notion:
  //     'https://meadow-touch-c48.notion.site/RebitX-2e919c1788d4452a94ddfd65c89dc1c0',
  //   tags: ['디자인 100%', '구현 60%', 'Next.js', 'SCSS'],
  //   desc: '상업용 부동산 조각투자 서비스의 웹 플랫폼 구축 프로젝트에 참여하여 사용자 및 관리자 사이트 전반 디자인 및 Front-end 개발 업무를 담당하였습니다.\n 프론트엔드 초기 개발환경 세팅과, 전역 상태관리 라이브러리 MobX를 도입하였으며 SCSS 스타일 가이드 명세화, 버튼이나 모달 등의 공통 컴포넌트 구축으로 커뮤니케이션 리소스를 줄여 빠르고 효율적인 작업에 기여하고자 하였습니다.',
  //   duration: '2022.10 ~ 2023.01',
  //   section: '사용자, 관리자 페이지 전반 디자인 및 Front-end 개발 담당',
  //   tool: 'Figma, Next.js, SCSS, JavaScript(ES6+), Git',
  // },
  // {
  //   key: 6,
  //   title: 'FUNCHY',
  //   thumb: PROJECT06.src,
  //   subtitle: '온라인 P2P 플랫폼',
  //   category: '온라인 P2P 플랫폼 서비스 구축',
  //   // link: 'https://funchy.vercel.app/',
  //   notion:
  //     'https://meadow-touch-c48.notion.site/FUNCHY-P2P-00f2f5c02e5e403f831814c23bb2274b',
  //   tags: ['디자인 40%', '구현 40%', 'Next.js', 'SCSS'],
  //   desc: "핀테크 기반 온라인 P2P 플랫폼 'FUNCHY'의 사용자 및 관리자 사이트 디자인 및 Front-end 개발을 담당하였습니다. 페이지 간 통일성을 맞추는 것을 우선으로, 서비스 아이덴티티 구축을 위한 컬러 선정과 더 좋은 UX/UI적 표현 방식에 대해 팀원들과 논의하며 긴밀히 소통하였습니다.",
  //   duration: '2022.07 ~ 2022.10',
  //   section: '사이트 전반 디자인 및 Front-end 개발 담당',
  //   tool: 'Figma, Next.js, SCSS, JavaScript(ES6+), Git',
  // },
  {
    key: 5,
    title: '건명테크',
    thumb: PROJECT05.src,
    subtitle: 'PC 웹사이트',
    category: '기업 사이트 제작',
    link: 'http://xn--z69au0yv6quza.kr/',
    tags: ['기획 100%', '디자인 100%', 'HTML', 'CSS', 'JQuery', '그누보드'],
    desc: '그누보드 솔루션을 이용해 (주)건명테크의 회사 사이트를 제작하였습니다. 지나치게 무겁지 않으면서도 신뢰감을 줄 수 있는 회사의 이미지를 표현하기 위해 블루와 그린의 그라데이션 컬러를 사용하여 감각적으로 디자인하고자 하였습니다.',
    duration: '2022.01 ~ 2022.01',
    section: '기획, 디자인, 퍼블리싱 등 전반적인 사이트 제작 업무 담당',
    tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
  },
  // {
  //   key: 3,
  //   title: '메모리안',
  //   thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work06.jpg`,
  //   category: '기업 사이트 리뉴얼',
  //   link: 'http://memoryan.com/',
  //   tags: [
  //     '기획 100%',
  //     '디자인 100%',
  //     'HTML',
  //     'CSS',
  //     'JQuery',
  //     '그누보드',
  //     '적응형',
  //   ],
  //   desc: '유골보석 및 성형업 관련 제품을 제작하는 기업의 사이트를 제작하였습니다. 판매 제품의 특성상, 방문 고객들이 두려움을 갖고 접근할 수 있기 때문에 무겁지 않으면서도 고급스러운 분위기가 느껴질 수 있도록 기획하였습니다.',
  //   duration: '2022.03 ~ 2022.03',
  //   section: '기획, 디자인, 퍼블리싱 등 전반적인 사이트 제작 업무 담당',
  //   tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
  // },
  // {
  //   key: 2,
  //   title: 'ITECH',
  //   thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work12.jpg`,
  //   category: '기업 사이트 제작',
  //   link: 'http://itechate.co.kr/',
  //   tags: [
  //     '기획 100%',
  //     '디자인 100%',
  //     'HTML',
  //     'CSS',
  //     'JQuery',
  //     '그누보드',
  //     'PC',
  //   ],
  //   desc: "계측장비 판매 기업 '아이텍'의 웹 사이트를 제작하였습니다. 전반적으로 블랙과 화이트 톤, 그리고 로고에 사용된 레드 컬러를 강조색으로 차용하여 기업 이미지를 각인시키고자 하였습니다.",
  //   duration: '2022.03 ~ 2022.03',
  //   section: '기획, 디자인, 퍼블리싱 등 전반적인 사이트 제작 업무 담당',
  //   tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
  // },
  // {
  //   key: 1,
  //   title: '강민이벤트',
  //   thumb: `${process.env.NEXT_PUBLIC_CDN_LINK}/portfolio/image/work/work13.jpg`,
  //   category: '업체 사이트 제작',
  //   link: 'http://kmevent.kr/',
  //   tags: ['기획 100%', '디자인 100%', 'HTML', 'CSS', 'JQuery', '그누보드', 'PC'],
  //   desc: '개업 및 오픈 이벤트 전문 업체의 웹 사이트를 제작하였습니다. 이벤트를 통한 즐거움을 시각적으로 전달하기 위해 아이콘과 모션을 적극적으로 사용하고, 그라데이션 컬러를 사용하여 업체의 이미지를 구축하고자 하였습니다.',
  //   duration: '2021.12 ~ 2021.12',
  //   section: '기획, 디자인, 퍼블리싱 등 전반적인 사이트 제작 업무 담당',
  //   tool: 'HTML, CSS, JQuery, Photoshop, Illustrator, PHP, 그누보드5',
  // },
  // {
  //   key: 0,
  //   title: '테스트 프로젝트',
  //   link: '#',
  //   desc: '테스트 요약정보',
  //   thumb: PROJECT01.src,
  //   category: '테스트 카테고리',
  //   tagss: ['tags1', 'tags2'],
  // },
  // {
  //   key: 1,
  //   title: '테스트 프로젝트2',
  //   link: '#',
  //   desc: '테스트 요약정보',
  //   thumb: PROJECT02.src,
  //   category: '테스트 카테고리',
  //   tagss: ['tags1', 'tags2'],
  // },
];

export type TProject = IProjectItem[];
export interface IProjectItem {
  key: number;
  title: string;
  subtitle: string;
  link?: string;
  desc: string;
  thumb: string;
  category: string;
  tags?: string[];
  duration: string;
  section: string;
  tool: string;
  notion?: string;
  isProgress?: boolean;
}
