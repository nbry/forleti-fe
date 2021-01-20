import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
// import styled from "styled-components";

function BlogPostEditor({ formData, setFormData }) {
  return (
    <CKEditor
      value={formData.content}
      editor={ClassicEditor}
      data={formData.content}
      onChange={(event, editor) => {
        const data = editor.getData();
        setFormData((formData) => ({
          ...formData,
          content: data,
        }));
      }}
    />
  );
}

export default BlogPostEditor;

//STYLES:
