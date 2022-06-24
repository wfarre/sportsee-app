import { useEffect, useState } from "react";
import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import PerformanceFactory from "../Factories/PerformanceFactory";

function ChartRadar(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activityData, setActivityData] = useState([]);

  const activityUrl = props.url + "/performance";

  useEffect(() => {
    fetch(activityUrl)
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          const sessionData = new PerformanceFactory(result.data, "api");
          setActivityData(sessionData.newData);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error);
        }
      );
  }, [activityUrl]);

  console.log(activityData);

  return (
    <div className="extra-chart extra-chart--radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="69%"
          data={activityData}
          style={{ backgroundColor: "#282D30" }}
          startAngle={210}
          endAngle={570}
          // counterClockwise
        >
          <PolarGrid cx={0} />
          <PolarAngleAxis
            dataKey="kind"
            axisLine="blue"
            tick={{ fill: "#FFF", fontSize: "0.8vw" }}
          />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar
            name="Mike"
            dataKey="value"
            // label={false}
            // stroke="transparent"

            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartRadar;