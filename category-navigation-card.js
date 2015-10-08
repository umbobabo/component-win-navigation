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

var _isMobile = require('./is-mobile');

var _isMobile2 = _interopRequireDefault(_isMobile);

var _listOfComponent = require('./list-of-component');

var _listOfComponent2 = _interopRequireDefault(_listOfComponent);

var _subcategoryNavigationItem = require('./subcategory-navigation-item');

var _subcategoryNavigationItem2 = _interopRequireDefault(_subcategoryNavigationItem);

var CategoryNavigationCard = (function (_React$Component) {
  _inherits(CategoryNavigationCard, _React$Component);

  function CategoryNavigationCard() {
    _classCallCheck(this, CategoryNavigationCard);

    _React$Component.apply(this, arguments);
  }

  CategoryNavigationCard.prototype.render = function render() {
    var subcategoryNavigationItems = this.props.navigationItems;

    var sharedProps = {
      focusCategorySlug: this.props.focusCategorySlug,
      focusSubcategorySlug: this.props.focusSubcategorySlug || this.defaultSubcategorySlug,
      activeCategorySlug: this.props.activeCategorySlug,
      activeSubcategorySlug: this.props.activeSubcategorySlug,
      activeArticleId: this.props.activeArticleId,
      handleFocusChange: this.props.handleFocusChange
    };

    var _props = this.props;
    var slug = _props.slug;
    var focusCategorySlug = _props.focusCategorySlug;
    var activeCategorySlug = _props.activeCategorySlug;

    var isFocused = Boolean(slug) && slug === focusCategorySlug;
    var isActive = Boolean(slug) && slug === activeCategorySlug;
    var containerClasses = {
      'navigation__category-card--focus': isFocused,
      'navigation__category-card--active': isActive
    };
    return _react2['default'].createElement(
      'nav',
      { className: _classnames2['default'](this.props.className, 'navigation__category-card', containerClasses) },
      _react2['default'].createElement(_listOfComponent2['default'], {
        className: 'navigation__subcategories',
        component: _subcategoryNavigationItem2['default'],
        items: subcategoryNavigationItems,
        sharedProps: sharedProps
      })
    );
  };

  _createClass(CategoryNavigationCard, [{
    key: 'defaultSubcategorySlug',
    get: function get() {
      // By default the first subcategory of a category should have focus
      // unless you are using a mobile browser.
      var isDesktop = !_isMobile2['default'](global);
      var subcategoryNavigationItems = this.props.navigationItems;

      var defaultSubcategorySlug = isDesktop && subcategoryNavigationItems[0] ? subcategoryNavigationItems[0].slug : null;
      return defaultSubcategorySlug;
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        className: _react.PropTypes.string,
        slug: _react.PropTypes.string.isRequired,
        navigationItems: _react.PropTypes.arrayOf(_react.PropTypes.object),
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

  return CategoryNavigationCard;
})(_react2['default'].Component);

exports['default'] = CategoryNavigationCard;
module.exports = exports['default'];