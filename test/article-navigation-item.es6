/* eslint no-console: 0, max-len: 0 */
import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);

import React from 'react/addons';

import ArticleNavigationItem from '../article-navigation-item';

const { createRenderer } = React.addons.TestUtils;
describe('ArticleNavigationItem', () => {

  it('is compatible with React.Component', () => {
    ArticleNavigationItem.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(
      <ArticleNavigationItem title={'Here is a title'} />
    ).should.equal(true);
  });

  xdescribe('validates propTypes', () => {
    /* eslint init-declarations: 0 */

    let renderer;
    // We must check console.warn to test validation: http://stackoverflow.com/a/31835256/130566
    const oldConsoleWarn = console.warn.bind(console);
    beforeEach(() => {
      renderer = createRenderer();

      const spy = chai.spy(() => {});
      console.warn = spy;
    });
    afterEach(() => {
      console.warn = oldConsoleWarn;
    });

    it('requires an id', () => {
      renderer.render(<ArticleNavigationItem title={'stub-title'} />, {});

      const message = 'Warning: Failed propType: Required prop `id` was not specified in `ArticleItem`.';
      console.warn.should.have.been.called.with(message);
    });

    it('requires a title', () => {
      renderer.render(<ArticleNavigationItem id={1} />, {});

      const message = 'Warning: Failed propType: Required prop `title` was not specified in `ArticleItem`.';
      console.warn.should.have.been.called.with(message);
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
        <ArticleNavigationItem
          title={'Here is my title'}
          text={'Here is my text'}
          slug={'here-is-my-text'}
          id={10}
        />, {});
      renderer.getRenderOutput().should.deep.equal(
        <a href="/article/10/here-is-my-text">
          <div className="navigation__article navigation__article-here-is-my-text navigation__article--published">
            <h2 className="navigation__article-title">Here is my title</h2>
            <span className="navigation__article-text">Here is my text</span>
            <span className="navigation__article-published-state navigation__article-published-state--published">Published</span>
          </div>
        </a>
      );
    });

    it('renders active', () => {
      renderer.render(
        <ArticleNavigationItem
          id={25}
          title={'Here is my title'}
          text={'Here is my text'}
          slug={'here-is-my-text'}
          activeArticleId={25}
        />, {});
      renderer.getRenderOutput().should.deep.equal(
        <div className="navigation__article navigation__article-here-is-my-text navigation__article--active navigation__article--published">
          <h2 className="navigation__article-title">Here is my title</h2>
          <span className="navigation__article-text">Here is my text</span>
          <span className="navigation__article-published-state navigation__article-published-state--published">Published</span>
        </div>
      );
    });

    it('renders unpublished', () => {
      renderer.render(
        <ArticleNavigationItem
          id={25}
          title={'Here is my title'}
          text={'Here is my text'}
          slug={'here-is-my-text'}
          activeArticleId={null}
          publishedOn={'2016-09-30'}
        />, {});
      renderer.getRenderOutput().should.deep.equal(
        <div className="navigation__article navigation__article-here-is-my-text navigation__article--unpublished">
          <h2 className="navigation__article-title">Here is my title</h2>
          <span className="navigation__article-text">Here is my text</span>
          <span className="navigation__article-published-state navigation__article-published-state--unpublished">Coming soon</span>
        </div>
      );
    });

  });

});
