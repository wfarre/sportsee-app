import React from "react";
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";
import PropTypes from "prop-types";

function ChartRoundedBar(props) {
  //we use the data from the main fetch in the App.js by passing props
  const data = [
    {
      score: props.score,
      fill: "#FF0000",
    },
    { score: 1, fill: "white" },
  ];

  return (
    <div className=" extra-chart">
      <h2 className="chart-title">Score</h2>
      <p className="score-message">
        <span>{data[0].score * 100}%</span> <br /> de votre
        <br /> objectif
      </p>

      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius={159}
          outerRadius={0}
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={450}
          style={{ background: "#FBFBFB" }}
        >
          <RadialBar
            background={{ fill: "#FFFFFF" }}
            clockWise
            dataKey="score"
            cornerRadius={20}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

ChartRoundedBar.propTypes = {
  score: PropTypes.number,
};

export default ChartRoundedBar;
