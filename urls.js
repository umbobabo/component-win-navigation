/* eslint id-length: 0 */

'use strict';

exports.__esModule = true;
exports.navigationOpenUrl = navigationOpenUrl;
exports.categoryUrl = categoryUrl;
exports.subcategoryUrl = subcategoryUrl;
exports.articleUrl = articleUrl;

function navigationOpenUrl(oldFocusNavigation) {
  return '?navigation=' + !oldFocusNavigation;
}

function categoryUrl(category) {
  return '?navigation=true&category=' + category;
}

function subcategoryUrl(category, subcategory) {
  return '?navigation=true&category=' + category + '&subcategory=' + subcategory;
}

function articleUrl(id, slug) {
  var urlParts = ['/article', id, slug].filter(function (val) {
    return val;
  });
  return urlParts.join('/');
}