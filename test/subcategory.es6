import React from 'react/addons';

import Subcategory from '../subcategory';
import SubcategoryCard from '../subcategory-card';

const TestUtils = React.addons.TestUtils;
describe('Subcategory', () => {

  it('is compatible with React.Component', () => {
    Subcategory.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<Subcategory title={'Here is a title'} />).should.equal(true);
  });

  describe('rendering', () => {

    const renderer = TestUtils.createRenderer();
    it('renders a basic subcategory', () => {
      renderer.render(<Subcategory title={'Here is my title'} slug={'here-is-my-title'} childs={[]} />);
      renderer.getRenderOutput().should.deep.equal(
        <div className="navigation__subcategory">
          <h2 className="navigation__subcategory-title"><a href="here-is-my-title">Here is my title</a></h2>
          <SubcategoryCard title={'Here is my title'} slug={'here-is-my-title'} childs={[]} />
        </div>
      );
    });

  });

});
