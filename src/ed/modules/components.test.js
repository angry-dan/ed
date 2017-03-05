import reducer, {addComponent, ADD} from "./components";

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

  expect(addComponent('slice')).toEqual({type: ADD, componentType: 'slice'});

  expect(reducer(componentTree, addComponent('slice'), componentTypes)).toEqual([
    ...componentTree,
    {
      id: 2,
      type: 'slice',
      state: {someValue: true},
    }
  ]);

});






// There. One flat array. Sorting re-orders the children key.
// We should therefore represent the root element in a special "root" container with an ID of zero.
