import React from "react";
import "./ChartBar.css";
const ChartBar = (props) => {
  let barFillHEight = '0%';
  if (props.maxValue > 0) {
    barFillHEight = Math.round((props.value / props.maxValue) * 100) + '%';
  }
  return (
    <div className="Chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: barFillHEight}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
