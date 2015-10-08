'use strict';

exports.__esModule = true;
exports['default'] = isPropTypeComponent;

function isPropTypeComponent(props, propName, componentName) {
  var isComponent = props[propName] && typeof props[propName] === 'function' && props[propName].prototype && props[propName].prototype.render && typeof props[propName].prototype.render === 'function';
  if (!isComponent) {
    return new Error(componentName + ' was not passed a valid renderable class inside its \'' + propName + '\' prop.');
  }
}

module.exports = exports['default'];