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

var _listOfComponent = require('./list-of-component');

var _listOfComponent2 = _interopRequireDefault(_listOfComponent);

var _categoryNavigationItem = require('./category-navigation-item');

var _categoryNavigationItem2 = _interopRequireDefault(_categoryNavigationItem);

var RootNavigationCard = (function (_React$Component) {
  _inherits(RootNavigationCard, _React$Component);

  function RootNavigationCard() {
    _classCallCheck(this, RootNavigationCard);

    _React$Component.apply(this, arguments);
  }

  RootNavigationCard.prototype.render = function render() {
    var categoryNavigationItems = this.props.navigationItems;

    var sharedProps = {
      focusCategorySlug: this.props.focusCategorySlug,
      focusSubcategorySlug: this.props.focusSubcategorySlug,
      activeCategorySlug: this.props.activeCategorySlug,
      activeSubcategorySlug: this.props.activeSubcategorySlug,
      activeArticleId: this.props.activeArticleId,
      handleFocusChange: this.props.handleFocusChange
    };

    var isFocused = this.props.focusNavigation;
    var containerClasses = {
      'navigation__root-card--focus': isFocused
    };
    return _react2['default'].createElement(
      'nav',
      { className: _classnames2['default'](this.props.className, 'navigation__root-card', containerClasses) },
      _react2['default'].createElement(
        'h1',
        { className: 'navigation__header navigation__header--hidden' },
        'Menu'
      ),
      _react2['default'].createElement(_listOfComponent2['default'], {
        className: 'navigation__categories',
        component: _categoryNavigationItem2['default'],
        items: categoryNavigationItems,
        sharedProps: sharedProps
      })
    );
  };

  _createClass(RootNavigationCard, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        className: _react.PropTypes.string,
        navigationItems: _react.PropTypes.arrayOf(_react.PropTypes.object),
        focusNavigation: _react.PropTypes.bool,
        focusCategorySlug: _react.PropTypes.string,
        focusSubcategorySlug: _react.PropTypes.string,
        activeCategorySlug: _react.PropTypes.string,
        activeSubcategorySlug: _react.PropTypes.string,
        activeArticleId: _react.PropTypes.number,
        handleFocusChange: _react.PropTypes.func
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

  return RootNavigationCard;
})(_react2['default'].Component);

exports['default'] = RootNavigationCard;
module.exports = exports['default'];