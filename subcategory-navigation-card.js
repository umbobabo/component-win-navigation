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

var _articleNavigationItem = require('./article-navigation-item');

var _articleNavigationItem2 = _interopRequireDefault(_articleNavigationItem);

var SubcategoryNavigationCard = (function (_React$Component) {
  _inherits(SubcategoryNavigationCard, _React$Component);

  function SubcategoryNavigationCard() {
    _classCallCheck(this, SubcategoryNavigationCard);

    _React$Component.apply(this, arguments);
  }

  SubcategoryNavigationCard.prototype.render = function render() {
    var articleNavigationItems = this.props.navigationItems;

    var sharedProps = {
      activeArticleId: this.props.activeArticleId
    };

    var _props = this.props;
    var slug = _props.slug;
    var focusSubcategorySlug = _props.focusSubcategorySlug;
    var activeSubcategorySlug = _props.activeSubcategorySlug;

    var isFocused = Boolean(slug) && slug === focusSubcategorySlug;
    var isActive = Boolean(slug) && slug === activeSubcategorySlug;
    var containerClasses = {
      'navigation__subcategory-card--focus': isFocused,
      'navigation__subcategory-card--active': isActive
    };
    return _react2['default'].createElement(
      'nav',
      { className: _classnames2['default'](this.props.className, 'navigation__subcategory-card', containerClasses) },
      _react2['default'].createElement(_listOfComponent2['default'], {
        className: 'navigation__articles',
        component: _articleNavigationItem2['default'],
        items: articleNavigationItems,
        sharedProps: sharedProps
      })
    );
  };

  _createClass(SubcategoryNavigationCard, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        className: _react.PropTypes.string,
        slug: _react.PropTypes.string.isRequired,
        navigationItems: _react.PropTypes.arrayOf(_react.PropTypes.object),
        focusSubcategorySlug: _react.PropTypes.string,
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

  return SubcategoryNavigationCard;
})(_react2['default'].Component);

exports['default'] = SubcategoryNavigationCard;
module.exports = exports['default'];