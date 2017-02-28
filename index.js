import './src/ed';


// Things you were using:

// Sortables like this: https://react-dnd.github.io/react-dnd/examples-sortable-stress.html
// with a drag handle.


// TODO:
// Organise the code. Properly organise it.
/*
 Ducks for:
 Actions, reducers and action creaters. They all go in one file.
 Reducer goes out by default.

 Modules.

 Right. So we've got one module. Just one. It deals with the components


 TODO Use immutable

Connect things in a smaller way. When a button needs to do something connect it
then you can provide the action creator.

It'll feel tidier that way. Remember that one of the principles of redux is
avoiding having to bring everything to the top really.

  */

// import {addComponent, deleteComponent, updateComponent} from "../modules/components";
// import {connect} from "react-redux";
// export default connect(state => ({
//   components: state.components,
//   componentTypes: state.componentTypes,
// }), {addComponent, deleteComponent, updateComponent})(App);
