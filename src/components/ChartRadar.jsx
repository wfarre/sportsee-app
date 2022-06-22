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
          const sessionData = result.data.data.map((data) => {
            function getkind(kind) {
              if (kind === 1) {
                return "Cardio";
              }
              if (kind === 2) {
                return "Energie";
              }
              if (kind === 3) {
                return "Endurance";
              }
              if (kind === 4) {
                return "Force";
              }
              if (kind === 5) {
                return "Vitesse";
              }
              if (kind === 6) {
                return "Intensité";
              }
            }

            return (data = {
              kind: data.kind,
              value: data.value,
              performance: getkind(data.kind),
            });
          });

          console.log("ecopdowojaksjfiojejfoiwehfgioehwogf");
          console.log(sessionData);
          setActivityData(sessionData);
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
            dataKey="performance"
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
