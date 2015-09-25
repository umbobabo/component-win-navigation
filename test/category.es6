import React from 'react/addons';

import Category from '../category';
import CategoryCard from '../category-card';

const TestUtils = React.addons.TestUtils;
describe('Category', () => {

  it('is compatible with React.Component', () => {
    Category.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<Category title={'Here is a title'} slug={'here-is-my-title'} />).should.equal(true);
  });

  describe('rendering', () => {

    const renderer = TestUtils.createRenderer();
    it('renders a basic category', () => {
      renderer.render(<Category title={'Here is my title'} slug={'here-is-my-title'} childs={[]} />);
      renderer.getRenderOutput().should.deep.equal(
        <div className="navigation__category">
          <h2 className="navigation__category-title"><a href="here-is-my-title">Here is my title</a></h2>
          <CategoryCard title={'Here is my title'} slug={'here-is-my-title'} childs={[]} />
        </div>
      );
    });

  });

});
