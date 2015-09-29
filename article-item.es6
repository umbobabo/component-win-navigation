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
    slug
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
    const { title, text, slug, id, activeArticleId } = this.props;
    const isActive = id && id === activeArticleId;
    const containerClasses = classes({
      'navigation__article': true,
      'navigation__article--active': isActive,
    });

    const body = (
      <div className={containerClasses}>
        <h2 className="navigation__article-title">{title}</h2>
        <span>{text}</span>
      </div>
    );

    if (isActive) {
      return body;
    }

    return (
      <a href={articleUrl(id, slug)}>
        {body}
      </a>
    );
  }

}
