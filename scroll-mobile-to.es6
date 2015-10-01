import scrollTo from 'scroll-to-element';
import isMobileWidth from './is-mobile';

export default function scrollMobileBrowserTo(slugClass) {
  if (isMobileWidth()) {
    const wait = 100;
    setTimeout(() => {
      scrollTo(slugClass, {
        offset: 0,
      });
    }, wait);
  }
}
