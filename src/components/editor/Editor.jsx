import React, { Component } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import styles from './Editor.module.scss';
// import CodeHighlighter from 'braft-extensions/dist/code-highlighter';

// BraftEditor.use(CodeHighlighter({
//   includeEditors: ['editor-with-code-highlighter'],
// }));
// import 'prismjs/components/prism-java';
// import 'prismjs/components/prism-php';

// const options = {
//   syntaxs: [
//     {
//       name: 'JavaScript',
//       syntax: 'javascript',
//     }, {
//       name: 'HTML',
//       syntax: 'html',
//     }, {
//       name: 'CSS',
//       syntax: 'css',
//     }, {
//       name: 'Java',
//       syntax: 'java',
//     }, {
//       name: 'PHP',
//       syntax: 'php',
//     },
//   ],
// };

// BraftEditor.use(CodeHighlighter(options));

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: BraftEditor.createEditorState('<p></p>'),
    };
    this.handleChange = this.handleChange.bind(this);
    this.controls = [
      'undo', 'redo', 'separator',
      'headings', 'font-size', 'line-height', 'letter-spacing', 'separator',
      'text-color', 'bold', 'italic', 'underline', 'strike-through', 'separator',
      'superscript', 'subscript', 'remove-styles', 'separator', 'text-indent', 'text-align', 'separator',
      'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
      'link', 'separator', 'hr', 'separator',
      'media', 'separator',
      'clear',
      // 'emoji',
    ];
  }

  componentDidMount() {
    this.isLivinig = true;
    setTimeout(this.setEditorContentAsync, 3000);
  }

  componentWillUnmount() {
    this.isLivinig = false;
  }

  setEditorContentAsync() {
    if (this.isLivinig) {
      this.setState({
        editorState: BraftEditor.createEditorState('<p>你好，<b>世界!</b><p>'),
      });
    }
  }

  handleChange(editorState) {
    this.setState({
      editorState,
    });
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className={styles.padding}>
        <BraftEditor
          controls={this.controls}
          value={editorState}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
export default Editor;
