import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);

import React from 'react/addons';

import CategoryNavigationItem from '../category-navigation-item';
import CategoryNavigationCard from '../category-navigation-card';

const fakeSyntheticMouseEvent = {
  preventDefault: () => {},
};

const { createRenderer } = React.addons.TestUtils;
describe('CategoryNavigationItem', () => {

  it('is compatible with React.Component', () => {
    CategoryNavigationItem.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(
      <CategoryNavigationItem title={'Here is a title'} slug={'here-is-my-title'} />
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
        <CategoryNavigationItem
          title={'Here is my title'}
          slug={'here-is-my-title'}
          childs={[]}
        />, {});
      const renderOutput = renderer.getRenderOutput();
      const stubOnClick = renderOutput.props.children[0].props.children.props.onClick;
      renderOutput.should.deep.equal(
        <div className="navigation__category navigation__category-here-is-my-title">
          <h2 className="navigation__category-title">
            <a href="?category=here-is-my-title" onClick={stubOnClick}>Here is my title</a>
          </h2>
          {''}
        </div>
      );
    });

    it('renders focused', () => {
      renderer.render(
        <CategoryNavigationItem
          title={'Here is my title'}
          slug={'here-is-my-title'}
          childs={[]}
          focusCategorySlug={'here-is-my-title'}
        />, {});
      const renderOutput = renderer.getRenderOutput();
      const stubOnClick = renderOutput.props.children[0].props.children.props.onClick;
      renderOutput.should.deep.equal(
        <div className="navigation__category navigation__category-here-is-my-title">
          <h2 className="navigation__category-title navigation__category-title--focus">
            <a href="?category=here-is-my-title" onClick={stubOnClick}>Here is my title</a>
          </h2>
          <CategoryNavigationCard
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
        <CategoryNavigationItem
          title={'Here is my title'}
          slug={'here-is-my-title'}
          childs={[]}
          activeCategorySlug={'here-is-my-title'}
        />, {});
      const renderOutput = renderer.getRenderOutput();
      const stubOnClick = renderOutput.props.children[0].props.children.props.onClick;
      renderOutput.should.deep.equal(
        <div className="navigation__category navigation__category-here-is-my-title">
          <h2 className="navigation__category-title navigation__category-title--active">
            <a href="?category=here-is-my-title" onClick={stubOnClick}>Here is my title</a>
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
        <CategoryNavigationItem
          title={'The category'}
          slug={'the-category'}
          focusCategorySlug={null}
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
        focusCategorySlug: 'the-category',
        focusSubcategorySlug: null,
      });
    });

    it('defocuses when clicked and already focused', () => {
      const handleFocusChangeSpy = chai.spy();
      renderer.render(
        <CategoryNavigationItem
          title={'The category'}
          slug={'the-category'}
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
        focusCategorySlug: 'the-category:focus-off',
        focusSubcategorySlug: null,
      });
    });

  });

});
