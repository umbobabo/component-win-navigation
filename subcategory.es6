import React, { PropTypes } from 'react';
import classes from 'classnames';

import SubcategoryCard from './subcategory-card';

export default class Subcategory extends React.Component {

  static get propTypes() {
    return {
      title: PropTypes.string,
      slug: PropTypes.string,
      childs: PropTypes.arrayOf(PropTypes.object),
      focusSubcategorySlug: PropTypes.string,
      activeSubcategorySlug: PropTypes.string,
      handleFocusChange: PropTypes.func,
    };
  }

  constructor(props) {
    super(props);

    this.focus = this.focus.bind(this);
  }

  focus(slug) {
    const handleFocusChange = this.props.handleFocusChange;
    const newFocus = {
      focusSubcategorySlug: slug,
    };
    return (event) => {
      event.preventDefault();
      if (handleFocusChange) {
        handleFocusChange(newFocus);
      }
    };
  }

  render() {
    const { title, slug, focusSubcategorySlug, activeSubcategorySlug } = this.props;
    const isFocused = slug === focusSubcategorySlug;
    const isActive = slug === activeSubcategorySlug;
    const titleClasses = classes({
      'navigation__subcategory-title': true,
      'navigation__subcategory-title--focus': isFocused,
      'navigation__subcategory-title--active': isActive,
    });
    return (
      <div className="navigation__subcategory">
        <h2 className={titleClasses}>
          <a href={slug} onClick={this.focus(slug)}>{title}</a>
        </h2>
        {isFocused ? <SubcategoryCard {...this.props} /> : ''}
      </div>
    );
  }

}
