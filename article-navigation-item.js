/* eslint id-length: 0 */
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

var _urls = require('./urls');

var ArticleNavigationItem = (function (_React$Component) {
  _inherits(ArticleNavigationItem, _React$Component);

  function ArticleNavigationItem() {
    _classCallCheck(this, ArticleNavigationItem);

    _React$Component.apply(this, arguments);
  }

  ArticleNavigationItem.prototype.render = function render() {
    var _props = this.props;
    var title = _props.title;
    var text = _props.text;
    var slug = _props.slug;
    var id = _props.id;
    var activeArticleId = _props.activeArticleId;
    var publishedOn = _props.publishedOn;

    var isActive = Boolean(id) && id === activeArticleId;
    var isNotPublished = Boolean(publishedOn);
    var containerClasses = {
      'navigation__article--active': isActive,
      'navigation__article--unpublished': isNotPublished,
      'navigation__article--published': !isNotPublished
    };
    var publishedStateClasses = {
      'navigation__article-published-state': true,
      'navigation__article-published-state--unpublished': isNotPublished,
      'navigation__article-published-state--published': !isNotPublished
    };
    var slugClass = slug && ['navigation__article', slug].filter(function (val) {
      return val;
    }).join('-');
    var body = _react2['default'].createElement(
      'div',
      { className: _classnames2['default'](this.props.className, 'navigation__article', slugClass, containerClasses) },
      _react2['default'].createElement(
        'h4',
        { className: 'navigation__article-title' },
        title
      ),
      _react2['default'].createElement(
        'span',
        { className: 'navigation__article-text' },
        text
      ),
      _react2['default'].createElement(
        'span',
        { className: _classnames2['default'](publishedStateClasses) },
        isNotPublished ? 'Coming soon' : 'Published'
      )
    );
    if (isActive) {
      return body;
    }
    if (isNotPublished) {
      return body;
    }

    return _react2['default'].createElement(
      'a',
      { href: _urls.articleUrl(id, slug) },
      body
    );
  };

  _createClass(ArticleNavigationItem, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        className: _react.PropTypes.string,
        slug: _react.PropTypes.string.isRequired,
        id: _react.PropTypes.number.isRequired,
        title: _react.PropTypes.string.isRequired,
        text: _react.PropTypes.string.isRequired,
        publishedOn: _react.PropTypes.string,
        activeArticleId: _react.PropTypes.number
      };
    }
  }]);

  return ArticleNavigationItem;
})(_react2['default'].Component);

exports['default'] = ArticleNavigationItem;
module.exports = exports['default'];