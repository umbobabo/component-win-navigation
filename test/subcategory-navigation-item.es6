import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);

/* eslint max-len: 0 */
import React from 'react/addons';

import SubcategoryNavigationItem from '../subcategory-navigation-item';
import SubcategoryNavigationCard from '../subcategory-navigation-card';

const fakeSyntheticMouseEvent = {
  preventDefault: () => {},
};

const { createRenderer } = React.addons.TestUtils;
describe('SubcategoryNavigationItem', () => {

  it('is compatible with React.Component', () => {
    SubcategoryNavigationItem.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(
      <SubcategoryNavigationItem title={'Here is a title'} />
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
        <SubcategoryNavigationItem
          title={'Here is my title'}
          slug={'here-is-my-title'}
          focusCategorySlug={'previously-selected-category'}
          childs={[]}
        />, {});
      const renderOutput = renderer.getRenderOutput();
      const stubOnClick = renderOutput.props.children[0].props.children.props.onClick;
      renderOutput.should.deep.equal(
        <div className="navigation__subcategory navigation__subcategory-here-is-my-title">
          <h2 className="navigation__subcategory-title">
            <a href="?category=previously-selected-category&subcategory=here-is-my-title" onClick={stubOnClick}>Here is my title</a>
          </h2>
          {''}
        </div>
      );
    });

    it('renders focused', () => {
      renderer.render(
        <SubcategoryNavigationItem
          title={'Here is my title'}
          slug={'here-is-my-title'}
          focusCategorySlug={'previously-selected-category'}
          focusSubcategorySlug={'here-is-my-title'}
          childs={[]}
        />, {});
      const renderOutput = renderer.getRenderOutput();
      const stubOnClick = renderOutput.props.children[0].props.children.props.onClick;
      renderOutput.should.deep.equal(
        <div className="navigation__subcategory navigation__subcategory-here-is-my-title">
          <h2 className="navigation__subcategory-title navigation__subcategory-title--focus">
            <a href="?category=previously-selected-category&subcategory=here-is-my-title" onClick={stubOnClick}>Here is my title</a>
          </h2>
          <SubcategoryNavigationCard
            title={'Here is my title'}
            slug={'here-is-my-title'}
            focusCategorySlug={'previously-selected-category'}
            focusSubcategorySlug={'here-is-my-title'}
            childs={[]}
          />
        </div>
      );
    });

    it('renders active', () => {
      renderer.render(
        <SubcategoryNavigationItem
          title={'Here is my title'}
          slug={'here-is-my-title'}
          focusCategorySlug={'previously-selected-category'}
          activeSubcategorySlug={'here-is-my-title'}
          childs={[]}
        />, {});
      const renderOutput = renderer.getRenderOutput();
      const stubOnClick = renderOutput.props.children[0].props.children.props.onClick;
      renderOutput.should.deep.equal(
        <div className="navigation__subcategory navigation__subcategory-here-is-my-title">
          <h2 className="navigation__subcategory-title navigation__subcategory-title--active">
            <a href="?category=previously-selected-category&subcategory=here-is-my-title" onClick={stubOnClick}>Here is my title</a>
          </h2>
          {''}
        </div>
      );
    });

  });

  describe('focusing', () => {
    /* eslint init-declarations: 0 */

    let renderer;
    beforeEach(() => {
      renderer = createRenderer();
    });

    it('focuses when clicked and not focused', () => {
      const handleFocusChangeSpy = chai.spy();
      renderer.render(
        <SubcategoryNavigationItem
          title={'The subcategory'}
          slug={'the-subcategory'}
          focusCategorySlug={'the-category'}
          childs={[]}
          handleFocusChange={handleFocusChangeSpy}
        />, {});
      const renderOutput = renderer.getRenderOutput();
      // It would be nice to use `Simulate.click` here but it's not supported
      // [yet](https://github.com/facebook/react/issues/1445) for shallow
      // rendering, so...
      const clicker = renderOutput.props.children[0].props.children.props.onClick;
      clicker(fakeSyntheticMouseEvent);
      handleFocusChangeSpy.should.have.been.called.with({
        focusSubcategorySlug: 'the-subcategory',
      });
    });

    it('defocuses when clicked and already focused', () => {
      const handleFocusChangeSpy = chai.spy();
      renderer.render(
        <SubcategoryNavigationItem
          title={'The subcategory'}
          slug={'the-subcategory'}
          focusCategorySlug={'the-category'}
          focusSubcategorySlug={'the-subcategory'}
          childs={[]}
          handleFocusChange={handleFocusChangeSpy}
        />, {});
      const renderOutput = renderer.getRenderOutput();
      // It would be nice to use `Simulate.click` here but it's not supported
      // [yet](https://github.com/facebook/react/issues/1445) for shallow
      // rendering, so...
      const clicker = renderOutput.props.children[0].props.children.props.onClick;
      clicker(fakeSyntheticMouseEvent);
      handleFocusChangeSpy.should.have.been.called.with({
        focusSubcategorySlug: 'the-subcategory:focus-off',
      });
    });

  });

});
