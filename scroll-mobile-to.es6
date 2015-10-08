import scrollTo from 'scroll-to';
import isMobileWidth from './is-mobile';

export default function scrollMobileBrowserTo(slugClass, scope = {}) {
  const isBrowser = Boolean(scope.document && scope.window);
  if (isBrowser && isMobileWidth(scope)) {
    const scrollToElement = scope.document.getElementsByClassName(slugClass)[0];
    if (scrollToElement) {
      scope.window.requestAnimationFrame(() => {
        const elOffsetFromTop = scrollToElement.getBoundingClientRect().top;
        const scrollFromTop = scope.window.scrollY;
        const offsetFromTop = (elOffsetFromTop + scrollFromTop);
        scrollTo(0, offsetFromTop);
      });
    }
  }
}
