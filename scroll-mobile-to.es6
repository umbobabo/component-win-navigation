import scrollTo from 'scroll-to';
import isMobileWidth from './is-mobile';

export default function scrollMobileBrowserTo(slugClass) {
  if (isMobileWidth()) {
    const wait = 100;
    const el = document.getElementsByClassName(slugClass)[0];
    setTimeout(() => {
      const elOffsetY = el.getBoundingClientRect().top;
      const scrollY = window.scrollY;
      const offsetY = (elOffsetY + scrollY);
      scrollTo(0, offsetY);
    }, wait);
  }
}
