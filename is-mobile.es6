function getBrowserWidth() {
  if (global.window) {
    return global.window.innerWidth;
  }
  if (global.document) {
    return global.document.documentElement.clientWidth || global.document.body.clientWidth;
  }

  // If we're on the server then return 0.
  return 0;
}

export default function isMobileWidth() {
  return getBrowserWidth() <= 600;
}
