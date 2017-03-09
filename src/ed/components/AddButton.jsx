import React from "react";
import {connect} from "react-redux";
import {addComponent} from "../modules/components";

export const component = ({addComponent, componentTypes,  to = 0}) => <div>
  <a className="btn-floating red btn-large">
    <i className="large material-icons">add</i>
  </a>
  <ul>
    {Object.keys(componentTypes).map(type => <li key={type}>
        <button title={"Add " + componentTypes[type].description} className="btn-floating red" onClick={() => addComponent(type, to)}>
          <i className="material-icons">format_quote</i></button>
      </li>
    )}
  </ul>
</div>;

export default connect(state => ({componentTypes: state.componentTypes}), {addComponent})(component);
// TODO read component types and expose buttons for each one.
