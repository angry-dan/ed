import Editor from "./Editor";
import Preview from "./Preview";
import AddButton from "./AddButton";

import React from "react";
import '../ed.css';

export default (props) => <div className="row">
  <div className="col m6 z-depth-2 blue darken-1 editor--left-col">
    <Editor />
    <AddButton />
  </div>
  <div className="col m6">
    <Preview />
  </div>
</div>;

