import React from 'react/addons';

import RootNavigationCard from '../root-navigation-card';

import ListOfComponent from '../list-of-component';
import CategoryNavigationItem from '../category-navigation-item';

const { createRenderer } = React.addons.TestUtils;
describe('RootNavigationCard', () => {

  it('is compatible with React.Component', () => {
    RootNavigationCard.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(
      <RootNavigationCard title={'Here is a title'} />
    ).should.equal(true);
  });

  describe('rendering', () => {
    /* eslint init-declarations: 0 */

    let renderer;
    beforeEach(() => {
      renderer = createRenderer();
    });

    it('renders unfocused', () => {
      renderer.render(
        <RootNavigationCard
          childs={[]}
          focusCategorySlug={null}
          focusSubcategorySlug={null}
          activeCategorySlug={null}
          activeSubcategorySlug={null}
          activeArticleId={null}
          handleFocusChange={null}
        />, {});
      const childMetadata = {
        focusCategorySlug: null,
        focusSubcategorySlug: null,
        activeCategorySlug: null,
        activeSubcategorySlug: null,
        activeArticleId: null,
      };
      renderer.getRenderOutput().should.deep.equal(
        <nav className="navigation__root-card">
          <h1 className="navigation__header navigation__header--hidden">Menu</h1>
          <ListOfComponent
            className="navigation__categories"
            component={CategoryNavigationItem}
            data={[]}
            childMetadata={childMetadata}
            handleFocusChange={null}
          />
        </nav>
      );
    });

    it('renders focused', () => {
      renderer.render(
        <RootNavigationCard
          childs={[]}
          focusNavigation
          focusCategorySlug={null}
          focusSubcategorySlug={null}
          activeCategorySlug={null}
          activeSubcategorySlug={null}
          activeArticleId={null}
          handleFocusChange={null}
        />, {});
      const childMetadata = {
        focusCategorySlug: null,
        focusSubcategorySlug: null,
        activeCategorySlug: null,
        activeSubcategorySlug: null,
        activeArticleId: null,
      };
      renderer.getRenderOutput().should.deep.equal(
        <nav className="navigation__root-card navigation__root-card--focus">
          <h1 className="navigation__header navigation__header--hidden">Menu</h1>
          <ListOfComponent
            className="navigation__categories"
            component={CategoryNavigationItem}
            data={[]}
            childMetadata={childMetadata}
            handleFocusChange={null}
          />
        </nav>
      );
    });

  });

});
