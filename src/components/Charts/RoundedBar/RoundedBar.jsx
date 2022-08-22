import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

const RoundedBar = (props) => {
  //we use the data from the main fetch in the App.js by passing props
  const databis = [
    {
      score: props.score,
      fill: "#FF0000",
    },
    { score: 1, fill: "#FBFBFB" },
  ];

  return (
    <div className=" extra-chart">
      <h2 className="chart-title">Score</h2>
      <p className="score-message">
        <span>{databis[0].score * 100}%</span> <br /> de votre
        <br /> objectif
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="100%"
          outerRadius="60%"
          barSize={10}
          data={databis}
          startAngle={90}
          endAngle={450}
          style={{ background: "#FBFBFB" }}
        >
          <RadialBar
            minAngle={15}
            background={{ fill: "#FFFFFF" }}
            clockWise
            dataKey="score"
            cornerRadius={20}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

RoundedBar.propTypes = {
  score: PropTypes.number,
};

export default RoundedBar;
