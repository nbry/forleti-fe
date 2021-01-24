// prettier-ignore
import { DialogContent, TextField, } from "@material-ui/core";
import React from "react";

function Bio({ formData, handleChange, setting }) {
  return (
    <DialogContent>
      <TextField
        label={"New " + setting.title}
        multiline
        rows={7}
        inputProps={{ maxLength: setting.textConstraint }}
        variant="outlined"
        name="changeTo"
        value={formData.changeTo}
        onChange={handleChange}
        placeholder={"Change your " + setting.title + " to..."}
        fullWidth
        type={setting.inputType}
        required
      />
    </DialogContent>
  );
}

export default Bio;
