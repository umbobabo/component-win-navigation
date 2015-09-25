import React from 'react';

import SubcategoryCard from './subcategory-card';

export default class Subcategory extends React.Component {

  static get propTypes() {
    return {
      title: React.PropTypes.string,
      slug: React.PropTypes.string,
      childs: React.PropTypes.arrayOf(React.PropTypes.object),
    };
  }

  render() {
    const { title, slug } = this.props;
    return (
      <div className="navigation__subcategory">
        <h2 className="navigation__subcategory-title"><a href={slug}>{title}</a></h2>
        <SubcategoryCard {...this.props} />
      </div>
    );
  }

}
