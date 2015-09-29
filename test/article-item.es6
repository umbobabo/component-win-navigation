/* eslint no-console: 0, max-len: 0 */
import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);

import React from 'react/addons';

import ArticleItem from '../article-item';

const { createRenderer } = React.addons.TestUtils;
describe('ArticleItem', () => {

  it('is compatible with React.Component', () => {
    ArticleItem.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<ArticleItem title={'Here is a title'} />).should.equal(true);
  });

  describe('validates propTypes', () => {
    /* eslint init-declarations: 0 */

    let renderer;
    // We must check console.warn to test validation: http://stackoverflow.com/a/31835256/130566
    const oldConsoleError = console.error;
    beforeEach(() => {
      renderer = createRenderer();

      const spy = chai.spy(() => {});
      console.error = spy;
    });
    afterEach(() => {
      console.error = oldConsoleError;
    });

    it('requires a title', () => {
      renderer.render(<ArticleItem />, {});

      const message = 'Warning: Failed propType: Required prop `title` was not specified in `ArticleItem`.';
      console.error.should.have.been.called.with(message);
    });

  });

  describe('rendering', () => {
    /* eslint init-declarations: 0 */

    let renderer;
    beforeEach(() => {
      renderer = createRenderer();
    });

    it('renders inactive', () => {
      renderer.render(
        <ArticleItem
          title={'Here is my title'}
          text={'Here is my text'}
          slug={'here-is-my-text'}
          id={10}
        />, {});
      renderer.getRenderOutput().should.deep.equal(
        <a href="/article/10/here-is-my-text">
          <div className="navigation__article navigation__article--published">
            <h2 className="navigation__article-title">Here is my title</h2>
            <span className="navigation__article-text">Here is my text</span>
            <span className="navigation__article-published-state navigation__article-published-state--published">Published</span>
          </div>
        </a>
      );
    });

    it('renders active', () => {
      renderer.render(
        <ArticleItem
          id={25}
          title={'Here is my title'}
          text={'Here is my text'}
          slug={'here-is-my-text'}
          activeArticleId={25}
        />, {});
      renderer.getRenderOutput().should.deep.equal(
        <div className="navigation__article navigation__article--active navigation__article--published">
          <h2 className="navigation__article-title">Here is my title</h2>
          <span className="navigation__article-text">Here is my text</span>
          <span className="navigation__article-published-state navigation__article-published-state--published">Published</span>
        </div>
      );
    });

    it('renders unpublished', () => {
      renderer.render(
        <ArticleItem
          id={25}
          title={'Here is my title'}
          text={'Here is my text'}
          slug={'here-is-my-text'}
          activeArticleId={null}
          publishedOn={'2016-09-30'}
        />, {});
      renderer.getRenderOutput().should.deep.equal(
        <div className="navigation__article navigation__article--unpublished">
          <h2 className="navigation__article-title">Here is my title</h2>
          <span className="navigation__article-text">Here is my text</span>
          <span className="navigation__article-published-state navigation__article-published-state--unpublished">Coming soon</span>
        </div>
      );
    });

  });

});
