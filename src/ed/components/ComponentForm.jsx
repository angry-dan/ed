import React, {Component, createElement} from "react";
import Reorderable from "./Reorderable";

class component extends Component {
  render() {
    const formProps = Object.assign({onChange: this.props.onChange}, this.props.componentState);
    return this.props.connectDragPreview(this.props.connectDropTarget(<div className="card white">
      <div className="card-content">
        {createElement(this.props.component.componentForm, formProps)}
      </div>
      <div className="card-action">
        <button onClick={this.props.onDelete} className="waves-effect waves-light btn red">
          Delete
        </button>
        {this.props.connectDragSource(
          <button className="btn btn-floating red">
            <i className="material-icons">reorder</i>
          </button>
        )}
      </div>
    </div>))
  }
}
export default Reorderable()(component);

// TODO read this.props.isDragging and re-style
