import React from "react";
import {connect} from "react-redux";

const component = ({components, componentTypes}) => <div>
  {components.map((component, i) => <div className="hoverable" key={i}>{React.createElement(componentTypes[component.type].component, component.state)}</div>)}
</div>;

const mapStateToProps = state => ({
  components: state.components,
  componentTypes: state.componentTypes
});

export default connect(mapStateToProps)(component);
