import React from "react";
import ComponentForm from "./ComponentForm";
import {connect} from "react-redux";
import {deleteComponent, updateComponent} from "../modules/components";

const component = ({components, componentTypes, deleteComponent, updateComponent}) => <div>
  <ol className="editor__components">
    {components.map(({type, state}, i) =>
      <li key={i}>
        <ComponentForm
          component={componentTypes[type]}
          componentState={state}
          onDelete={() => deleteComponent(i)}
          onChange={state => updateComponent(i, state)} />
      </li>
    )}
  </ol>
</div>;

const mapStateToProps = state => ({
  components: state.components,
  componentTypes: state.componentTypes
});

const mapDispatchToProps = {updateComponent, deleteComponent};

export default connect(mapStateToProps, mapDispatchToProps)(component);
