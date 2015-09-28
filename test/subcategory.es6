import React from 'react/addons';

import Subcategory from '../subcategory';
// import SubcategoryCard from '../subcategory-card';

const { createRenderer } = React.addons.TestUtils;
describe('Subcategory', () => {

  it('is compatible with React.Component', () => {
    Subcategory.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<Subcategory title={'Here is a title'} />).should.equal(true);
  });

  describe('rendering', () => {
    /* eslint init-declarations: 0 */

    let renderer;
    beforeEach(() => {
      renderer = createRenderer();
    });

    it('renders a basic subcategory', () => {
      renderer.render(<Subcategory title={'Here is my title'} slug={'here-is-my-title'} childs={[]} />, {});
      const renderOutput = renderer.getRenderOutput();
      const stubOnClick = renderOutput.props.children[0].props.children.props.onClick;
      renderOutput.should.deep.equal(
        <div className="navigation__subcategory">
          <h2 className="navigation__subcategory-title">
            <a href="here-is-my-title" onClick={stubOnClick}>Here is my title</a>
          </h2>
          {''}
        </div>
      );
    });

  });

});
