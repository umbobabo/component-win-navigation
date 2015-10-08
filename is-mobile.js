"use strict";

exports.__esModule = true;
exports["default"] = isMobileWidth;
var mobileWidth = 600;
function getBrowserWidth() {
  var scope = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var isBrowser = scope.window && scope.document;
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

function isMobileWidth() {
  var scope = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return getBrowserWidth(scope) <= mobileWidth;
}

module.exports = exports["default"];