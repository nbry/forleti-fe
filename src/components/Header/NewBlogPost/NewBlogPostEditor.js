import React, { useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import styled from "styled-components";

function BlogPostEditor() {
  const [text, setText] = useState("");

  return (
    <EditorBox>
      <CKEditor
        editor={ClassicEditor}
        data={text}
        onChange={(event, editor) => {
          const data = editor.getData();
          setText(data);
        }}
      />
    </EditorBox>
  );
}

export default BlogPostEditor;

//STYLES:
const EditorBox = styled.div`
  margin-top: 20px;
`;
