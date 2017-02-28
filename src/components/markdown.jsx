import React from "react";
import marked from "marked";
const ComponentMarkdown = ({body}) => <div className="markdown flow-text" dangerouslySetInnerHTML={{__html: marked(body)}}></div>;
class ComponentMarkdownForm extends React.Component {
  render () {
    return <textarea onChange={(event) => this.props.onChange({body: event.target.value})} value={this.props.body} className="materialize-textarea" placeholder="Enter text here in *markdown* _format_" />
  }
}
export default {
  'description': 'A markdown field',
  'component': ComponentMarkdown,
  'componentForm': ComponentMarkdownForm,
  'defaultState': {body: 'We can write in **Bold**, *italic*.'}
};
