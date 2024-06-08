export const scrollToSection = (selector: string) => {
  const dom = document.querySelector(selector);

  if (!dom) return;

  dom.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
