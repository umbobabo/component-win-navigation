# [component-win-navigation](http://economist-components.github.io/component-library/#@economist/component-win-navigation)
> Multi-level navigation of articles.

Given `navigationItems` (a list of articles held within a category/subcategory hierarchy), `Navigation` generates a nested list structure with focus and active states.

State is held within the parent component, and clicking on a child `NavigationItem`s modifies it. The resultant nested list structure is decorated with `--focus` and `--active` classes.

## [Example `navigationItems` hierarchy](./test/data/large.json)

```json
[
  {
    title: 'World',
    slug: 'world',
    navigationItems: [
      {
        title: 'Britain',
        slug: 'britain',
        navigationItems: [
          {
            id: 10,
            slug: 'coalition-the-sequel',
            title: 'Coalition, the Sequel',
            text: 'Hung Parliament'
          }
        ]
      }
    ]
  }
]
```

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
