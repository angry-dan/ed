import React, {Component, createElement} from "react";
export default class extends Component {
  render() {
    const formProps = Object.assign({onChange: this.props.onChange}, this.props.component.state);
    return <div className="card white">
      <div className="card-content">
        {createElement(this.props.component.componentForm, formProps)}
      </div>
      <div className="card-action">
        <button onClick={this.props.onDelete} className="waves-effect waves-light btn red">
          Delete
        </button>
        <button className="btn btn-floating waves-effect waves-light red">
          <i className="material-icons">reorder</i>
        </button>
      </div>
    </div>
  }
};
