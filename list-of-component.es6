import React from 'react';

import List from '@economist/component-list';

function isComponentType(props, propName, componentName) {
  if (props[propName] &&
      typeof props[propName] === 'function' &&
      props[propName].prototype &&
      props[propName].prototype.render &&
      typeof props[propName].prototype.render === 'function'
  ) {
    return true;
  }

  return new Error(`${componentName} was not passed a valid renderable class inside its '${propName}' prop.`);
}

export default class ListOfComponent extends React.Component {

  static get propTypes() {
    return {
      className: React.PropTypes.string,
      data: React.PropTypes.arrayOf(React.PropTypes.object),
      component: isComponentType,
    };
  }

  constructor(props) {
    super(props);

    this.renderChildComponent = this.renderChildComponent.bind(this);
  }

  renderChildComponent(object, key) {
    const ChildComponent = this.props.component;
    return (
      <ChildComponent key={key} {...object} />
    );
  }

  render() {
    const { data, className } = this.props;
    if (data && data.length) {
      return (
        <List className={className}>{data.map(this.renderChildComponent)}</List>
      );
    }
    return null;
  }
}
