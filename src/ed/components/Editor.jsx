import React from "react";
import ComponentForm from "./ComponentForm";
import {connect} from "react-redux";
import {deleteComponent, updateComponent, reorderComponents} from "../modules/components";
import {get, find} from "lodash";

const component = ({components, componentTypes, deleteComponent, updateComponent, reorderComponents, id = 0}) => <div>
  <ol className="editor__components">
    {find(components, {id}).children.map((id, i) => {
      const {type, state} = find(components, {id});
      return <li key={id}>
        <ComponentForm
          component={componentTypes[type]}
          componentState={state}
          onDelete={() => deleteComponent(id)}
          onChange={state => updateComponent(id, state)}
          index={i}
          onReorder={reorderComponents}
          />
        </li>;
      }
    )}
  </ol>
</div>;

const mapStateToProps = state => ({
  components: state.components,
  componentTypes: state.componentTypes
});

const mapDispatchToProps = {updateComponent, deleteComponent, reorderComponents};

export default connect(mapStateToProps, mapDispatchToProps)(component);
