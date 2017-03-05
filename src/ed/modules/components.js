export const ADD = 'ed/components/ADD';
export const UPDATE = 'ed/components/UPDATE';
export const DELETE = 'ed/components/DELETE';
export const REORDER = 'ed/components/REORDER';

export default function reducer(state = [], action = {}, componentTypes = []) {
  const c = [...state];
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          id: state.length,
          type: action.componentType,
          state: componentTypes[action.componentType].defaultState
        }
      ];

    case UPDATE:
      c[action.index] = Object.assign({}, c[action.index], {
        state: Object.assign({}, c[action.index].state, action.state)
      });
      return c;

    case DELETE:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];

    case REORDER:
      const moving = c.splice(action.fromIndex, 1)[0];
      c.splice(action.toIndex, 0, moving);
      return c;

    default:
      return state;

  }
}

export function addComponent(componentType) {
  return {type: ADD, componentType};
}

export function updateComponent(index, state) {
  return {type: UPDATE, index, state};
}

export function deleteComponent(index) {
  return {type: DELETE, index};
}

export function reorderComponents(fromIndex, toIndex) {
  return {type: REORDER, fromIndex, toIndex}
}
