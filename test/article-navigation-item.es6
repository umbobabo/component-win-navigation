/* eslint max-len: 0 */
import React from 'react/addons';
import ArticleNavigationItem from '../article-navigation-item';
const { createRenderer } = React.addons.TestUtils;
describe('ArticleNavigationItem', () => {

  it('is compatible with React.Component', () => {
    ArticleNavigationItem.should.be.a('function').and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(
      <ArticleNavigationItem
        slug={'here-is-a-title'}
        title={'Here is a title'}
      />
    ).should.equal(true);
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
          id={10} // eslint-disable-line
        />, {});
      const out = renderer.getRenderOutput();
      out.should.deep.equal(
        <a href="/article/10/here-is-my-text" onClick={out.props.onClick}>
          <div className="navigation__article navigation__article-here-is-my-text navigation__article--published">
            <h4 className="navigation__article-title">Here is my title</h4>
            <span className="navigation__article-text">Here is my text</span>
            <span className="navigation__article-published-state navigation__article-published-state--published">Published</span>
          </div>
        </a>
      );
    });

    it('renders active', () => {
      renderer.render(
        <ArticleNavigationItem
          id={25} // eslint-disable-line
          title={'Here is my title'}
          text={'Here is my text'}
          slug={'here-is-my-text'}
          activeArticleId={25} // eslint-disable-line
        />, {});
      renderer.getRenderOutput().should.deep.equal(
        <div className="navigation__article navigation__article-here-is-my-text navigation__article--active navigation__article--published">
          <h4 className="navigation__article-title">Here is my title</h4>
          <span className="navigation__article-text">Here is my text</span>
          <span className="navigation__article-published-state navigation__article-published-state--published">Published</span>
        </div>
      );
    });

    it('renders unpublished', () => {
      renderer.render(
        <ArticleNavigationItem
          id={25} // eslint-disable-line
          title={'Here is my title'}
          text={'Here is my text'}
          slug={'here-is-my-text'}
          activeArticleId={null}
          publishedOn={'2016-09-30'}
        />, {});
      renderer.getRenderOutput().should.deep.equal(
        <div className="navigation__article navigation__article-here-is-my-text navigation__article--unpublished">
          <h4 className="navigation__article-title">Here is my title</h4>
          <span className="navigation__article-text">Here is my text</span>
          <span className="navigation__article-published-state navigation__article-published-state--unpublished">Coming soon</span>
        </div>
      );
    });
  });
});
