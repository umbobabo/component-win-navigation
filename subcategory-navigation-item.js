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

var _subcategoryNavigationCard = require('./subcategory-navigation-card');

var _subcategoryNavigationCard2 = _interopRequireDefault(_subcategoryNavigationCard);

var _scrollMobileTo = require('./scroll-mobile-to');

var _scrollMobileTo2 = _interopRequireDefault(_scrollMobileTo);

var _urls = require('./urls');

var SubcategoryNavigationItem = (function (_React$Component) {
  _inherits(SubcategoryNavigationItem, _React$Component);

  function SubcategoryNavigationItem() {
    var _this = this;

    _classCallCheck(this, SubcategoryNavigationItem);

    _React$Component.apply(this, arguments);

    this.getFocusToggler = function (slug) {
      var _props = _this.props;
      var handleFocusChange = _props.handleFocusChange;
      var focusSubcategorySlug = _props.focusSubcategorySlug;

      function sendFocusStateToParent(newFocus, event) {
        event.preventDefault();
        if (handleFocusChange) {
          handleFocusChange(newFocus, function () {
            var slugClass = slug && ['navigation__subcategory', slug].filter(function (val) {
              return val;
            }).join('-');
            _scrollMobileTo2['default'](slugClass, global);
          });
        }
      }

      function focus(event) {
        sendFocusStateToParent({
          focusSubcategorySlug: slug
        }, event);
      }

      function unfocus(event) {
        sendFocusStateToParent({
          focusSubcategorySlug: slug + ':focus-off'
        }, event);
      }

      var isFocused = Boolean(slug) && slug === focusSubcategorySlug;
      return isFocused ? unfocus : focus;
    };
  }

  SubcategoryNavigationItem.prototype.render = function render() {
    var _props2 = this.props;
    var title = _props2.title;
    var slug = _props2.slug;
    var focusCategorySlug = _props2.focusCategorySlug;
    var focusSubcategorySlug = _props2.focusSubcategorySlug;
    var activeSubcategorySlug = _props2.activeSubcategorySlug;

    var isFocused = Boolean(slug) && slug === focusSubcategorySlug;
    var isActive = Boolean(slug) && slug === activeSubcategorySlug;
    var titleClasses = {
      'navigation__subcategory-title--focus': isFocused,
      'navigation__subcategory-title--active': isActive
    };
    var slugClass = slug && ['navigation__subcategory', slug].filter(function (val) {
      return val;
    }).join('-');
    return _react2['default'].createElement(
      'div',
      { className: _classnames2['default'](this.props.className, 'navigation__subcategory', slugClass) },
      _react2['default'].createElement(
        'h3',
        { className: _classnames2['default']('navigation__subcategory-title', titleClasses) },
        _react2['default'].createElement(
          'a',
          { href: _urls.subcategoryUrl(focusCategorySlug, slug), onClick: this.getFocusToggler(slug) },
          title
        )
      ),
      isFocused ? _react2['default'].createElement(_subcategoryNavigationCard2['default'], this.props) : ''
    );
  };

  _createClass(SubcategoryNavigationItem, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        className: _react.PropTypes.string,
        slug: _react.PropTypes.string.isRequired,
        title: _react.PropTypes.string.isRequired,
        navigationItems: _react.PropTypes.arrayOf(_react.PropTypes.object),
        focusCategorySlug: _react.PropTypes.string,
        focusSubcategorySlug: _react.PropTypes.string,
        activeSubcategorySlug: _react.PropTypes.string,
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

  return SubcategoryNavigationItem;
})(_react2['default'].Component);

exports['default'] = SubcategoryNavigationItem;
module.exports = exports['default'];