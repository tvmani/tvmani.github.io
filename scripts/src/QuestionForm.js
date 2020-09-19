import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import Question from "./model/Question";
import NumberInput from "./NumberInput";



export default function QuestionForm(props) {
  const initialState = { numberformat: "" }
  const { firstInput, secondInput, operation, submissionHandler } = props;
  const [values, setValues] = React.useState(initialState);

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };


  const handleGo = callback => event => {
    let submittedAnswer = values.numberformat;
    const question = new Question(
      parseFloat(firstInput),
      parseFloat(secondInput),
      operation,
      parseFloat(submittedAnswer),
      Date.now()
    );
    setValues(initialState)
    callback(question)
  };

  const questionHandler = handleGo(submissionHandler);


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom={true}>
        Question
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button
              label="Button"
              size="large"
              variant="outlined"
              color="primary"
              style={{
                fontSize: 30,
              }}
            >
              <span>{firstInput}</span>
            </Button>
            <Button
              label="Button"
              size="medium"
              variant="outlined"
              color="primary"
              style={{
                fontSize: 25,
              }}
            >
              <span>{operation}</span>
            </Button>
            <Button
              label="Button"
              size="large"
              variant="outlined"
              color="primary"
              style={{
                fontSize: 30,
              }}
            >
              <span>{secondInput}</span>
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            label="Button"
            size="large"
            variant="outlined"
            color="primary"
            style={{
              borderStyle: "none",
              fontSize: 30,
            }}
          >
            =
          </Button>
        </Grid>
        <Grid item xs={12} sm={5}>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group"
          >
            <NumberInput value={values.numberformat} callback={questionHandler} handleChange={onChange}/>
            <Button
              label="Button"
              size="large"
              variant="outlined"
              color="primary"
              onClick={questionHandler}
              style={{
                fontSize: 30,
              }}
            >
              GO
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
