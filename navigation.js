'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _isMobile = require('./is-mobile');

var _isMobile2 = _interopRequireDefault(_isMobile);

var _rootNavigationCard = require('./root-navigation-card');

var _rootNavigationCard2 = _interopRequireDefault(_rootNavigationCard);

var _navigationMenuButton = require('./navigation-menu-button');

var _navigationMenuButton2 = _interopRequireDefault(_navigationMenuButton);

var Navigation = (function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    var _this = this;

    _classCallCheck(this, Navigation);

    _React$Component.apply(this, arguments);

    this.state = {
      focusNavigation: !_isMobile2['default'](global),
      focusCategorySlug: null,
      focusSubcategorySlug: null,
      activeCategorySlug: null,
      activeSubcategorySlug: null,
      activeArticleId: null
    };

    this.resetFocus = function () {
      _this.setState({
        focusCategorySlug: null,
        focusSubcategorySlug: null
      });
    };

    this.handleFocusChange = function (focusChange) {
      var afterNewStateRenderedCallback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

      _this.setState(focusChange, afterNewStateRenderedCallback);
    };

    this.handleToggleNavigation = function (focusChange) {
      var afterNewStateRenderedCallback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];

      _this.setState(focusChange, afterNewStateRenderedCallback);
    };
  }

  Navigation.prototype.componentWillMount = function componentWillMount() {
    this.setState({
      focusCategorySlug: this.props.focusCategorySlug,
      focusSubcategorySlug: this.props.focusSubcategorySlug,
      activeCategorySlug: this.props.activeCategorySlug,
      activeSubcategorySlug: this.props.activeSubcategorySlug,
      activeArticleId: this.props.activeArticleId
    });
  };

  Navigation.prototype.render = function render() {
    var navigationItems = this.props.navigationItems;
    var focusNavigation = this.state.focusNavigation;
    return _react2['default'].createElement(
      'nav',
      {
        role: 'navigation',
        className: _classnames2['default'](this.props.className, 'navigation')
      },
      _react2['default'].createElement(_navigationMenuButton2['default'], {
        handleToggleNavigation: this.handleToggleNavigation,
        focusNavigation: focusNavigation
      }),
      _react2['default'].createElement(_rootNavigationCard2['default'], _extends({
        navigationItems: navigationItems,
        handleFocusChange: this.handleFocusChange
      }, this.state))
    );
  };

  _createClass(Navigation, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        className: _react.PropTypes.string,
        navigationItems: _react.PropTypes.arrayOf(_react.PropTypes.shape({
          title: _react.PropTypes.string.isRequired,
          slug: _react.PropTypes.string.isRequired,
          navigationItems: _react.PropTypes.arrayOf(_react.PropTypes.shape({
            title: _react.PropTypes.string.isRequired,
            slug: _react.PropTypes.string.isRequired,
            navigationItems: _react.PropTypes.arrayOf(_react.PropTypes.shape({
              id: _react.PropTypes.number.isRequired,
              slug: _react.PropTypes.string.isRequired,
              title: _react.PropTypes.string.isRequired,
              text: _react.PropTypes.string.isRequired,
              publishedOn: _react.PropTypes.string
            }))
          }))
        })),
        focusCategorySlug: _react.PropTypes.string,
        focusSubcategorySlug: _react.PropTypes.string,
        activeCategorySlug: _react.PropTypes.string,
        activeSubcategorySlug: _react.PropTypes.string,
        activeArticleId: _react.PropTypes.number
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        navigationItems: []
      };
    }
  }]);

  return Navigation;
})(_react2['default'].Component);

exports['default'] = Navigation;
module.exports = exports['default'];