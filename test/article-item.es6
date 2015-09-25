/* eslint no-console: 0 */
import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);

import React from 'react/addons';

import ArticleItem from '../article-item';

const TestUtils = React.addons.TestUtils;
describe('ArticleItem', () => {

  it('is compatible with React.Component', () => {
    ArticleItem.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<ArticleItem title={'Here is a title'} />).should.equal(true);
  });

  describe('validates propTypes', () => {

    const renderer = TestUtils.createRenderer();

    // We must check console.warn to test validation: http://stackoverflow.com/a/31835256/130566
    const oldConsoleWarn = console.warn;
    beforeEach(() => {
      const spy = chai.spy(() => {});
      console.warn = spy;
    });
    afterEach(() => {
      console.warn = oldConsoleWarn;
    });

    it('requires a title', () => {
      renderer.render(<ArticleItem />);

      const message = 'Warning: Failed propType: Required prop `title` was not specified in `ArticleItem`.';
      console.warn.should.have.been.called.with(message);
    });

  });

  describe('rendering', () => {

    const renderer = TestUtils.createRenderer();
    it('renders a basic article item', () => {
      renderer.render(<ArticleItem title={'Here is my title'} text={'Here is my text'} />);
      renderer.getRenderOutput().should.deep.equal(
        <div className="navigation__article">
          <h2 className="navigation__article-title">Here is my title</h2>
          <span>Here is my text</span>
        </div>
      );
    });

  });

});
