import React from "react";
import {connect} from "react-redux";
import Frame from "react-frame-component";
import {find} from "lodash";

// TODO add buttons for setting the frame width and calculating an appropriate
// scale transform if the component doesn't fit within it's container.
// Therefore providing a responsive design tool.
// TODO read from state details of custom CSS file(s) to be applied for a
// suitably WYSIWYG experience.
// TODO responsive breakpoints to come from state
// TODO allow manual resizing of that iframe.
const component = ({components, componentTypes}) => <Frame style={{border: "none", minHeight: '100vh', width: '100%'}}>
  {components[0].children.map((id, i) => {
    const {type, state, children} = find(components, {id}),
      component = componentTypes[type].component;

    return <div className="hoverable" key={i}>
      {/*TODO make sure that children get rendered too (pass a hash of rendering things, it's the job of the component to actually render them but we give the components that do it.).*/}
      {/*TODO Watch out for recursion.*/}
      {React.createElement(component, state, children)}
    </div>
  })}
</Frame>;

const mapStateToProps = state => ({
  components: state.components,
  componentTypes: state.componentTypes
});

export default connect(mapStateToProps)(component);
