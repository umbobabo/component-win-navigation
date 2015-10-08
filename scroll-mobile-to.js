'use strict';

exports.__esModule = true;
exports['default'] = scrollMobileBrowserTo;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _scrollTo = require('scroll-to');

var _scrollTo2 = _interopRequireDefault(_scrollTo);

var _isMobile = require('./is-mobile');

var _isMobile2 = _interopRequireDefault(_isMobile);

function scrollMobileBrowserTo(slugClass) {
  var scope = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var isBrowser = Boolean(scope.document && scope.window);
  if (isBrowser && _isMobile2['default'](scope)) {
    (function () {
      var scrollToElement = scope.document.getElementsByClassName(slugClass)[0];
      if (scrollToElement) {
        scope.window.requestAnimationFrame(function () {
          var elOffsetFromTop = scrollToElement.getBoundingClientRect().top;
          var scrollFromTop = scope.window.scrollY;
          var offsetFromTop = elOffsetFromTop + scrollFromTop;
          _scrollTo2['default'](0, offsetFromTop);
        });
      }
    })();
  }
}

module.exports = exports['default'];