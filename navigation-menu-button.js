'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _economistComponentIcon = require('@economist/component-icon');

var _economistComponentIcon2 = _interopRequireDefault(_economistComponentIcon);

var _urls = require('./urls');

var NavigationMenuButton = (function (_React$Component) {
  _inherits(NavigationMenuButton, _React$Component);

  function NavigationMenuButton() {
    var _this = this;

    _classCallCheck(this, NavigationMenuButton);

    _React$Component.apply(this, arguments);

    this.getFocusToggler = function (slug) {
      var _props = _this.props;
      var handleToggleNavigation = _props.handleToggleNavigation;
      var focusNavigation = _props.focusNavigation;

      function sendFocusStateToParent(newFocus, event) {
        event.preventDefault();
        if (handleToggleNavigation) {
          handleToggleNavigation(newFocus);
        }
      }

      function focus(event) {
        sendFocusStateToParent({
          focusNavigation: true,
          focusCategorySlug: null,
          focusSubcategorySlug: null
        }, event);
      }

      function unfocus(event) {
        sendFocusStateToParent({
          focusNavigation: false,
          focusCategorySlug: null,
          focusSubcategorySlug: null
        }, event);
      }

      var isFocused = focusNavigation;
      return isFocused ? unfocus : focus;
    };
  }

  NavigationMenuButton.prototype.render = function render() {
    var focusNavigation = this.props.focusNavigation;
    var menuButtonClasses = {
      'navigation__menu-button--open': focusNavigation,
      'navigation__menu-button--closed': !focusNavigation
    };
    return _react2['default'].createElement(
      'a',
      {
        href: _urls.navigationOpenUrl(focusNavigation),
        onClick: this.getFocusToggler(),
        className: 'navigation__menu-button-wrapper-link'
      },
      _react2['default'].createElement(
        'div',
        { className: _classnames2['default'](this.props.className, 'navigation__menu-button', menuButtonClasses) },
        _react2['default'].createElement(_economistComponentIcon2['default'], {
          icon: focusNavigation ? 'close' : 'hamburger',
          color: 'white',
          background: 'transparent'
        })
      )
    );
  };

  _createClass(NavigationMenuButton, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        className: _react.PropTypes.string,
        focusNavigation: _react.PropTypes.bool,
        handleToggleNavigation: _react.PropTypes.func
      };
    }
  }]);

  return NavigationMenuButton;
})(_react2['default'].Component);

exports['default'] = NavigationMenuButton;
module.exports = exports['default'];