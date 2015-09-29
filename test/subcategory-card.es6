import React from 'react/addons';

import SubcategoryCard from '../subcategory-card';

import ListOfComponent from '../list-of-component';
import ArticleItem from '../article-item';

const { createRenderer } = React.addons.TestUtils;
describe('SubcategoryCard', () => {

  it('is compatible with React.Component', () => {
    SubcategoryCard.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<SubcategoryCard title={'Here is a title'} />).should.equal(true);
  });

  describe('rendering', () => {
    /* eslint init-declarations: 0 */

    let renderer;
    beforeEach(() => {
      renderer = createRenderer();
    });

    it('renders unfocused and inactive', () => {
      renderer.render(
        <SubcategoryCard
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
            component={ArticleItem}
            data={[]}
            childMetadata={childMetadata}
          />
        </nav>
      );
    });

    it('renders focused', () => {
      renderer.render(
        <SubcategoryCard
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
            component={ArticleItem}
            data={[]}
            childMetadata={childMetadata}
          />
        </nav>
      );
    });

    it('renders active', () => {
      renderer.render(
        <SubcategoryCard
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
            component={ArticleItem}
            data={[]}
            childMetadata={childMetadata}
          />
        </nav>
      );
    });

  });

});
