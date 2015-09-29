import React from 'react/addons';

import Category from '../category';
import CategoryCard from '../category-card';

const { createRenderer } = React.addons.TestUtils;
describe('Category', () => {

  it('is compatible with React.Component', () => {
    Category.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<Category title={'Here is a title'} slug={'here-is-my-title'} />).should.equal(true);
  });

  describe('rendering', () => {
    /* eslint init-declarations: 0 */

    let renderer;
    beforeEach(() => {
      renderer = createRenderer();
    });

    it('renders unfocused and inactive', () => {
      renderer.render(
        <Category
          title={'Here is my title'}
          slug={'here-is-my-title'}
          childs={[]}
        />, {});
      const renderOutput = renderer.getRenderOutput();
      const stubOnClick = renderOutput.props.children[0].props.children.props.onClick;
      renderOutput.should.deep.equal(
        <div className="navigation__category">
          <h2 className="navigation__category-title">
            <a href="here-is-my-title" onClick={stubOnClick}>Here is my title</a>
          </h2>
          {''}
        </div>
      );
    });

    it('renders focused', () => {
      renderer.render(
        <Category
          title={'Here is my title'}
          slug={'here-is-my-title'}
          childs={[]}
          focusCategorySlug={'here-is-my-title'}
        />, {});
      const renderOutput = renderer.getRenderOutput();
      const stubOnClick = renderOutput.props.children[0].props.children.props.onClick;
      renderOutput.should.deep.equal(
        <div className="navigation__category">
          <h2 className="navigation__category-title navigation__category-title--focus">
            <a href="here-is-my-title" onClick={stubOnClick}>Here is my title</a>
          </h2>
          <CategoryCard
            title={'Here is my title'}
            slug={'here-is-my-title'}
            childs={[]}
            focusCategorySlug={'here-is-my-title'}
          />
        </div>
      );
    });

    it('renders active', () => {
      renderer.render(
        <Category
          title={'Here is my title'}
          slug={'here-is-my-title'}
          childs={[]}
          activeCategorySlug={'here-is-my-title'}
        />, {});
      const renderOutput = renderer.getRenderOutput();
      const stubOnClick = renderOutput.props.children[0].props.children.props.onClick;
      renderOutput.should.deep.equal(
        <div className="navigation__category">
          <h2 className="navigation__category-title navigation__category-title--active">
            <a href="here-is-my-title" onClick={stubOnClick}>Here is my title</a>
          </h2>
          {''}
        </div>
      );
    });

  });

});
