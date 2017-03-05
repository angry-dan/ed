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
    type: 'slice',
    state: {someValue: 'one'},
  },
  {
    type: 'slice',
    state: {someValue: 'two'},
  }
];

test('adding a component', () => {
  expect(addComponent('slice')).toEqual({type: ADD, componentType: 'slice'});
  expect(reducer([], addComponent('slice'), componentTypes)).toEqual([
    {
      type: 'slice',
      state: {someValue: true},
    }
  ])
});
