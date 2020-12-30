import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  { name: 'JavaScript', 今日: 10, 今月: 50, 累計: 100 }
]

export default class CompletingGraph extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <div>
        <BarChart
          width={300}
          height={300}
          data={data}
          margin={{
            top: 5, right: 10, left: 10, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar barSize={40} dataKey="今日" fill="#8884d8" />
          <Bar barSize={40} dataKey="今月" fill="red" />
          <Bar barSize={40} dataKey="累計" fill="green" />
        </BarChart>
      </div>
    );
  }
}

