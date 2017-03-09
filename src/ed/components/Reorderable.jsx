import React, {Component, PropTypes} from "react";
import {findDOMNode} from "react-dom";
import {DragSource, DropTarget} from "react-dnd";

// TODO require passing in something that we can assign something to that let's you choose the props we assume exist.
// TODO find a way of wrapping both the targets at once.
export default (reorderFunction) => WrappedComponent => {

  const sourceSpec = {
    beginDrag({index}) {
      return {index};
    },
  };

  const targetSpec = {
    hover(props, monitor, component) {
      const dragIndex = monitor.getItem().index;
      const hoverIndex = props.index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      props.reorderComponents(dragIndex, hoverIndex, 0);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      monitor.getItem().index = hoverIndex;
    },
  };

  class component extends Component {
    render() {
      // TODO https://babeljs.io/docs/plugins/transform-object-rest-spread/
      const {connectDragPreview, connectDropTarget, isDragging/*, ...props*/} = this.props;
      const style = isDragging ? {visibility: 'hidden'} : {};
      return connectDragPreview(connectDropTarget(<div style={style}><WrappedComponent {...this.props} /></div>));
    }
  }

  const target = DropTarget('Reorderable', targetSpec, connect => ({
    connectDropTarget: connect.dropTarget(),
  }));

  const source = DragSource('Reorderable', sourceSpec, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }));

  return target(source(component));
}
