import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import { useFetch } from "../../../utils/hooks";

// import loader component
import Loader from "../../Loader/Loader";
import AverageSessionsFactory from "../../../Factories/AverageSessionsFactory";

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
      console.log(payload);
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

  /**
   * This function allows to create a customized cursor with Recharts.
   * In the graph, when the user hover the dot, a black rectangle will cover the
   * rest of the graph (from the hovered dot).
   * @params props
   * @return a Rectangle components
   **/
  const CustomCursor = (props) => {
    const { points } = props;
    const { x, y } = points[0];
    return (
      <Rectangle
        fill="#000000"
        x={x}
        y={y}
        width={500}
        height={500}
        opacity={0.1}
      />
    );
  };

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
            margin={{ right: 0, left: 5 }}
            width={500}
            height={100}
            data={data.sessions}
            style={{
              background: "#FF0000",
            }}
          >
            <defs>
              {/* To make the linear-gradient opacity on the curve  */}
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
              active={false}
              cursor={<CustomCursor />}
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
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default CurveChart;
