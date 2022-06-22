import { useEffect, useState } from "react";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceArea,
} from "recharts";

function CurveChart(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activityData, setActivityData] = useState([]);
  const [maxValue, setMaxValue] = useState(0);
  const [sLArray, setSLArray] = useState([]);

  const activityUrl = props.url + "/average-sessions";
  console.log(activityUrl);

  useEffect(() => {
    fetch(activityUrl)
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          // console.log(result);
          setIsLoaded(true);
          // setActivityData(result.data.sessions);
          const sessionData = result.data.sessions.map((data) => {
            function getDay(day) {
              if (day === 1) {
                return "L";
              }
              if (day === 2) {
                return "M";
              }
              if (day === 3) {
                return "M";
              }
              if (day === 4) {
                return "J";
              }
              if (day === 5) {
                return "V";
              }
              if (day === 6) {
                return "S";
              }
              if (day === 7) {
                return "D";
              }
            }

            return (data = {
              day: data.day,
              sessionLength: data.sessionLength,
              weekday: getDay(data.day),
            });
          });

          // console.log(sessionData);
          setActivityData(sessionData);

          const sessionLengthArray = result.data.sessions.map(
            (data) => data.sessionLength
          );
          setSLArray(sessionLengthArray);
          setMaxValue(Math.max(...sessionLengthArray));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error);
        }
      );
  }, [activityUrl]);

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

  const off = maxValue;
  const bColor = "#FFF";
  const aColor = "#f7b50b";

  return (
    <div className="extra-chart extra-chart--curve">
      <h2 className="chart-title">
        Durée moyenne des
        <br /> sessions
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        {/* <AreaChart
          margin={{ right: 18, left: 18 }}
          width={500}
          height={100}
          data={activityData}
          style={{
            background:
              "linear-gradient(to right, #FF0000, #FF0000 " +
              off +
              "% , rgb(211,45,31) " +
              off +
              "%, rgb(211,45,31))",
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

          <Tooltip content={CustomTooltip} cursor={false} />
          <XAxis
            dataKey="weekday"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#FFF" }}
          />
          <Area
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#gradientAreaStroke)"
            fillOpacity={0}
            strokeWidth={2}
          />
          <ReferenceArea x1={maxValue} x2={7} />
        </AreaChart> */}

        <AreaChart
          margin={{ right: 18, left: 18 }}
          width={500}
          height={100}
          data={activityData}
          style={{
            background:
              "linear-gradient(to right, #FF0000, #FF0000 " +
              off +
              "% , rgb(211,45,31) " +
              off +
              "%, rgb(211,45,31))",
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

          <Tooltip content={CustomTooltip} cursor={false} />
          <XAxis
            dataKey="weekday"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#FFF" }}
          />
          <Area
            type="natural"
            dataKey="sessionLength"
            stroke="url(#gradientAreaStroke)"
            fillOpacity={0}
            strokeWidth={2}
          />
          <ReferenceArea x1={maxValue} x2={7} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CurveChart;
