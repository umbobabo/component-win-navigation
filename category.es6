import React from 'react/addons';

import CategoryCard from './category-card';

export default class Category extends React.Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string,
      href: React.PropTypes.string,
    };
  }

  render() {
    const { title, href } = this.props;
    return (
      <div className="navigation__head__category">
        <a href={href}>{title}</a>
        <CategoryCard {...this.props} />
      </div>
    );
  }
}
