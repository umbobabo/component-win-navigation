import React, { PropTypes } from 'react';

import ListOfComponent from './list-of-component';
import Subcategory from './subcategory';

export default class CategoryCard extends React.Component {

  static get propTypes() {
    return {
      childs: PropTypes.arrayOf(PropTypes.object),
      focusCategorySlug: PropTypes.string,
      focusSubcategorySlug: PropTypes.string,
      activeCategorySlug: PropTypes.string,
      activeSubcategorySlug: PropTypes.string,
      activeArticleId: PropTypes.string,
      handleFocusChange: PropTypes.instanceOf(Function),
    };
  }

  render() {
    const handleFocusChange = this.props.handleFocusChange;

    const children = this.props.childs;

    // By default the first subcategory of a category should have focus.
    const defaultSubcategorySlug = children[0] ? children[0].slug : '';

    const childMetadata = {
      focusCategorySlug: this.props.focusCategorySlug,
      focusSubcategorySlug: this.props.focusSubcategorySlug || defaultSubcategorySlug,
      activeCategorySlug: this.props.activeCategorySlug,
      activeSubcategorySlug: this.props.activeSubcategorySlug,
      activeArticleId: this.props.activeArticleId,
    };
    return (
      <nav className="navigation__category-card">
        <ListOfComponent
          className="navigation__subcategories"
          component={Subcategory}
          data={children}
          childMetadata={childMetadata}
          handleFocusChange={handleFocusChange}
        />
      </nav>
    );
  }

}
