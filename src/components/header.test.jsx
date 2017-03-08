import React from 'react';
import {ComponentHeader, ComponentHeaderForm} from "./header";
import renderer from 'react-test-renderer';

test('component renders correctly', () => {
  const tree = renderer.create(<ComponentHeader title="Some title" body="Some other body" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('component form renders correctly', () => {
  const tree = renderer.create(<ComponentHeaderForm title="Some title" body="Some other body" />).toJSON();
  expect(tree).toMatchSnapshot();
})
