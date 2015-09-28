import React, { PropTypes } from 'react';

import List from '@economist/component-list';

function isComponentType(props, propName, componentName) {
  const isRenderable =
      props[propName] && typeof props[propName] === 'function' &&
      props[propName].prototype &&
      props[propName].prototype.render && typeof props[propName].prototype.render === 'function';
  if (!isRenderable) {
    return new Error(`${componentName} was not passed a valid renderable class inside its '${propName}' prop.`);
  }
}

export default class ListOfComponent extends React.Component {

  static get propTypes() {
    return {
      className: PropTypes.string,
      data: PropTypes.arrayOf(PropTypes.object),
      component: isComponentType,
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
