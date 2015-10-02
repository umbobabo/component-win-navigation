import React from 'react/addons';

import SubcategoryNavigationCard from '../subcategory-navigation-card';

import ListOfComponent from '../list-of-component';
import ArticleNavigationItem from '../article-navigation-item';

const { createRenderer } = React.addons.TestUtils;
describe('SubcategoryNavigationCard', () => {

  it('is compatible with React.Component', () => {
    SubcategoryNavigationCard.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(
      <SubcategoryNavigationCard title={'Here is a title'} />
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
        <SubcategoryNavigationCard
          childs={[]}
          focusCategorySlug={null}
          focusSubcategorySlug={null}
          activeCategorySlug={null}
          activeSubcategorySlug={null}
          activeArticleId={null}
          handleFocusChange={null}
        />, {});
      const childMetadata = {
        activeArticleId: null,
      };
      renderer.getRenderOutput().should.deep.equal(
        <nav className="navigation__subcategory-card">
          <ListOfComponent
            className="navigation__articles"
            component={ArticleNavigationItem}
            data={[]}
            childMetadata={childMetadata}
          />
        </nav>
      );
    });

    it('renders focused', () => {
      renderer.render(
        <SubcategoryNavigationCard
          childs={[]}
          slug={'make-me-focused'}
          focusCategorySlug={null}
          focusSubcategorySlug={'make-me-focused'}
          activeCategorySlug={null}
          activeSubcategorySlug={null}
          activeArticleId={null}
          handleFocusChange={null}
        />, {});
      const childMetadata = {
        activeArticleId: null,
      };
      renderer.getRenderOutput().should.deep.equal(
        <nav className="navigation__subcategory-card navigation__subcategory-card--focus">
          <ListOfComponent
            className="navigation__articles"
            component={ArticleNavigationItem}
            data={[]}
            childMetadata={childMetadata}
          />
        </nav>
      );
    });

    it('renders active', () => {
      renderer.render(
        <SubcategoryNavigationCard
          childs={[]}
          slug={'make-me-focused'}
          focusCategorySlug={null}
          focusSubcategorySlug={null}
          activeCategorySlug={null}
          activeSubcategorySlug={'make-me-focused'}
          activeArticleId={null}
          handleFocusChange={null}
        />, {});
      const childMetadata = {
        activeArticleId: null,
      };
      renderer.getRenderOutput().should.deep.equal(
        <nav className="navigation__subcategory-card navigation__subcategory-card--active">
          <ListOfComponent
            className="navigation__articles"
            component={ArticleNavigationItem}
            data={[]}
            childMetadata={childMetadata}
          />
        </nav>
      );
    });

  });

});
