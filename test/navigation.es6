import React from 'react/addons';

import Navigation from '../navigation';

import ListOfComponent from '../list-of-component';
import CategoryNavigationItem from '../category-navigation-item';

const { createRenderer } = React.addons.TestUtils;
describe('Navigation', () => {

  it('is compatible with React.Component', () => {
    Navigation.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(
      <Navigation title={'Here is a title'} slug={'here-is-my-title'} />
    ).should.equal(true);
  });

  describe('rendering', () => {
    /* eslint init-declarations: 0 */

    let renderer;
    beforeEach(() => {
      renderer = createRenderer();
    });

    // This test should not be run until a bug in React is fixed.
    // Shallow rendering is broken when `componentWillMount` calls `setState`.
    // See: https://github.com/facebook/react/issues/4461#issuecomment-144753237
    xit('renders', () => {
      const navigationItems = [];
      renderer.render(
        <Navigation
          navigationItems={navigationItems}
        />, {});
      const renderOutput = renderer.getRenderOutput();

      const stubFocusChange = renderOutput.props.children[0].props.handleFocusChange;
      const sharedProps = {
        focusCategorySlug: null,
        focusSubcategorySlug: null,
        activeCategorySlug: null,
        activeSubcategorySlug: null,
        activeArticleId: null,
        handleFocusChange: stubFocusChange,
      };
      renderOutput.should.deep.equal(
        <nav
          role="navigation"
          className={'navigation'}
        >
          <ListOfComponent
            className="navigation__categories"
            component={CategoryNavigationItem}
            items={navigationItems}
            sharedProps={sharedProps}
          />
          <div className="navigation__menu-button"></div>
        </nav>
      );
    });

  });

});
