import React, { Component } from 'react';
import TinyMCE from 'react-tinymce';
import styles from './Editor.module.scss';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.editorConfig = {
      plugins: [
        'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
        'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
        'save table contextmenu directionality emoticons template paste textcolor',
      ],
      toolbar: 'newdocument, bold, italic, underline, strikethrough, alignleft, aligncenter, alignright, alignjustify, styleselect, formatselect, fontselect, fontsizeselect, cut, copy, paste, bullist, numlist, outdent, indent, blockquote, undo, redo, removeformat, subscript, superscript',
      themes: 'morden',
      branding: false,
      statusbar: false,
      height: 500,
    };
  }

  render() {
    return (
      <div className={styles.padding}>
        <TinyMCE
          config={this.editorConfig}
          id="editor"
          content="12123131"
        />
      </div>);
  }
}

// const Editor = () => (
//   <div className={styles.header}>
//     <div className={styles.logo}>
//       <img src={logo} alt="logo" />
//     </div>
//   </div>
// );

export default Editor;
