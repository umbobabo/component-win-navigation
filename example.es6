import React from 'react';

import Navigation from '.';
import json from './test/data/large';

const navigationItems = json;
const focusCategorySlug = null;
const focusSubcategorySlug = null;
const activeCategorySlug = 'world';
const activeSubcategorySlug = 'africa';
const activeArticleId = 55;
export default (
  <Navigation
    navigationItems={navigationItems}
    focusCategorySlug={focusCategorySlug}
    focusSubcategorySlug={focusSubcategorySlug}
    activeCategorySlug={activeCategorySlug}
    activeSubcategorySlug={activeSubcategorySlug}
    activeArticleId={activeArticleId}
  />
);
