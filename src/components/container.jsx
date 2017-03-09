import React from "react";
import {uniqueId} from "lodash";

const Component = ({children}) =>
  <div className="container">
    <children />
  </div>;

class ComponentForm extends React.Component {
  handleChange(t) {
    return (event) => {
      this.props.onChange({[t]: event.target.checked});
    }
  }

  render () {
    return <div>
      <div className="switch">
        <label>
          Off
          <input type="checkbox" checked={this.props.makeContainerGreen} onChange={this.handleChange('makeContainerGreen')}  />
          <span className="lever" />
          On
        </label>
      </div>
      {this.props.children}
    </div>;
  }
}

export default {
  description: 'Container',
  component: Component,
  componentForm: ComponentForm,
  defaultState: {makeContainerGreen: true},
  hasChildren: true,
};


// TODO Make a form that some how takes advantage of children it get's provided.
// TODO make a component that renders children.
// Each child that get's rendered should not be in it's own iFrame even though that does actually work.
