import React from 'react/addons';

import CategoryCard from '../category-card';

import ListOfComponent from '../list-of-component';
import Subcategory from '../subcategory';

const { createRenderer } = React.addons.TestUtils;
describe('CategoryCard', () => {

  it('is compatible with React.Component', () => {
    CategoryCard.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<CategoryCard title={'Here is a title'} />).should.equal(true);
  });

  describe('rendering', () => {
    /* eslint init-declarations: 0 */

    let renderer;
    beforeEach(() => {
      renderer = createRenderer();
    });

    it('renders unfocused and inactive', () => {
      renderer.render(
        <CategoryCard
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
        <nav className="navigation__category-card">
          <ListOfComponent
            className="navigation__subcategories"
            component={Subcategory}
            data={[]}
            childMetadata={childMetadata}
            handleFocusChange={null}
          />
        </nav>
      );
    });

    it('renders focused', () => {
      renderer.render(
        <CategoryCard
          childs={[]}
          slug={'make-me-focused'}
          focusCategorySlug={'make-me-focused'}
          focusSubcategorySlug={null}
          activeCategorySlug={null}
          activeSubcategorySlug={null}
          activeArticleId={null}
          handleFocusChange={null}
        />, {});
      const childMetadata = {
        focusCategorySlug: 'make-me-focused',
        focusSubcategorySlug: null,
        activeCategorySlug: null,
        activeSubcategorySlug: null,
        activeArticleId: null,
      };
      renderer.getRenderOutput().should.deep.equal(
        <nav className="navigation__category-card navigation__category-card--focus">
          <ListOfComponent
            className="navigation__subcategories"
            component={Subcategory}
            data={[]}
            childMetadata={childMetadata}
            handleFocusChange={null}
          />
        </nav>
      );
    });

    it('renders active', () => {
      renderer.render(
        <CategoryCard
          childs={[]}
          slug={'make-me-focused'}
          focusCategorySlug={null}
          focusSubcategorySlug={null}
          activeCategorySlug={'make-me-focused'}
          activeSubcategorySlug={null}
          activeArticleId={null}
          handleFocusChange={null}
        />, {});
      const childMetadata = {
        focusCategorySlug: null,
        focusSubcategorySlug: null,
        activeCategorySlug: 'make-me-focused',
        activeSubcategorySlug: null,
        activeArticleId: null,
      };
      renderer.getRenderOutput().should.deep.equal(
        <nav className="navigation__category-card navigation__category-card--active">
          <ListOfComponent
            className="navigation__subcategories"
            component={Subcategory}
            data={[]}
            childMetadata={childMetadata}
            handleFocusChange={null}
          />
        </nav>
      );
    });

  });

});
