import React from 'react';
import {ComponentMarkdown, ComponentMarkdownForm} from "./markdown";
import renderer from 'react-test-renderer';

const testBody = `Some markdown
**which includes bold** _italic_ and 
- a list
- of things`;

test('component renders correctly', () => {
  const tree = renderer.create(<ComponentMarkdown body={testBody} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('component form renders correctly', () => {
  const tree = renderer.create(<ComponentMarkdownForm body={testBody} />).toJSON();
  expect(tree).toMatchSnapshot();
})
