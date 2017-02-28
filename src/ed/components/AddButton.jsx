import React from "react";
import {connect} from "react-redux";
import {addComponent} from "../modules/components";

const component = ({addComponent}) => <div className="fixed-action-btn">
  <a className="btn-floating red btn-large">
    <i className="large material-icons">add</i>
  </a>
  <ul>
    <li>
      <button onClick={() => addComponent('header')} className="btn-floating red" title="Add header"><i className="material-icons">insert_chart</i></button>
    </li>
    <li>
      <button title="Add body" className="btn-floating yellow darken-1" onClick={() => addComponent('body')}><i className="material-icons">format_quote</i></button>
    </li>
  </ul>
</div>;


export default connect(undefined, {addComponent})(component);

