import React, { useEffect  } from 'react';
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
import Question from './model/Question'
import Evaluator from "./model/Evaluator";
import Generator from "./tools/generator";
import StudentSession from './StudentSession';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
  console.log('getGeneratorFor' + operation);
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
  'onesSumTo10' : { level: 50, name: 'One`s Sum To 10', operation: 'X',    min: 20,    max: 40, excludes: [5,10,15,11,20]  },
  'sameTens' : { level: 70, name: 'SameTens', operation: 'X',    min: 11,    max: 100, excludes: [5,10,15,11,20] },
  'getNumberEndsWith5' : { level: 60, name: 'Number 5`s (x)', operation: 'X',    min: 2,    max: 9, excludes: [0] },
  'multiplication': { level: 40, name: 'Multiplication (x)', operation: 'X',    min: 9,    max: 21, excludes: [5,10] },
  'multiplicationJr': { level: 30, name: 'Basics Multiplication (x)', operation: 'X',    min: 2,    max: 11, excludes: [5,10] },
  'addition' : { level: 10, name: 'Addition (+)', operation: '+',    min: 20,    max: 40, excludes: [5,10] },
  'division' : { level: 80, name: 'Division &divide;', operation: '/',    min: 2,    max: 20, excludes: [5,10] },
  'subtraction' : { level: 20, name: 'Subtraction (-)', operation: '-',    min: 2,    max: 40, excludes: [5,10] },
}

export default function Checkout() {
  const initialSession = { name: "", sid: "", operation: "onesSumTo10" }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const [questions, setQuestions] = React.useState([]);
  const [session, setSession] = React.useState(initialSession);
  
  const submissionHandler = (question) => {
    let questionWithResult = Question.questionWithResult(question, Evaluator.answer(question), Evaluator.evaluateQuestion(question))
    const newQuestions = [questionWithResult , ...questions]
    setQuestions(newQuestions);
  };   

  const onNameChange = (event) => {
    setSession({
      ...session,
      [event.target.name]: event.target.value,
      sid: ''
    });
  };

  useEffect(() => {
    if(questions && questions.length>4 && session.sid.length > 2) {
      localStorage.setItem(session.sid, JSON.stringify(questions));
    }
  }, [questions]);
  
  const sessionHandler = (localSession) => {
    let sessionTime = (new Date()).toISOString();
    const sid = `Practice_${localSession.name}@${sessionTime}~${localSession.operation}`;
    console.dir(`Local session from session handler - ${localSession}`)
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
        { session.sid.length === 0  &&        <StudentSession operations={mathOperation} callback={sessionHandler} /> }

        { session.sid.length > 10  &&
          <React.Fragment>

                <Card className={classes.root}>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                              <Typography component="h3" variant="h3">
                                {session.name} 
                                </Typography>
                              </Grid>
                              <Grid item xs={12} sm={4}>
                              <img src="/icon/1.png" alt="recipe thumbnail" height="50" width="50"/>
                              </Grid>
                              <Grid item xs={12} sm={4}>
                              <Button
                      label="End" size="small" variant="contained" color="secondary" onClick={onNameChange} style={{fontSize: 25,}}>
                      End
                    </Button>                  
                              </Grid>
                        </Grid>
                    </CardContent>
                  </div>
                </Card>

                      
            
              <QuestionForm submissionHandler={submissionHandler} firstInput={generatedNumbers[0]} 
                secondInput={generatedNumbers[1]} operation={mathOperation[session.operation].operation} />              
              <PracticeSummary questions={questions}/>
          </React.Fragment>
        }
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}