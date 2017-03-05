import reducer from "./components";
import * as components from "./components";

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
  },
  {
    id: 1,
    type: 'slice',
    state: {someValue: 'two'},
  }
];

test('adding a component', () => {
  const action = components.addComponent('slice');

  expect(action).toEqual({type: components.ADD, componentType: 'slice'});

  expect(reducer(componentTree, action, componentTypes))
    .toEqual([
      ...componentTree,
      {
        id: 2,
        type: 'slice',
        state: {someValue: true},
      }
    ]);
});

test('updating a component', () => {
  const action = components.updateComponent(0, {someValue: false});

  expect(action)
    .toEqual({type: components.UPDATE, index: 0, state: {someValue: false}});

  expect(reducer(componentTree, action, componentTypes))
    .toEqual([
      {
        id: 0,
        type: 'slice',
        state: {someValue: false},
      },
      {
        id: 1,
        type: 'slice',
        state: {someValue: 'two'},
      }
    ]);
});

test('deleting a component', () => {
  const action = components.deleteComponent(0);

  expect(action).toEqual({type: components.DELETE, index: 0});

  expect(reducer(componentTree, action, componentTypes))
    .toEqual([
      {
        id: 1,
        type: 'slice',
        state: {someValue: 'two'},
      }
    ]);
});

test('rearranging components', () => {
  const action = components.reorderComponents(0, 1);

  expect(action).toEqual({type: components.REORDER, fromIndex: 0, toIndex: 1});

  expect(reducer(componentTree, action, componentTypes)).toEqual([
    {
      id: 1,
      type: 'slice',
      state: {someValue: 'two'},
    },
    {
      id: 0,
      type: 'slice',
      state: {someValue: 'one'},
    },
  ])
});

test('components with children', () => {

});
