import reducer from "./components";
import * as components from "./components";
import {cloneDeep} from "lodash";

const componentTypes = {
  'slice': {
    'description': 'A test component',
    'component': () => {},
    'componentForm': () => {},
    'defaultState': {someValue: true}
  }
};

const componentTree = [
  {
    id: 0,
    type: 'slice',
    state: {someValue: 'one'},
    children: [1],
  },
  {
    id: 1,
    type: 'slice',
    state: {someValue: 'two'},
    children: [],
  }
];
const componentTreeCopy = cloneDeep(componentTree);

test('immutable reducer by default', () => {
  const state = [];
  expect(reducer(state, {type: undefined})).toBe(state);
});

test('adding a component', () => {
  const action = components.addComponent('slice');

  expect(action).toEqual({type: components.ADD, id: 0, componentType: 'slice'});

  expect(reducer(componentTree, action, componentTypes))
    .toEqual([
      {
        id: 0,
        type: 'slice',
        state: {someValue: 'one'},
        children: [1, 2],
      },
      {
        id: 1,
        type: 'slice',
        state: {someValue: 'two'},
        children: [],
      },
      {
        id: 2,
        type: 'slice',
        children: [],
        state: {someValue: true},
      }
    ]);
});

test('updating a component', () => {
  const action = components.updateComponent(0, {someValue: false});

  expect(action)
    .toEqual({type: components.UPDATE, id: 0, state: {someValue: false}});

  expect(reducer(componentTree, action, componentTypes))
    .toEqual([
      {
        id: 0,
        type: 'slice',
        children: [1],
        state: {someValue: false},
      },
      {
        id: 1,
        type: 'slice',
        children: [],
        state: {someValue: 'two'},
      }
    ]);
});

test('deleting a component', () => {
  const action = components.deleteComponent(1);

  expect(action).toEqual({type: components.DELETE, id: 1});

  let state = componentTree;

  state = reducer(state, action, componentTypes);

  expect(state).toEqual([
      {
        id: 0,
        type: 'slice',
        children: [],
        state: {someValue: 'one'},
      }
    ]);

  state = reducer(state, components.addComponent('slice'), componentTypes);
  state = reducer(state, components.addComponent('slice'), componentTypes);
  state = reducer(state, components.addComponent('slice'), componentTypes);
  state = reducer(state, components.deleteComponent(2), componentTypes);

  state = reducer(state, components.addComponent('slice'), componentTypes);
  // This second delete proves that items with an index different to their ID
  // are handled correctly.
  state = reducer(state, components.deleteComponent(4), componentTypes);

  expect(state)
    .toEqual([
      {
        id: 0,
        type: 'slice',
        children: [1, 3],
        state: {someValue: 'one'},
      },
      {
        id: 1,
        type: 'slice',
        children: [],
        state: {someValue: true},
      },
      {
        id: 3,
        type: 'slice',
        children: [],
        state: {someValue: true},
      },
    ]);

});

test('rearranging components', () => {
  // TODO there's some stuff about changing the parent.
  const action = components.reorderComponents(0, 1);

  expect(action).toEqual({type: components.REORDER, fromIndex: 0, toIndex: 1, id: 0});

  let state = reducer(componentTree, components.addComponent('slice'), componentTypes);
  state = reducer(state, action, componentTypes);

  expect(state).toEqual([
    {
      id: 0,
      type: 'slice',
      children: [2, 1],
      state: {someValue: 'one'},
    },
    {
      id: 1,
      type: 'slice',
      children: [],
      state: {someValue: 'two'},
    },
    {
      id: 2,
      type: 'slice',
      children: [],
      state: {someValue: true},
    },
  ]);
});

test('components with children', () => {
  // TODO Introduce support for lists and named children ([] vs {}).

  expect(reducer(componentTree, components.addComponent('slice', 1), componentTypes)).toEqual([
    {
      id: 0,
      type: 'slice',
      state: {someValue: 'one'},
      children: [1],
    },
    {
      id: 1,
      type: 'slice',
      state: {someValue: 'two'},
      children: [2],
    },
    {
      id: 2,
      type: 'slice',
      state: {someValue: true},
      children: [],
    }
  ])
});

test('immutable state', () => {
  expect(componentTree).toEqual(componentTreeCopy);
});


// TODO Something about not confusing indexes and IDs
