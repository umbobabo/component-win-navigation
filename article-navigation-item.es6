/* eslint id-length: 0 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';

function articleUrl(id, slug) {
  const urlParts = [
    '/article',
    id,
    slug,
  ].filter((val) => val);
  return urlParts.join('/');
}

export default class ArticleNavigationItem extends React.Component {

  static get propTypes() {
    return {
      className: PropTypes.string,
      slug: PropTypes.string,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      publishedOn: PropTypes.string,
      activeArticleId: PropTypes.number,
    };
  }

  render() {
    const { title, text, slug, id, activeArticleId, publishedOn } = this.props;
    const isActive = Boolean(id) && id === activeArticleId;
    const isNotPublished = Boolean(publishedOn);
    const containerClasses = {
      'navigation__article--active': isActive,
      'navigation__article--unpublished': isNotPublished,
      'navigation__article--published': !isNotPublished,
    };
    const publishedStateClasses = {
      'navigation__article-published-state': true,
      'navigation__article-published-state--unpublished': isNotPublished,
      'navigation__article-published-state--published': !isNotPublished,
    };
    const slugClass = slug && [ 'navigation__article', slug ].filter((val) => val).join('-');
    const body = (
      <div className={classnames(this.props.className, 'navigation__article', slugClass, containerClasses)}>
        <h4 className="navigation__article-title">{title}</h4>
        <span className="navigation__article-text">{text}</span>
        <span className={classnames(publishedStateClasses)}>{isNotPublished ? 'Coming soon' : 'Published'}</span>
      </div>
    );
    if (isActive) {
      return body;
    }
    if (isNotPublished) {
      return body;
    }

    return (
      <a href={articleUrl(id, slug)}>
        {body}
      </a>
    );
  }

}
