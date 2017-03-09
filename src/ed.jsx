import {render} from "react-dom";
import {createStore} from "redux";
import App from "./ed/components/App";
import React from "react";
import {Provider} from "react-redux";
import componentTypes from "./ed/modules/componentTypes";
import components from "./ed/modules/components";
import header from "./components/header";
import body from "./components/markdown";
import container from "./components/container";

function reducer(state = {}, action = {}) {
  return {
    componentTypes: componentTypes(state.componentTypes, action),
    components: components(state.components, action, state.componentTypes),
  }
}

const store = createStore(reducer, {componentTypes: {header, body, container}}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('ed'));
