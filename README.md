# component-win-navigation

## TODO

- [ ] Decide how the whole component or smaller parts can be shared with the rest of the Economist. Removing the `win-` prefix.
- [ ] Refactor so that delegating elements are pass-through as opposed to knowing their arguments.
- [ ] Page indicator mini component for the subcategory component.
- [ ] Page prev/next links component for the subcategory-card component.
- [ ] Clicking outside of navigation component should reset its focus. See: https://github.com/Pomax/react-onclickoutside
Potentially need to wait for this: https://github.com/Pomax/react-onclickoutside/issues/18#issuecomment-137430184
- [ ] Clicking on the article-item should cause the active state to be set (through the HTML link).
- [ ] [NPM or eslint need to fix a bug with estraverse not being installed. Until then we need to install it manually.](https://github.com/EconomistDigitalSolutions/fe-component-devpack/issues/18#issuecomment-142613986)
- [?] Context-related hrefs generated from slugs.
      Article href will be like: `/article/${articleId}/${articleSlug}`
      Category urls ignored in case of client-side JavaScript, but if running without JavaScript then hitting the server with the URL postfixed with: `?category=${categorySlug}&subcategory=${subcategorySlug}`
