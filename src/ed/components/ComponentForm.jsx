import React, {Component, createElement} from "react";
import Reorderable from "./Reorderable";
import AddButton from "./AddButton";
import {find} from "lodash";
import {connect} from "react-redux";
import {deleteComponent, updateComponent, reorderComponents} from "../modules/components";
import ComponentFormList from "./ComponentFormList";

const component = ({id, components, componentTypes, deleteComponent, updateComponent, connectDragSource}) => {
  // Deals with displaying a single form.
  // Deals with deleting and other functions.
  // Renders a card.

  // TODO given you established these bits you need to extract the stuff below
  // into a separate presentation component.
  const component = find(components, {id});
  const componentType = componentTypes[component.type];
  const InnerForm = componentType.componentForm;

  return <div className="card white">
      <div className="card-content">
        <InnerForm onChange={state => updateComponent(id, state)} {...component.state}>
          {/*TODO If it's a container that does named children, pass a hash of component forms.*/}
          <ComponentFormList parent={id}/>
        </InnerForm>
      </div>
      <div className="card-action">
        <button className="waves-effect waves-light btn red" onClick={() => {deleteComponent(id)}}>
          Delete
        </button>
        {connectDragSource(
          <button className="btn btn-floating red">
            <i className="material-icons">reorder</i>
          </button>
        )}
        {componentType.hasChildren && <AddButton to={id}/>}
      </div>
    </div>
};

const connected = connect(
  ({components, componentTypes}) => ({components, componentTypes}),
  {deleteComponent, updateComponent, reorderComponents}
);
const reorderable = Reorderable();

export default connected(reorderable(component));
