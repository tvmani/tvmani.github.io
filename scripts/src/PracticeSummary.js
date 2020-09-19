import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
});


export default function PracticeSummary(props) {
  const classes = useStyles();
  const rows = props.questions || [];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell align="right">input</TableCell>
            <TableCell align="right">input</TableCell>
            <TableCell align="right">operation</TableCell>
            <TableCell align="right">Your Answer</TableCell>
            <TableCell align="right">Expected Answer</TableCell>
            <TableCell align="right">Clue</TableCell>
            <TableCell align="right">Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.submissionTime}>
              <TableCell component="th" scope="row">
                {new Date(row.submissionTime).toLocaleTimeString()}
              </TableCell>
              <TableCell align="right">{row.firstNum}</TableCell>
              <TableCell align="right">{row.secondNum}</TableCell>
              <TableCell align="right">{row.operation}</TableCell>
              <TableCell align="right">{row.submittedAnswer}</TableCell>
              <TableCell align="right">{row.expectedAnswer}</TableCell>
              <TableCell align="right">{row.operation}</TableCell>
              <TableCell align="right">{row.result + ""}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
