/* eslint id-length: 0 */
import React, { PropTypes } from 'react';
import classes from 'classnames';

function identity(v) {
  return v;
}

function articleUrl(id, slug) {
  const urlParts = [
    '/article',
    id,
    slug,
  ].filter(identity);
  return urlParts.join('/');
}

export default class ArticleItem extends React.Component {

  static get propTypes() {
    return {
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      id: PropTypes.number,
      slug: PropTypes.string,
      publishedOn: PropTypes.string,
      activeArticleId: PropTypes.number,
    };
  }

  render() {
    const { title, text, slug, id, activeArticleId, publishedOn } = this.props;
    const isActive = Boolean(id) && id === activeArticleId;
    const isNotPublished = Boolean(publishedOn);
    const containerClasses = classes({
      'navigation__article': true,
      'navigation__article--active': isActive,
      'navigation__article--unpublished': isNotPublished,
      'navigation__article--published': !isNotPublished,
    });
    const publishedStateClasses = classes({
      'navigation__article-published-state': true,
      'navigation__article-published-state--unpublished': isNotPublished,
      'navigation__article-published-state--published': !isNotPublished,
    });
    const body = (
      <div className={containerClasses}>
        <h2 className="navigation__article-title">{title}</h2>
        <span className="navigation__article-text">{text}</span>
        <span className={publishedStateClasses}>{isNotPublished ? 'Coming soon' : 'Published'}</span>
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
