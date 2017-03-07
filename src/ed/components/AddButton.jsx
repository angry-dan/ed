import React from "react";
import {connect} from "react-redux";
import {addComponent} from "../modules/components";

const component = ({addComponent, to = 0}) => <div>
  <a className="btn-floating red btn-large">
    <i className="large material-icons">add</i>
  </a>
  <ul>
    <li>
      <button title="Add header" className="btn-floating red" onClick={() => addComponent('header', to)}>
        <i className="material-icons">format_quote</i></button>
    </li>
    <li>
      <button title="Add body" className="btn-floating yellow darken-1" onClick={() => addComponent('body', to)}>
        <i className="material-icons">format_quote</i></button>
    </li>
    <li>
      <button title="Add container" className="btn-floating pink darken-1" onClick={() => addComponent('container', to)}>
        <i className="material-icons">format_quote</i></button>
    </li>
  </ul>
</div>;

export default connect(undefined, {addComponent})(component);
// TODO read component types and expose buttons for each one.
