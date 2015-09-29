export default function isComponentType(props, propName, componentName) {
  const isRenderable =
      props[propName] && typeof props[propName] === 'function' &&
      props[propName].prototype &&
      props[propName].prototype.render && typeof props[propName].prototype.render === 'function';
  if (!isRenderable) {
    return new Error(`${componentName} was not passed a valid renderable class inside its '${propName}' prop.`);
  }
}
