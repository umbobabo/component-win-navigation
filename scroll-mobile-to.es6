import scrollTo from 'scroll-to';
import isMobileWidth from './is-mobile';

export default function scrollMobileBrowserTo(slugClass) {
  const isBrowser = Boolean(global.document && global.window);
  if (isMobileWidth() && isBrowser) {
    const wait = 100;
    const scrollToElement = global.document.getElementsByClassName(slugClass)[0];
    if (scrollToElement) {
      setTimeout(() => {
        const elOffsetFromTop = scrollToElement.getBoundingClientRect().top;
        const scrollFromTop = global.window.scrollY;
        const offsetFromTop = (elOffsetFromTop + scrollFromTop);
        scrollTo(0, offsetFromTop);
      }, wait);
    }
  }
}
