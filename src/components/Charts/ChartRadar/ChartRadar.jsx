import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import PerformanceFactory from "../../../Factories/PerformanceFactory";

import { useFetch } from "../../../utils/hooks.jsx";
import Loader from "../../Loader/Loader";

function ChartRadar(props) {
  const activityUrl = props.url + "/performance";

  // fetch the data from the API
  let [data, isLoaded, error] = useFetch(
    activityUrl,
    PerformanceFactory,
    "api"
  );

  return (
    <div className="extra-chart extra-chart--radar">
      {!isLoaded ? (
        <Loader />
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="70%"
            data={data.activityData}
            style={{ backgroundColor: "#282D30" }}
            startAngle={210}
            endAngle={570}
          >
            <PolarGrid cx={0} radialLines={false} />
            <PolarAngleAxis
              dataKey="kind"
              axisLine="blue"
              tick={{ fill: "#FFF", fontSize: "0.8vw" }}
            />
            {/* make disapear the oblic strokes from the graph */}
            <PolarRadiusAxis tick={false} axisLine={false} />
            <Radar
              // name="Mike"
              dataKey="value"
              fill="#FF0101"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default ChartRadar;
