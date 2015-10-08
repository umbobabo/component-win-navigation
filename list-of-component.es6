import React, { PropTypes } from 'react';
import classnames from 'classnames';

import List from '@economist/component-list';

import isPropTypeComponent from './is-proptype-component';

export default class ListOfComponent extends React.Component {

  static get propTypes() {
    return {
      className: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.object),
      component: isPropTypeComponent,
      sharedProps: PropTypes.object,
    };
  }

  static get defaultProps() {
    return {
      items: [],
      sharedProps: {},
    };
  }

  renderChildComponent = (object, key) => {
    const ChildComponent = this.props.component;
    const sharedProps = this.props.sharedProps || {};
    return (
      <ChildComponent
        key={key}
        {...object}
        {...sharedProps}
      />
    );
  }

  render() {
    const { items } = this.props;
    if (items.length) {
      return (
        <List className={classnames(this.props.className)}>{items.map(this.renderChildComponent)}</List>
      );
    }
    return null;
  }
}
