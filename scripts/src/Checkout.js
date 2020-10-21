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
import LatexQuestionForm from './LatexQuestionForm';
import PracticeSummary from './PracticeSummary';
import Question from './model/Question'
import Evaluator from "./model/Evaluator";
import Generator from "./tools/generator";
import StudentSession from './StudentSession';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GraphicalReport from './GraphicalReport';

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


function getGeneratorFor(exerciseId) {
  console.log('getGeneratorFor' + exerciseId);
  const min = mathOperations[exerciseId].min , max = mathOperations[exerciseId].max, excludes = mathOperations[exerciseId].excludes;

  const randomNumbers = Generator.getTwoNumbers(min, max, excludes);

  if ('onesSumTo10'.startsWith(exerciseId)) {
    return Generator.getCommonBase10sComplement(min, max, excludes)
  } else if ('getNumberEndsWith5'.startsWith(exerciseId)) {
    return Generator.getNumberEndsWith5(min, max, excludes)
  } else if ('sameTens'.startsWith(exerciseId)) {
    return  Generator.getSameTens(min, max, excludes)
  } else if ('subtraction'.startsWith(exerciseId)) {    
    randomNumbers.sort((a, b) => b - a);
    return randomNumbers;
  }  else if ('division'.startsWith(exerciseId)) {    
    randomNumbers.sort((a, b) => b - a);
    return [randomNumbers[1]*randomNumbers[0], randomNumbers[0]];
  }  else if ('square'.startsWith(exerciseId) ) {
    return [squareGenerator.getNext(), 2]
  }  else if ('cube'.startsWith(exerciseId) ) {
    return [cubeGenerator.getNext(), 3]
  }

  return randomNumbers;        
}

let cubeGenerator = Generator.getStatefulShuffledGenerator(2,25, [5,10]);

let squareGenerator = Generator.getStatefulShuffledGenerator(2,50, [5,10]);

const exercises = [
  { id:'addition', level: 10, name: 'Addition (+)', mathFunction: '+',    min: 20,    max: 40, excludes: [5,10] },
  { id:'subtraction', level: 20, name: 'Subtraction (-)', mathFunction: '-',    min: 2,    max: 40, excludes: [5,10] },
  { id:'multiplicationJr', level: 30, name: 'Basics Multiplication (x)', mathFunction: 'X',    min: 2,    max: 11, excludes: [5,10] },
  { id:'multiplication', level: 40, name: 'Multiplication (x)', mathFunction: 'X',    min: 9,    max: 21, excludes: [5,10] },
  { id:'onesSumTo10', level: 50, name: 'One`s Sum To 10', mathFunction: 'X',    min: 20,    max: 40, excludes: [5,10,15,11,20]  },
  { id:'getNumberEndsWith5', level: 60, name: 'Number 5`s (x)', mathFunction: 'X',    min: 2,    max: 9, excludes: [0] },
  { id:'sameTens', level: 70, name: 'SameTens', mathFunction: 'X',    min: 11,    max: 100, excludes: [5,10,15,11,20] },
  { id:'division', level: 80, name: 'Division &divide;', mathFunction: '/',    min: 2,    max: 20, excludes: [5,10] },
  { id:'square', level: 90, name: 'Square (x^2)', mathFunction: 'square',    min: 2,    max: 50, excludes: [5,10]},
  { id:'cube', level: 100, name: 'Cube (x^3)', mathFunction: 'cube',    min: 2,    max: 25, excludes: [5,10]},
  { id:'advMutliplication', level: 110, name: 'Adv Multiplication', mathFunction: 'X',    min: 22,    max: 99, excludes: [5,10,20,30,40,50,60,70,80,90]},
].sort((a, b) => a.level - b.level);

const mathOperations = exercises.reduce( (accumulator, currentValue) => { accumulator[currentValue.id]=currentValue; return accumulator; } , {})


export default function Checkout() {
  const initialSession = { name: "", sid: "", exerciseId: "onesSumTo10" }

  const classes = useStyles();
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
    const sid = `Practice_${localSession.name}@${sessionTime}~${localSession.exerciseId}`;
    console.dir(`Local session from session handler - ${localSession}`)
    setSession({
      ...localSession,
      sid
    });
    setQuestions([])
  }

  const generatedNumbers = getGeneratorFor(session.exerciseId);

  let questionForm = null;
  
  if( session.exerciseId === 'square' || session.exerciseId === 'cube' ) {
    questionForm = (
      <LatexQuestionForm
        submissionHandler={submissionHandler}
        firstInput={generatedNumbers[0]}
        secondInput={generatedNumbers[1]}
        operation={mathOperations[session.exerciseId]}
      />
    );
  } else {
    questionForm = <QuestionForm submissionHandler={submissionHandler} firstInput={generatedNumbers[0]} secondInput={generatedNumbers[1]} operation={mathOperations[session.exerciseId]} />
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="transparent"
        className={classes.appBar}
      >
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" noWrap>
            Daily Practice
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          {session.sid.length === 0 && (
            <StudentSession exercises={exercises} callback={sessionHandler} />
          )}

          {session.sid.length > 10 && (
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
                        <img
                          src="/icon/1.png"
                          alt="recipe thumbnail"
                          height="50"
                          width="50"
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Button
                          label="End"
                          size="small"
                          variant="contained"
                          color="secondary"
                          onClick={onNameChange}
                          style={{ fontSize: 25 }}
                        >
                          End
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </div>
              </Card>
              {questionForm}
              <PracticeSummary questions={questions} />
              <GraphicalReport name={session.name} />
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}