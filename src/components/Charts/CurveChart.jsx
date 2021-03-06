import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";
import { useFetch } from "../../utils/hooks";

// import loader component
import Loader from "./Loader";

import AverageSessionsFactory from "../../Factories/AverageSessionsFactory";

function CurveChart(props) {
  const activityUrl = props.url + "/average-sessions";

  //fetch the data from the API
  let [data, isLoaded, error] = useFetch(
    activityUrl,
    AverageSessionsFactory,
    "api"
  );

  /**
   * This function is made to custom the tooltip inside the chart
   */
  function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "white",
            width: "39px",
            height: "25px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            // boxShadow: "20px 20px white",
          }}
        >
          <p
            className="monotone"
            style={{
              color: "#020203",
              fontWeight: "500",
              fontFamily: "Roboto",
              fontSize: "10px",
            }}
          >
            {`${payload[0].value}`} min
          </p>
        </div>
      );
    }
    return null;
  }

  function customActiveDot(cx, cy, value) {
    return (
      <circle
        // cx={160}
        // cy={50}
        r={25}
        stroke="black"
        strokeWidth={3}
        fill="white"
      />
      // <div
      //   className="dot"
      //   style={{ height: "20px", width: "20px", backgroundColor: "blue" }}
      // ></div>
    );
  }

  //we set the day with the highest activity
  const off = Math.floor((data.maxDay / 7) * 100);
  const bColor = "#FFF";

  return (
    <div className="extra-chart extra-chart--curve">
      <h2 className="chart-title">
        Durée moyenne des
        <br /> sessions
      </h2>
      {!isLoaded ? (
        <Loader />
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            margin={{ right: 18, left: 18 }}
            width={500}
            height={100}
            data={data.sessions}
            style={{
              background: "#FF0000",
              // background:
              //   "linear-gradient(to right, #FF0000, #FF0000 " +
              //   off +
              //   "% , rgb(211,45,31) " +
              //   off +
              //   "%, rgb(211,45,31))",
            }}
          >
            <defs>
              <linearGradient
                id="gradientAreaStroke"
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
              >
                <stop offset="0%" stopColor={bColor} stopOpacity={0.15} />
                <stop offset={`${off}%`} stopColor={bColor} stopOpacity={0.5} />
                <stop offset={`${off}%`} stopColor={bColor} stopOpacity={0.5} />
                <stop offset="100%" stopColor={bColor} stopOpacity={1} />
              </linearGradient>
            </defs>

            <Tooltip
              content={CustomTooltip}
              // allowEscapeViewBox={{
              //   x: true,
              //   y: true,
              // }}
              // offset={20}
              // cursor={{
              //   stroke: "black",
              //   // stroke: "400px",
              //   strokeWidth: "50%",
              //   strokeOpacity: 0.3,
              //   style: {
              //     position: "absolute",
              //     height: "200%",
              //     left: "50%",
              //   },
              // }}
              active={false}
              cursor={false}
              tick={{
                fill: "#FFF",
                fontFamily: "Roboto",
                fontSize: "12px",
                opacity: "0.6",
              }}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#FFF",
                fontFamily: "Roboto",
                fontSize: "12px",
                opacity: "0.6",
              }}
            />
            <Area
              type="natural"
              dataKey="sessionLength"
              stroke="url(#gradientAreaStroke)"
              fillOpacity={0}
              strokeWidth={2}
              activeDot={{
                stroke: "hsla(0,100%,100%, 0.3)",
                strokeWidth: 4,
                r: 3,
                fill: "white",
                style: { boxShadow: "16px 16px black" },
              }}
              // activeDot={customActiveDot}
            />
            {/* <ReferenceArea x1={data.maxDay} x2={7} /> */}
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default CurveChart;
