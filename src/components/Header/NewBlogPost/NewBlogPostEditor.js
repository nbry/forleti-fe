import React, { useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import styled from "styled-components";

function BlogPostEditor() {
  const [text, setText] = useState("");

  return (
    <CKEditor
      editor={ClassicEditor}
      data={text}
      onChange={(event, editor) => {
        const data = editor.getData();
        setText(data);
      }}
    />
  );
}

export default BlogPostEditor;

//STYLES:
