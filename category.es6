import React, { PropTypes } from 'react';
import classes from 'classnames';

import CategoryCard from './category-card';

export default class Category extends React.Component {

  static get propTypes() {
    return {
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      focusCategorySlug: PropTypes.string,
      activeCategorySlug: PropTypes.string,
      handleFocusChange: PropTypes.instanceOf(Function),
    };
  }

  constructor(props) {
    super(props);

    this.focus = this.focus.bind(this);
  }

  focus(slug) {
    const handleFocusChange = this.props.handleFocusChange;
    const newFocus = {
      focusCategorySlug: slug,
      focusSubcategorySlug: null,
    };
    return (event) => {
      event.preventDefault();
      if (handleFocusChange) {
        handleFocusChange(newFocus);
      }
    };
  }

  render() {
    const { title, slug, focusCategorySlug, activeCategorySlug } = this.props;
    const isFocused = slug === focusCategorySlug;
    const isActive = slug === activeCategorySlug;
    const titleClasses = classes({
      'navigation__category-title': true,
      'navigation__category-title--focus': isFocused,
      'navigation__category-title--active': isActive,
    });
    return (
      <div className="navigation__category">
        <h2 className={titleClasses}><a href={slug} onClick={this.focus(slug)}>{title}</a></h2>
        {isFocused ? <CategoryCard {...this.props} /> : ''}
      </div>
    );
  }
}
