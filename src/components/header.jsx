import React from "react";
const ComponentHeader = ({title, body}) =>
  <header className="header"><h1 className="header__title">{title}</h1><p className="header__body">{body}</p></header>;

class ComponentHeaderForm extends React.Component {
  handleChange(t) {
    return (event) => {
      this.props.onChange({[t]: event.target.value});
    }
  }

  render () {
    return <div className="scale-transition scale-in">
      <input type="text" name="title" value={this.props.title} onChange={this.handleChange('title')} />
      <input type="text" name="body" value={this.props.body} onChange={this.handleChange('body')} />
    </div>;
  }
}

export default {
  'description': 'Some header',
  'component': ComponentHeader,
  'componentForm': ComponentHeaderForm,
  'defaultState': {title: "Hello, world", body: "Lorem ipsum dolor etc"}
};
