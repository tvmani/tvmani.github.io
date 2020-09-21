import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button, TextField } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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

  const [localSession, setLocalSession] = React.useState({operation: 'mulitiplication', name: ''});

  const handleOperation = (event) =>  setLocalSession({
    ...localSession,
    [event.target.name]: event.target.value
  });

  const { callback } = props;

  const handleTab = (e, callback) => {
    const KEYCODE_TAB = 9;
    const KEYCODE_ENTER = 13;
    if (e.keyCode === KEYCODE_TAB || e.keyCode === KEYCODE_ENTER) {
      if (value.length >= 1) {
        callback(localSession)
      }
    }
  }   

  return (
    <React.Fragment>
      <Grid container spacing={3}>
      <Grid item xs={12}>

          <FormControl component="fieldset">
            <FormLabel component="legend">Exercise</FormLabel>
            <RadioGroup row  aria-label="gender" name="operation" value={localSession.operation} onChange={handleOperation}>
              <FormControlLabel value="addition" control={<Radio />} label="Addition (+)" />
              <FormControlLabel value="subtraction" control={<Radio />} label="Subtraction (-)" />
              <FormControlLabel value="multiplication" control={<Radio />} label="Multiplication (x)" />
              <FormControlLabel value="division" control={<Radio />} label="Division 	&divide;" />
              <FormControlLabel value="onesSumTo10" control={<Radio />} label="Common Base (x)" />
              <FormControlLabel value="sameTens" control={<Radio />} label="Same Tens (x)" />
            </RadioGroup>
          </FormControl>          
      </Grid>
      <Grid item xs={12}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic" label="name" variant="outlined" size="medium"
            name="name"
            value={localSession.name}
            autoFocus
            onKeyDown={e => handleTab(e, callback)} onChange={handleOperation}
          />
          <Button
            label="Start"
            size="small" variant="outlined" color="primary"
            onClick={e => callback(localSession)}
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
