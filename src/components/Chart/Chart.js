import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map(({ value, label }) => (
        <ChartBar
          key={label}
          value={value}
          maxValue={totalMaximum}
          label={label}
        />
      ))}
    </div>
  );
};

export default Chart;
