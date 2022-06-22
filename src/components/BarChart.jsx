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

function ChartBar(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activityData, setActivityData] = useState([]);

  const activityUrl = props.url + "/activity";
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
          const sessions = result.data.sessions.map((session, index = 0) => {
            return {
              day: session.day,
              kilogram: session.kilogram,
              calories: session.calories,
              index: index + 1,
            };
          });

          setActivityData(sessions);
          console.log("pouet");
          console.log(sessions);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          console.log(error);
        }
      );
  }, [activityUrl]);

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
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={100}
          height={300}
          data={activityData}
          style={{ background: "#FBFBFB" }}
          // background="#020203"
          margin={{
            top: 50,
            right: -20,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 1" vertical={false}></CartesianGrid>

          <XAxis dataKey="index" interval={0} />
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
    </div>
  );
}

export default ChartBar;
