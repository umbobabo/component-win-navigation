# [component-win-navigation](http://economist-components.github.io/component-library/#@economist/component-win-navigation)
> Multi-level navigation of articles.

Given a list of articles in a category/subcategory hierarchy, `Navigation` generates a nested list structure.

## Usage

[See `example.es6` for usage instructions.](./example.es6)

## Install

```
npm install --save @economist/component-win-navigation;
```

## Run tests

```
npm test;
```

## TODO

### Tests

- [ ] Write a `test/navigation.es6`.

### Refactor

- [ ] A short-circuiting is-proptype-component.
- [ ] Refactor so that delegating elements are pass-through as opposed to knowing their arguments. Potential use case for [context](https://discuss.reactjs.org/t/documentation-on-context/130).
- [ ] Remove the `win-` prefix, in a new version of the component. That is refactored, along these lines:
    - Look into how to correctly extend components using composition.
    See [react-router](https://github.com/gaearon/flux-react-router-example/blob/master/scripts/utils/connectToStores.js), [high order components](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750), and Relay.
    - The `data` is the data structure containing the navigation. `Navigation` is the component.
    - The hierarchy of a `data` can be as deep as is required.
    - `depth`s map to `NavigationItem` components:
      - `0` -> `CategoryNavigationItem`
      - `1` -> `SubcategoryNavigationItem`
      - `2` -> `ArticleNavigationItem`
      - This map is called the `navigationStructure`.
    - `NavigationItem`s may or may not contain `NavigationCard`s. The `NavigationItem` can have a `NavigationCard` (e.g. `CategoryNavigationCard` and `SubcategoryNavigationCard`).
    - `NavigationItem`s may contain a url generator, however this can be overloaded via injection; also, see react-router for its API.
    - The boolean 'if running within a desktop browser' that exists when setting the default subcategory (within the category-card) should be injectable, and otherwise might exist within the `ListOfComponent` itself through a flag.
    - The default components have win specific interfaces which should be fully tested. However, the internal components and the message passing should be generalised.
    - Original props sent into `Navigation` would be like `{ handlers: {}, optionN: '', ... }``
- [ ] Assets should be pulled in.
- [ ] Some of the CSS and fonts should be componentized.
- [ ] Write documentation.

### Functionality

- [ ] On mobile the categories should not be visible by default. They should become visible on focusing and unfocusing the `.navigation__menu-button`.
- [ ] Clicking outside of navigation component should reset its focus. See: https://github.com/Pomax/react-onclickoutside
Potentially need to wait for this: https://github.com/Pomax/react-onclickoutside/issues/18#issuecomment-137430184

### Fix

- [ ] Add some isRequired to some of the propTypes, and test for their inclusion.
- [ ] Define working anchors for categories and subcategories that are used with JavaScript and without.
- [ ] [NPM or eslint need to fix a bug with estraverse not being installed. Until then we need to install it manually.](https://github.com/EconomistDigitalSolutions/fe-component-devpack/issues/18#issuecomment-142613986)

### New components (extended design)

- [ ] Page indicator mini component for the subcategory component.
- [ ] Page prev/next links component for the subcategory-card component.
