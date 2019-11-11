import React from 'react';
import PropTypes from 'prop-types';
import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
} from 'recharts';

import Text from './Text';


export default function Chart({
  data,
}) {
  if (data.length === 0) {
    return <Text typography="title">Ups, we have no data for this filter combination!</Text>
  }

  return (
    <LineChart
      width={1000}
      height={700}
      data={data}
      margin={{ top: 40, right: 20, left: 10, bottom: 5 }}
    >
      <XAxis dataKey="date" />
      <YAxis yAxisId="left" domain={['dataMin', 'dataMax']}  />
      <YAxis yAxisId="right" orientation="right" domain={['dataMin', 'dataMax']}  />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="clicks" stroke="#ff7300" yAxisId="left" />
      <Line type="monotone" dataKey="impressions" stroke="#387908" yAxisId="right" />
    </LineChart>
  )
}

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    clicks: PropTypes.number,
    impressions: PropTypes.number,
  })).isRequired,
};
