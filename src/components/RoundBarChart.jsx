import { useEffect, useState } from "react";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
  RadialBarChart,
  RadialBar,
} from "recharts";

function ChartRoundedBar(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activityData, setActivityData] = useState([]);

  const data = [
    {
      score: 0.12,
      fill: "red",
    },
    { score: 1, fill: "transparent" },
  ];

  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };

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
          <RadialBar background clockWise dataKey="score" cornerRadius={20} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartRoundedBar;
