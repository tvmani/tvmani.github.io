import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});


export default function PracticeSummary(props) {
  const classes = useStyles();
  const rows = props.questions || [];
  const incorrect = rows.filter(q => !q.result).length;

  function caclulateSpeed() {
    if(rows.length>0) {
      let speedInMillis = (rows[0].submissionTime - rows[rows.length-1].submissionTime + 2)/rows.filter(q => q.result).length
      return (speedInMillis/1000).toFixed(2);
    }
    return 9999999999;
  }

  return (
    <React.Fragment>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow key='summaryHeader'>
          <TableCell align="right">Speed</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">InCorrect</TableCell>
            <TableCell align="right">Correct</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow key='summary'>
              <TableCell align="right"><b>{caclulateSpeed()}</b></TableCell>
              <TableCell align="right">{rows.length}</TableCell>
              <TableCell align="right">{incorrect}</TableCell>
              <TableCell align="right">{rows.length - incorrect}</TableCell>
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>

    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell align="right">Result</TableCell>
            <TableCell align="right">input</TableCell>
            <TableCell align="right">input</TableCell>
            <TableCell align="right">Your Answer</TableCell>
            <TableCell align="right">Expected Answer</TableCell>
            <TableCell align="right">operation</TableCell>
            <TableCell align="right">Clue</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.submissionTime}>
              <TableCell component="th" scope="row">
                {new Date(row.submissionTime).toLocaleTimeString()}
              </TableCell>
              <TableCell align="right">{row.result ? <CheckIcon /> : <CloseIcon />}</TableCell>              
              <TableCell align="right">{row.firstNum}</TableCell>
              <TableCell align="right">{row.secondNum}</TableCell>
              <TableCell align="right">{row.submittedAnswer}</TableCell>
              <TableCell align="right">{row.expectedAnswer}</TableCell>
              <TableCell align="right">{row.operation}</TableCell>
              <TableCell align="right">{row.operation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </React.Fragment>
  );
}
