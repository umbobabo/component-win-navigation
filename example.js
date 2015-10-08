'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('.');

var _2 = _interopRequireDefault(_);

var _testDataLarge = require('./test/data/large');

var _testDataLarge2 = _interopRequireDefault(_testDataLarge);

var navigationItems = _testDataLarge2['default'];
var focusCategorySlug = null;
var focusSubcategorySlug = null;
var activeCategorySlug = 'world';
var activeSubcategorySlug = 'africa';
var activeArticleId = 55;
exports['default'] = _react2['default'].createElement(_2['default'], {
  navigationItems: navigationItems,
  focusCategorySlug: focusCategorySlug,
  focusSubcategorySlug: focusSubcategorySlug,
  activeCategorySlug: activeCategorySlug,
  activeSubcategorySlug: activeSubcategorySlug,
  activeArticleId: activeArticleId
});
module.exports = exports['default'];