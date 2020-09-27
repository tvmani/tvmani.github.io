import React from "react";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

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

  const [localSession, setLocalSession] = React.useState({
    exerciseId: "addition",
    name: "",
  });

  const handleOperation = (event) => {
    console.log(`Selected exercise-id :: ${event.target.value}`);
    setLocalSession({
      ...localSession,
      [event.target.name]: event.target.value,
    });
  };

  const { callback, exercises } = props;

  const handleTab = (e, callback) => {
    const KEYCODE_TAB = 9;
    const KEYCODE_ENTER = 13;
    if (e.keyCode === KEYCODE_TAB || e.keyCode === KEYCODE_ENTER) {
      if (localSession.name && localSession.name.length >= 2) {
        callback(localSession);
      }
    }
  };


  const listItems = exercises.map(operation => <FormControlLabel key={operation.id} value={operation.id} control={<Radio />} label={operation.name}/>);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Exercise</FormLabel>
            <RadioGroup row aria-label="Exercises" name="exerciseId" value={localSession.exerciseId} onChange={handleOperation}>
              {listItems}
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic" label="name" variant="outlined" size="medium" name="name"
              value={localSession.name}
              autoFocus
              onKeyDown={(e) => handleTab(e, callback)}
              onChange={handleOperation}
            />
            <Button
              label="Start" size="small" variant="contained" color="primary"
              onClick={(e) => callback(localSession)}
              style={{
                fontSize: 25,
              }}
            >
              Start
            </Button>
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
