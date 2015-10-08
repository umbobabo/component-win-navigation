/* eslint id-length: 0 */

export function navigationOpenUrl(oldFocusNavigation) {
  return `?navigation=${!oldFocusNavigation}`;
}

export function categoryUrl(category) {
  return `?navigation=true&category=${category}`;
}

export function subcategoryUrl(category, subcategory) {
  return `?navigation=true&category=${category}&subcategory=${subcategory}`;
}

export function articleUrl(id, slug) {
  const urlParts = [
    '/article',
    id,
    slug,
  ].filter((val) => val);
  return urlParts.join('/');
}
