import React, { useState, useEffect, Fragment } from "react";
import "c3/c3.css";
import extractSessions from "./tools/analyze.js";
import transform from "./tools/objects.js";
import { entries } from "lodash";
import Grid from "@material-ui/core/Grid";
import c3 from "c3";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

function toTimSeriesData(timeSeriesData) {
  let exercises = timeSeriesData.map((e) => e[0]).splice(1);
  return {
    bindto: "#chart",
    data: {
      columns: timeSeriesData,
      type: "bar",
      x: "date",
      groups: [exercises],
    },
    title: {
      text: 'Your daily effort!'
    },
    axis: {
      x: {
        type: "timeseries",
      },
    },
  };
}

function subtract(days) {
  let dateOffset = 24 * 60 * 60 * 1000 * days; //5 days
  let threeMonthsBack =  new Date(new Date().getTime() - dateOffset);
  return threeMonthsBack.toISOString().split("T")[0]; 
}

function fetchReportData(name, fromDate, toDate) {
  let report = extractSessions(name, localStorage);

  let timeseries = report.getReportByDate(fromDate, toDate);
  const reportData = toTimSeriesData(transform(timeseries));
  return reportData;
}


let sampleGraphData = {
  data: {
    columns: [
      ["data1", 30],
      ["data2", 50],
    ],
  },
};


export default function GraphicalReport(props) {
  const {name} = props;
  
  const initialState = {
    graphData: sampleGraphData,
    fromDate: subtract(60),
    toDate: subtract(0),
  };
  const [state, setState] = React.useState(initialState);

  const handleDateChange = (event, id) => {
    debugger;
    setState({
      ...state,
      [id]: event.toISOString().split("T")[0],
    });
  }

  useEffect(() => {
    let data = fetchReportData(name, state.fromDate, state.toDate);
    console.log("data fetch complete!");
    console.dir(data);
        setState({
          ...state,
          graphData: data,
        });
  }, [state.fromDate, state.toDate]);

   

  useEffect(() => {    c3.generate(state.graphData);  }, [state]);   

  return (
    <Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="fromDate"
            label="From"
            value={state.fromDate}
            onChange={(date) => handleDateChange(date, "fromDate")}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="toDate"
            label="To Date"
            value={state.toDate}
            onChange={(date) => handleDateChange(date, "toDate")}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <div id="chart" />
    </Fragment>
  );
}
