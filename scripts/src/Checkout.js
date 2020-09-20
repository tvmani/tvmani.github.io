import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import QuestionForm from './QuestionForm';
import PracticeSummary from './PracticeSummary';
import Question, {QuestionWithAnswer} from './model/Question'
import Evaluator from "./model/Evaluator";
import Generator from "./tools/generator";
import StudentSession from './StudentSession';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Avatar from '@material-ui/core/Avatar';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        DailyPractice
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Question', 'Question', 'Review your order'];

function getStepContent(step, submissionHandler) {
  const generatedNumbers = Generator.getTwoNumbers(3,40,[10,5]);
  switch (step) {
    case 0:
      return <QuestionForm submissionHandler={submissionHandler} firstInput={generatedNumbers[0]} secondInput={generatedNumbers[1]} operation='+'/>;
    case 1:
      return <QuestionForm submissionHandler={submissionHandler} firstInput={generatedNumbers[0]} secondInput={generatedNumbers[1]} operation='x'/>;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const [questions, setQuestions] = React.useState([]);

  const submissionHandler = (question) => {
    let questionWithResult = Question.questionWithResult(question, Evaluator.answer(question), Evaluator.evaluateQuestion(question))
    const newQuestions = [questionWithResult , ...questions]
    setQuestions(newQuestions);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const initialSession = { name: "", sid: "" }
  const [session, setSession] = React.useState(initialSession);

  const onNameChange = (event) => {
    setSession({
      ...session,
      [event.target.name]: event.target.value,
    });
  };
  
  const sessionHandler = (e) => {
    let sessionTime = (new Date()).toISOString();
    const sid = `Practice_${session.name}@${sessionTime}`;
    setSession({
      ...session,
      sid
    });
    setQuestions([])
  }

  useEffect(() => {console.log(session.sid)}, [session]);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="absolute" color="transparent" className={classes.appBar}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" noWrap>
            Daily Practice
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
        <StudentSession value={session.name} callback={sessionHandler} handleChange={onNameChange}/>

        { session.sid.length > 10  &&
          <Typography component="h3" variant="h6" align="center">             
              <FormControlLabel        control={<Avatar alt={session.name} src="/icon/1.png" />}
                label= {"Welcome ! - " + session.name}
              />
         </Typography>
        }        
          <React.Fragment>
              <React.Fragment>
                {getStepContent(activeStep, submissionHandler)}
                
                <PracticeSummary questions={questions}/>

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}