# component-win-navigation

## TODO

- [x] By default the first subcategory of a category should have focus.
- [x] Clicking a category or subcategory should change the focus.
- [x] Information on the `focus`ed category and subcategory passed into the parent component.
- [x] Information on the `active` category, subcategory, article passed into the parent component.
- [x] Add or remove the category-card or subcategory-card dependent on the focus property that is passed in.
- [ ] Context-related hrefs generated from slugs.
      Article href will be like: `/article/${articleId}/${articleSlug}`
      Category urls ignored in case of client-side JavaScript, but if running without JavaScript then hitting the server with the URL postfixed with: `?category=${categorySlug}&subcategory=${subcategorySlug}`
- [ ] Dates can cause article items to be greyed out later and not contain links.
- [ ] `:hover` state should be pure CSS.
- [ ] [NPM or eslint need to fix a bug with estraverse not being installed. Until then we need to install it manually.](https://github.com/EconomistDigitalSolutions/fe-component-devpack/issues/18#issuecomment-142613986)
- [ ] Decide how the whole component or smaller parts can be shared with the rest of the Economist. Removing the `win-` prefix.
