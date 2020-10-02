import React, { useState, useEffect } from "react";
import "c3/c3.css";
import extractSessions from "./tools/analyze.js";
import transform from "./tools/objects.js";
import { entries } from "lodash";
import c3 from "c3";

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
    axis: {
      x: {
        type: "timeseries",
      },
    },
  };
}

function fetchReportData(name) {
  let report = extractSessions(name, localStorage);
  let timeseries = report.getReportByDate("2020-06-21", "2020-09-25");
  const reportData = toTimSeriesData(transform(timeseries));
  return reportData;
}

let sampleData = {
    data: {
        columns: [
            ['data1', 30],
            ['data2', 50]
        ]
    }
}

export default function GraphicalReport(props) {
  const {name} = props;
  const [data, setData] = useState(sampleData);
  useEffect(() => {
     let data = fetchReportData(name);
     console.log('data fetch complete!')
     console.dir(data);
     setData(data);
   },[]);

  useEffect(() => {    c3.generate(data);  }, [data]);   

  return <div id="chart" />;
}
