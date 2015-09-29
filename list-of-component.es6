import React, { PropTypes } from 'react';

import List from '@economist/component-list';

import isPropTypeComponent from './is-proptype-component';

export default class ListOfComponent extends React.Component {

  static get propTypes() {
    return {
      className: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.object),
      component: isPropTypeComponent,
      childMetadata: PropTypes.object,
      handleFocusChange: PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      data: [],
    };
  }

  constructor(props) {
    super(props);

    this.renderChildComponent = this.renderChildComponent.bind(this);
  }

  renderChildComponent(object, key) {
    const ChildComponent = this.props.component;
    const childMetadata = this.props.childMetadata || {};
    const handleFocusChange = this.props.handleFocusChange;
    return (
      <ChildComponent
        key={key}
        {...object}
        {...childMetadata}
        handleFocusChange={handleFocusChange}
      />
    );
  }

  render() {
    const { data, className } = this.props;
    if (data.length) {
      return (
        <List className={className}>{data.map(this.renderChildComponent)}</List>
      );
    }
    return null;
  }
}
