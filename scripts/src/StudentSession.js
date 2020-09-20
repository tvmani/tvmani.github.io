import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button, TextField } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "20ch",
    },
  },
}));

export default function StudentSession(props) {
  const classes = useStyles();

  const { value, handleChange, callback } = props;

  const handleTab = (e, callback) => {
    const KEYCODE_TAB = 9;
    const KEYCODE_ENTER = 13;
    if (e.keyCode === KEYCODE_TAB || e.keyCode === KEYCODE_ENTER) {
      if (value.length >= 1) {
        callback(e)
      }
    }
  }   

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic" label="name" variant="outlined" size="medium"
            name="name"
            value={value}
            autoFocus
            onKeyDown={e => handleTab(e, callback)} onChange={handleChange}
          />
          <Button
            label="Start"
            size="small" variant="outlined" color="primary"
            onClick={callback}
            style={{
              fontSize: 25,
            }}
          >
            Start
          </Button>
        </form>
      </Grid>
    </React.Fragment>
  );
}
