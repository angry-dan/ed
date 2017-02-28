const ADD = 'ed/components/ADD';
const UPDATE = 'ed/components/UPDATE';
const DELETE = 'ed/components/DELETE';

export default function reducer(state = [], action = {}, componentTypes = []) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        {
          type: action.componentType,
          state: componentTypes[action.componentType].defaultState
        }
      ];

    case UPDATE:
      const c = [...state];
      c[action.index] = Object.assign({}, c[action.index], {
        state: Object.assign({}, c[action.index].state, action.state)
      });
      return c;

    case DELETE:
      return Object.assign({}, state, {
        components: [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1)
        ]
      });

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
