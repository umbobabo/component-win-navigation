const mobileWidth = 600;
function getBrowserWidth(scope = {}) {
  const isBrowser = scope.window && scope.document;
  if (!isBrowser) {
    // If we're on the server then return 0.
    return 0;
  }

  return scope.window.innerWidth || scope.document.documentElement.clientWidth || scope.document.body.clientWidth;
}

/*
 * This is a mobile-only screen width behavioural breakpoint
 * to help assign different behaviours to mobile or desktop.
 */
export default function isMobileWidth(scope = {}) {
  return getBrowserWidth(scope) <= mobileWidth;
}
