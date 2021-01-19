// prettier-ignore
import { Button, DialogActions, DialogContent, Grid, TextField, } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ChangeSettingsContext from "../ChangeSettingsContext";
import BackendApi from "utils/BackendApi";
import LoginContext from "components/LoginContext";

function FormAccount() {
  const { handleClose } = useContext(ChangeSettingsContext);
  const { logOut } = useContext(LoginContext);

  // STATE for form data. Store category, setting value, and changeTo.
  // DEFAULT changeTo to user's current setting.
  // NOTE account settings REQUIRES authentication, which is handled on
  // the backend. ACCOUNT SETTINGS MUST BE SET WITH A CATEGORY OF ACCOUNT!
  const INITIAL_STATE = {
    password: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  // Listen to changes written on the form and update formData state
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  // Handle form submission. Reset page if successful
  function handleSubmit(evt) {
    evt.preventDefault();
    async function removeAccount({ password }) {
      try {
        const res = await BackendApi.removeAccount({ password });
        console.log(res);
        if (res === 400) {
          alert(res.message);
        } else {
          handleClose();
          logOut();
        }
      } catch (e) {
        alert(e);
      }
    }
    removeAccount({ ...formData });
  }
  return (
    <Grid container justify="center">
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter current password to submit change"
            type="password"
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" type="submit" color="primary">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Grid>
  );
}

export default FormAccount;
