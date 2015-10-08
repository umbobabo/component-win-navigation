import React from 'react/addons';

import CategoryNavigationCard from '../category-navigation-card';

import ListOfComponent from '../list-of-component';
import SubcategoryNavigationItem from '../subcategory-navigation-item';

const { createRenderer } = React.addons.TestUtils;
describe('CategoryNavigationCard', () => {

  it('is compatible with React.Component', () => {
    CategoryNavigationCard.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(
      <CategoryNavigationCard
        slug={'here-is-a-title'}
      />
    ).should.equal(true);
  });

  describe('rendering', () => {
    /* eslint init-declarations: 0 */

    let renderer;
    beforeEach(() => {
      renderer = createRenderer();
    });

    it('renders unfocused and inactive', () => {
      renderer.render(
        <CategoryNavigationCard
          navigationItems={[]}
          focusCategorySlug={null}
          focusSubcategorySlug={null}
          activeCategorySlug={null}
          activeSubcategorySlug={null}
          activeArticleId={null}
          handleFocusChange={null}
        />, {});
      const sharedProps = {
        focusCategorySlug: null,
        focusSubcategorySlug: null,
        activeCategorySlug: null,
        activeSubcategorySlug: null,
        activeArticleId: null,
        handleFocusChange: null,
      };
      renderer.getRenderOutput().should.deep.equal(
        <nav className="navigation__category-card">
          <ListOfComponent
            className="navigation__subcategories"
            component={SubcategoryNavigationItem}
            items={[]}
            sharedProps={sharedProps}
          />
        </nav>
      );
    });

    it('renders focused', () => {
      renderer.render(
        <CategoryNavigationCard
          navigationItems={[]}
          slug={'make-me-focused'}
          focusCategorySlug={'make-me-focused'}
          focusSubcategorySlug={null}
          activeCategorySlug={null}
          activeSubcategorySlug={null}
          activeArticleId={null}
          handleFocusChange={null}
        />, {});
      const sharedProps = {
        focusCategorySlug: 'make-me-focused',
        focusSubcategorySlug: null,
        activeCategorySlug: null,
        activeSubcategorySlug: null,
        activeArticleId: null,
        handleFocusChange: null,
      };
      renderer.getRenderOutput().should.deep.equal(
        <nav className="navigation__category-card navigation__category-card--focus">
          <ListOfComponent
            className="navigation__subcategories"
            component={SubcategoryNavigationItem}
            items={[]}
            sharedProps={sharedProps}
          />
        </nav>
      );
    });

    it('renders active', () => {
      renderer.render(
        <CategoryNavigationCard
          navigationItems={[]}
          slug={'make-me-focused'}
          focusCategorySlug={null}
          focusSubcategorySlug={null}
          activeCategorySlug={'make-me-focused'}
          activeSubcategorySlug={null}
          activeArticleId={null}
          handleFocusChange={null}
        />, {});
      const sharedProps = {
        focusCategorySlug: null,
        focusSubcategorySlug: null,
        activeCategorySlug: 'make-me-focused',
        activeSubcategorySlug: null,
        activeArticleId: null,
        handleFocusChange: null,
      };
      renderer.getRenderOutput().should.deep.equal(
        <nav className="navigation__category-card navigation__category-card--active">
          <ListOfComponent
            className="navigation__subcategories"
            component={SubcategoryNavigationItem}
            items={[]}
            sharedProps={sharedProps}
          />
        </nav>
      );
    });

  });

});
