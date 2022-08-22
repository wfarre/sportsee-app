import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ActivityFactory from "../../../Factories/ActivityFactory";
import { useFetch } from "../../../utils/customHooks";
import Loader from "../../Loader/Loader";

function ChartBar(props) {
  const activityUrl = props.url + "/activity";

  // fetch the data for the daily activities
  const [activityData, isLoaded, error] = useFetch(
    activityUrl,
    ActivityFactory,
    "api"
  );

  /**
   * This function is made to custom the tooltip inside the chart
   * @params payload, label, active
   * @return customized tooltip components
   */
  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#E60000",
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

  /**
   * Change the color in the legend
   * @params value
   * @return component corresponding the text in the legend
   */
  const renderColorfulLegendText = (value) => {
    return (
      <span
        className="legend-text"
        style={{
          color: "#74798c",
          paddingLeft: "5px",
        }}
      >
        {value}
      </span>
    );
  };

  if (error) console.error(error.message);

  return (
    <div className=" extra-chart bar-chart">
      <h2 className="chart-title">Activité quotidienne</h2>
      {!isLoaded ? (
        <Loader />
      ) : (
        //container for the chart
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={100}
            height={300}
            data={activityData.sessions}
            style={{ background: "#FBFBFB" }}
            margin={{
              top: 50,
              right: 0,
              left: 32,
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
              tick={{ fill: "#9B9EAC", fontSize: "14px" }}
              domain={["dataMin + 1", "auto"]}
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
              tick={{ fill: "#9B9EAC", fontSize: "14px" }}
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
                display: "flex",
                justifyContent: "flex-end",
                // width: "271px",
                top: "24px",
                right: "26px",
                fontSize: "14px",
                fontWeight: "400",
              }}
              formatter={renderColorfulLegendText}
            />
            <Bar
              yAxisId="right"
              dataKey="kilogram"
              barSize={7}
              fill="#020203"
              radius={[3, 3, 0, 0]}
              name="Poids (kg)"
            />
            <Bar
              yAxisId="left"
              dataKey="calories"
              barSize={7}
              fill="#FF0101"
              radius={[3, 3, 0, 0]}
              name="Calories brûlées (kCal)"
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default ChartBar;
