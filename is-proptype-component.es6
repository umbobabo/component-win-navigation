export default function isPropTypeComponent(props, propName, componentName) {
  const isComponent =
      props[propName] && typeof props[propName] === 'function' &&
      props[propName].prototype &&
      props[propName].prototype.render && typeof props[propName].prototype.render === 'function';
  if (!isComponent) {
    return new Error(`${componentName} was not passed a valid renderable class inside its '${propName}' prop.`);
  }
}
