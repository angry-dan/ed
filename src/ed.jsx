import {render} from "react-dom";
import {createStore} from "redux";
import App from "./ed/components/App";
import React from "react";
import {Provider} from "react-redux";
import componentTypes from "./ed/modules/componentTypes";
import components from "./ed/modules/components";
import header from "./components/header";
import body from "./components/markdown";

function reducer(state = {}, action = {}) {
  return {
    componentTypes: componentTypes(state.componentTypes, action),
    components: components(state.components, action, state.componentTypes),
  }
}

const store = createStore(reducer, {componentTypes: {header, body}});

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('ed'));
