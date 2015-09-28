# component-win-navigation

## TODO

- [ ] Reclicking a category should not re-open it.
- [ ] Move isComponentType into its own file.
- [ ] Fix warnings of React-v0.14.0-rc.
- [ ] Fix unit tests. Use of some kind of match on everything deep equal helper.
- [ ] Refactor so that delegating elements are pass-through as opposed to knowing their arguments.
- [ ] Clicking outside of navigation component should reset its focus.
- [ ] Context-related hrefs generated from slugs.
      Article href will be like: `/article/${articleId}/${articleSlug}`
      Category urls ignored in case of client-side JavaScript, but if running without JavaScript then hitting the server with the URL postfixed with: `?category=${categorySlug}&subcategory=${subcategorySlug}`
- [ ] Clicking on the article-item should cause the active state to be set (through the HTML link).
- [ ] Dates can cause article items to be greyed out later and not contain links.
- [ ] `:hover` state should be pure CSS.
- [ ] [NPM or eslint need to fix a bug with estraverse not being installed. Until then we need to install it manually.](https://github.com/EconomistDigitalSolutions/fe-component-devpack/issues/18#issuecomment-142613986)
- [ ] Decide how the whole component or smaller parts can be shared with the rest of the Economist. Removing the `win-` prefix.
