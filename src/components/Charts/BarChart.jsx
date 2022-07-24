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
} from "recharts";
import ActivityFactory from "../../Factories/ActivityFactory";
import { useFetch } from "../../utils/hooks";
import Loader from "./Loader";

function ChartBar(props) {
  const activityUrl = props.url + "/activity";

  const [activityData, isLoaded, error] = useFetch(
    activityUrl,
    ActivityFactory,
    "api"
  );

  console.log(activityData);

  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "red",
            width: "39px",
            height: "63px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <p
            className="desc"
            style={{
              color: "white",
              fontWeight: "500",
              fontFamily: "Roboto",
              fontSize: "10px",
            }}
          >
            {`${payload[0].value}`}kg
          </p>
          <p
            className="desc"
            style={{
              color: "white",
              fontWeight: "500",
              fontFamily: "Roboto",
              fontSize: "10px",
            }}
          >
            {`${payload[1].value}`}Kcal
          </p>
        </div>
      );
    }

    return null;
  }

  return (
    <div className=" extra-chart bar-chart">
      <h2 className="chart-title">Activité quotidienne</h2>
      {!isLoaded ? (
        <Loader />
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={100}
            height={300}
            data={activityData.sessions}
            style={{ background: "#FBFBFB" }}
            // background="#020203"
            margin={{
              top: 50,
              right: 0,
              left: -20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="1 1"
              vertical={false}
            ></CartesianGrid>

            <XAxis
              dataKey="index"
              interval={0}
              stroke="#DEDEDE"
              tick={{ fill: "black" }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              stroke="#82ca9d"
              hide="true"
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              type="number"
              domain={["dataMin - 1", "dataMax"]}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              iconSize={8}
              className="chart-legend"
              align="right"
              verticalAlign="top"
              iconType="circle"
              fontSize="14px"
              wrapperStyle={{
                position: "absolute",
                top: "0",
                fontSize: "14px",
                color: "blue",
              }}
            />
            <Bar
              yAxisId="right"
              dataKey="kilogram"
              barSize={7}
              fill="#020203"
              radius={[3, 3, 0, 0]}
              name="Poids (Kg)"
            />
            <Bar
              yAxisId="left"
              dataKey="calories"
              barSize={7}
              fill="#FF0101"
              radius={[3, 3, 0, 0]}
              name="Calories brûlées (Kcal)"
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default ChartBar;