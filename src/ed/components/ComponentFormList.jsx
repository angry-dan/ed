import React from "react";
import {connect} from "react-redux";
import {find} from "lodash";
import ComponentForm from "./ComponentForm";

const component = ({parent, components}) =>
  <ol className="editor__components">
    {find(components, {id: parent}).children.map((id, i) =>
      <li key={id}>
        <ComponentForm id={id} index={i} />
      </li>
    )}
  </ol>;

export default connect(({components}) => ({components}))(component);

// Deals with the list, and the fact that the list can be sorted
// Proxies to the component form for the actual functions that can be performed.

// Lists render the children. Forms render the component, then find the
// children. at the root is a list because the top level component is a special
// one and it's not a list.

// TODO add sorting back in.
