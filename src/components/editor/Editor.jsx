import React, { Component } from 'react';
// 引入编辑器组件
import BraftEditor from 'braft-editor';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
// import CodeHighlighter from 'braft-extensions/dist/code-highlighter';

// BraftEditor.use(CodeHighlighter({
//   includeEditors: ['editor-with-code-highlighter'],
// }));

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: BraftEditor.createEditorState('<p>Hello <b>World!</b></p>'),
      outputHTML: '<p></p>',
    };
    this.handleChange = this.handleChange.bind(this);
    this.controls = [
      {
        key: 'bold',
        text: <b>加粗</b>,
      },
      'italic', 'underline', 'separator', 'link', 'separator', 'media',
    ];
  }

  componentDidMount() {
    this.isLivinig = true;
    // 3秒后更改编辑器内容
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
      outputHTML: editorState.toHTML(),
    });
  }

  render() {
    const { editorState, outputHTML } = this.state;
    return (
      <div className="my-component">
        <BraftEditor
          // controls={this.controls}
          value={editorState}
          onChange={this.handleChange}
        />
        <h5>输出内容</h5>
        <div className="output-content">{outputHTML}</div>
      </div>
    );
  }
}
export default Editor;
