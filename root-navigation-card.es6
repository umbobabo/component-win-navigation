import React, { PropTypes } from 'react';
import classnames from 'classnames';

import ListOfComponent from './list-of-component';
import CategoryNavigationItem from './category-navigation-item';

export default class RootNavigationCard extends React.Component {

  static get propTypes() {
    return {
      className: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.object),
      focusNavigation: PropTypes.string,
      focusCategorySlug: PropTypes.string,
      focusSubcategorySlug: PropTypes.string,
      activeCategorySlug: PropTypes.string,
      activeSubcategorySlug: PropTypes.string,
      activeArticleId: PropTypes.number,
      handleFocusChange: PropTypes.func,
    };
  }

  render() {
    const data = this.props.data;
    const childMetadata = {
      focusCategorySlug: this.props.focusCategorySlug,
      focusSubcategorySlug: this.props.focusSubcategorySlug,
      activeCategorySlug: this.props.activeCategorySlug,
      activeSubcategorySlug: this.props.activeSubcategorySlug,
      activeArticleId: this.props.activeArticleId,
    };

    const navigationListClasses = {
      'navigation__categories--focus': this.props.focusNavigation,
    };
    return (
      <ListOfComponent
        className={classnames('navigation__categories', navigationListClasses)}
        component={CategoryNavigationItem}
        data={data}
        childMetadata={childMetadata}
        handleFocusChange={this.props.handleFocusChange}
      />
    );
  }

}
