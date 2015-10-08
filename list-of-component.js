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

var _economistComponentList = require('@economist/component-list');

var _economistComponentList2 = _interopRequireDefault(_economistComponentList);

var _isProptypeComponent = require('./is-proptype-component');

var _isProptypeComponent2 = _interopRequireDefault(_isProptypeComponent);

var ListOfComponent = (function (_React$Component) {
  _inherits(ListOfComponent, _React$Component);

  function ListOfComponent() {
    var _this = this;

    _classCallCheck(this, ListOfComponent);

    _React$Component.apply(this, arguments);

    this.renderChildComponent = function (object, key) {
      var ChildComponent = _this.props.component;
      var sharedProps = _this.props.sharedProps || {};
      return _react2['default'].createElement(ChildComponent, _extends({
        key: key
      }, object, sharedProps));
    };
  }

  ListOfComponent.prototype.render = function render() {
    var items = this.props.items;

    if (items.length) {
      return _react2['default'].createElement(
        _economistComponentList2['default'],
        { className: _classnames2['default'](this.props.className) },
        items.map(this.renderChildComponent)
      );
    }
    return null;
  };

  _createClass(ListOfComponent, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        className: _react.PropTypes.string,
        items: _react.PropTypes.arrayOf(_react.PropTypes.object),
        component: _isProptypeComponent2['default'],
        sharedProps: _react.PropTypes.object
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        items: [],
        sharedProps: {}
      };
    }
  }]);

  return ListOfComponent;
})(_react2['default'].Component);

exports['default'] = ListOfComponent;
module.exports = exports['default'];