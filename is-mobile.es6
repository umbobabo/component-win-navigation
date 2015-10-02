function getBrowserWidth() {
  const isBrowser = global.window && global.document;
  if (!isBrowser) {
    // If we're on the server then return 0.
    return 0;
  }

  return global.window.innerWidth || global.document.documentElement.clientWidth || global.document.body.clientWidth;
}

export default function isMobileWidth() {
  return getBrowserWidth() <= 600;
}
