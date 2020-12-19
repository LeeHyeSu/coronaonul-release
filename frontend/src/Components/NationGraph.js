import React from "react";
import moment from "moment";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const today = moment().format("MM-DD");
const oneDayBefore = moment().subtract(1, "d").format("MM-DD");
const twoDayBefore = moment().subtract(2, "d").format("MM-DD");
const threeDayBefore = moment().subtract(3, "d").format("MM-DD");
const fourDayBefore = moment().subtract(4, "d").format("MM-DD");
const fiveDayBefore = moment().subtract(5, "d").format("MM-DD");
const sixDayBefore = moment().subtract(6, "d").format("MM-DD");

export default ({ weekData }) => {
  let sixDayBeforeData = weekData[0];
  let fiveDayBeforeData = weekData[1];
  let fourDayBeforeData = weekData[2];
  let threeDayBeforeData = weekData[3];
  let twoDayBeforeData = weekData[4];
  let oneDayBeforeData = weekData[5];
  let todayData = weekData[6];

  const data = [
    {
      name: `${sixDayBefore}`,
      확진자: `${sixDayBeforeData}`,
    },
    {
      name: `${fiveDayBefore}`,
      확진자: `${fiveDayBeforeData}`,
    },
    {
      name: `${fourDayBefore}`,
      확진자: `${fourDayBeforeData}`,
    },
    {
      name: `${threeDayBefore}`,
      확진자: `${threeDayBeforeData}`,
    },
    {
      name: `${twoDayBefore}`,
      확진자: `${twoDayBeforeData}`,
    },
    {
      name: `${oneDayBefore}`,
      확진자: `${oneDayBeforeData}`,
    },
    {
      name: `${today}`,
      확진자: `${todayData}`,
    },
  ];

  return (
    <div style={{ width: "100%", height: 400, paddingRight: "15px" }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 60,
            right: 0,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="확진자" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
