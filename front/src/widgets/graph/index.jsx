import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "пн",
    zadacha: 1,
  },
  {
    name: "вт",
    zadacha: 1,
  },
  {
    name: "ср",
    zadacha: 1,
  },
  {
    name: "чт",
  },
  {
    name: "пт",
  },
  {
    name: "сб",
  },
  {
    name: "вс",
  },
];

export const Graph = () => {
  const demoUrl = "https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5";

  return (
    <ResponsiveContainer width="80%" height="50%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 45,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="zadacha"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
