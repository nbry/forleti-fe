// prettier-ignore
import { DialogContent, TextField, } from "@material-ui/core";
import React from "react";

function Account({ formData, handleChange, setting }) {
  return (
    <DialogContent>
      <TextField
        label={"New " + setting.title}
        name="changeTo"
        value={formData.changeTo}
        onChange={handleChange}
        inputProps={{
          maxLength: setting.maxLength,
          minLength: setting.minLength,
        }}
        placeholder={"Change your " + setting.title + " to..."}
        fullWidth
        type={setting.inputType}
        required
      />

      <TextField
        label="Current Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        inputProps={{
          maxLength: setting.textConstraint,
          minLength: setting.minLength,
        }}
        placeholder="Enter current password to submit change"
        type="password"
        fullWidth
        required
      />
    </DialogContent>
  );
}

export default Account;
