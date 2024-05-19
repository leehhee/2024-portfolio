const path = require('path');

const basePath = '/public/icon/skill';

console.log(path.join(basePath, 'ae_40.svg'));

export const skill = {
  // AE: getSvgComponent('ae_40.svg'),
  AE: require('/public/icon/skill/ae_40.svg').default(),
  CSS: require('/public/icon/skill/css_40.svg').default(),
  FIGMA: require('/public/icon/skill/figma_40.svg').default(),
  GIT: require('/public/icon/skill/git_40.svg').default(),
  TYPESCRIPT: require('/public/icon/skill/ts_40.svg').default(),
  HTML: require('/public/icon/skill/html_40.svg').default(),
  ILLUSTRATOR: require('/public/icon/skill/il_40.svg').default(),
  JQUERY: require('/public/icon/skill/jquery_40.svg').default(),
  JAVASCRIPT: require('/public/icon/skill/js_40.svg').default(),
  NEXT: require('/public/icon/skill/next_40.svg').default(),
  PHOTOSHOP: require('/public/icon/skill/ps_40.svg').default(),
  REACT: require('/public/icon/skill/react_40.svg').default(),
  SASS: require('/public/icon/skill/sass_40.svg').default(),
  SC: require('/public/icon/skill/sc_40.svg').default(),
};
// const ae = require('/public/icon/skill/ae_40.svg');
// export { default as AFTER_EFFECT } from '/public/icon/skill/ae_40.svg';
// export { default as CSS } from '/public/icon/skill/css_40.svg';
// export { default as FIGMA } from '/public/icon/skill/figma_40.svg';
// export { default as GIT } from '/public/icon/skill/git_40.svg';
// export { default as TYPESCRIPT } from '/public/icon/skill/ts_40.svg';
// export { default as HTML } from '/public/icon/skill/html_40.svg';
// export { default as ILLUSTRATOR } from '/public/icon/skill/il_40.svg';
// export { default as JQUERY } from '/public/icon/skill/jquery_40.svg';
// export { default as CSS } from '/public/icon/skill/css_40.svg';
