import React,{useRef} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { ButtonGroup } from "@material-ui/core";
import Question from "./model/Question";
import NumberInput from "./NumberInput";
import 'katex/dist/katex.min.css';
import { InlineMath} from 'react-katex';

function getMathRender(number, operation) {
  if('square'.startsWith(operation)) {
    return number + "^2";
  } 
  if('cube'.startsWith(operation)) {
    return number + "^3";
  } 
}

const LatexQuestionForm = React.forwardRef((props, ref) => {

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
      operation.mathFunction,
      parseFloat(submittedAnswer),
      Date.now()
    );
    setValues(initialState)
    callback(question)

  };

  const questionHandler = handleGo(submissionHandler);
  let text = getMathRender(firstInput, operation.id);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom={true}>
        Question
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <Button
            label="Button"
            size="large"
            variant="outlined"
            color="primary"
            style={{
              fontSize: 30,
            }}
          >
            <InlineMath>{text}</InlineMath>
          </Button>
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
            <NumberInput
              autoFocus={true}
              value={values.numberformat}
              // ref={inputRef}
              callback={questionHandler}
              handleChange={onChange}
            />
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
})

export default LatexQuestionForm;