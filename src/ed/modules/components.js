import {findIndex, isNumber, last, without} from "lodash";
export const ADD = 'ed/components/ADD';
export const UPDATE = 'ed/components/UPDATE';
export const DELETE = 'ed/components/DELETE';
export const REORDER = 'ed/components/REORDER';

const inital = [{
  id: 0,
  children: []
}];

export default function reducer(state = inital, action = {}, componentTypes = {}) {
  const c = [...state];
  const index = findIndex(c, {id: action.id});

  switch (action.type) {
    case ADD:

      const l = last(state), id = l ? l.id + 1 : 0;

      if (id > 0) {
        c[index] = Object.assign({}, c[index], {
          children: [
            ...c[index].children,
            id
          ]
        });
      }

      return [
        ...c,
        {
          id,
          type: action.componentType,
          children: [],
          state: componentTypes[action.componentType].defaultState,
        }
      ];

    case UPDATE:

      c[index] = Object.assign({}, c[index], {
        state: Object.assign({}, c[index].state, action.state)
      });
      return c;

    case DELETE:

      const removeRefs = c.map(item => item.children.indexOf(action.id) !== -1 ? Object.assign({}, item, {children: without(item.children, action.id)}) : item);
      return [
        ...removeRefs.slice(0, index),
        ...removeRefs.slice(index + 1)
      ];

    case REORDER:

      const children = [...c[index].children];

      const moving = children.splice(action.fromIndex, 1)[0];
      children.splice(action.toIndex, 0, moving);

      c[index] = Object.assign({}, c[index], {children});
      return c;

    default:
      return state;

  }
}

// TODO Read default state here, not in the reducer so you can remove dependency
// on componentTypes above.
export function addComponent(componentType, to = 0) {
  return {type: ADD, componentType, id: to};
}

export function updateComponent(id, state) {
  return {type: UPDATE, id, state};
}

export function deleteComponent(id) {
  if (id == 0) {
    throw new Error('Cannot delete the root element with ID 0');
  }
  return {type: DELETE, id};
}

export function reorderComponents(fromIndex, toIndex, parent = 0) {
  return {type: REORDER, id: parent, fromIndex, toIndex}
}
