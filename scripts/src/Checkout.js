import React, { useEffect, useRef } from 'react';
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
import { InputLabel } from '@material-ui/core';

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



function getGeneratorFor(operation) {
  const min = mathOperation[operation].min , max = mathOperation[operation].max, excludes = mathOperation[operation].excludes;

  const randomNumbers = Generator.getTwoNumbers(min, max, excludes);

  if ('onesSumTo10'.startsWith(operation)) {
    return Generator.getCommonBase10sComplement(min, max, excludes)
  } else if ('getNumberEndsWith5'.startsWith(operation)) {
    return Generator.getNumberEndsWith5(min, max, excludes)
  } else if ('sameTens'.startsWith(operation)) {
    return  Generator.getSameTens(min, max, excludes)
  } else if ('subtraction'.startsWith(operation)) {    
    randomNumbers.sort((a, b) => b - a);
    return randomNumbers;
  }  else if ('division'.startsWith(operation)) {    
    randomNumbers.sort((a, b) => b - a);
    return [randomNumbers[1]*randomNumbers[0], randomNumbers[0]];
  }


  return randomNumbers;        
}

const mathOperation = {
  'onesSumTo10' : { name: 'Ones Sum To 10 (x) - 4', operation: 'X',    min: 20,    max: 40, excludes: [5,10,15,11,20]  },
  'sameTens' : { name: 'SameTens (x) - 5', operation: 'X',    min: 11,    max: 100, excludes: [5,10,15,11,20] },
  'getNumberEndsWith5' : { name: 'Number 5`s (x) - 3', operation: 'X',    min: 2,    max: 20, excludes: [0] },
  'multiplication': { name: 'Multiplication (x) - 2', operation: 'X',    min: 9,    max: 21, excludes: [5,10] },
  'multiplication': { name: 'Multiplication (x) - 1', operation: 'X',    min: 2,    max: 11, excludes: [5,10] },
  'addition' : { name: 'Addition (+)', operation: '+',    min: 20,    max: 40, excludes: [5,10] },
  'division' : { name: 'Division &divide;', operation: '/',    min: 2,    max: 20, excludes: [5,10] },
  'subtraction' : { name: 'Subtraction (-)', operation: '-',    min: 2,    max: 40, excludes: [5,10] },
}

export default function Checkout() {
  console.log('Checkout - ReRender')

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

  const initialSession = { name: "", sid: "", operation: "addition" }
  const [session, setSession] = React.useState(initialSession);

  const onNameChange = (event) => {
    setSession({
      ...session,
      [event.target.name]: event.target.value,
      sid: ''
    });
  };
  
  const sessionHandler = (localSession) => {
    let sessionTime = (new Date()).toISOString();
    const sid = `Practice_${localSession.name}@${sessionTime}`;
    console.dir(localSession)
    setSession({
      ...localSession,
      sid
    });
    setQuestions([])
  }

  const generatedNumbers = getGeneratorFor(session.operation);

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
        <StudentSession operations={mathOperation} callback={sessionHandler} />

        { session.sid.length > 10  &&
          <React.Fragment>
              <Typography component="h3" variant="h6" align="center">             
                  <FormControlLabel        control={<Avatar alt={session.name} src="/icon/1.png" />}
                    label= {"Welcome ! - " + session.name}/>
            </Typography>
              <QuestionForm submissionHandler={submissionHandler} firstInput={generatedNumbers[0]} 
                secondInput={generatedNumbers[1]} operation={mathOperation[session.operation].operation}/>              
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
        }
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}