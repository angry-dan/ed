import React, {Component, createElement} from "react";
import { DragSource } from 'react-dnd';

class component extends Component {
  render() {
    const formProps = Object.assign({onChange: this.props.onChange}, this.props.componentState);
    return this.props.connectDragPreview(<div className="card white">
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
    </div>)
  }
}

const source = {
  beginDrag(props) {
    return {i : props.i};
  }
};


// Basically, this: https://github.com/react-dnd/react-dnd/blob/master/examples/04%20Sortable/Simple/Card.js
// You could form that into a container component that deals with the dragging and dropping.
// That would be a good idea allow this component to be better re-used.
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

export default DragSource('ComponentForm', source, collect)(component)
