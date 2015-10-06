import scrollTo from 'scroll-to';
import isMobileWidth from './is-mobile';

export default function scrollMobileBrowserTo(slugClass, scope = {}) {
  const isBrowser = Boolean(scope.document && scope.window);
  if (isBrowser && isMobileWidth(scope)) {
    const wait = 100;
    const scrollToElement = scope.document.getElementsByClassName(slugClass)[0];
    if (scrollToElement) {
      setTimeout(() => {
        const elOffsetFromTop = scrollToElement.getBoundingClientRect().top;
        const scrollFromTop = scope.window.scrollY;
        const offsetFromTop = (elOffsetFromTop + scrollFromTop);
        scrollTo(0, offsetFromTop);
      }, wait);
    }
  }
}
