import React from 'react';
import {component as AddButton} from "./AddButton";
import renderer from 'react-test-renderer';


it('renders correctly', () => {
  const tree = renderer.create(<AddButton componentTypes={{
    testComponent: {description: "A test component"}
  }}/>).toJSON();
  expect(tree).toMatchSnapshot();

  // TODO click that add button and check that the onClick event get's called
  // in the way we expect.
});
