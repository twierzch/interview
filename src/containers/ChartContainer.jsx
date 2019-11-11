import React, { useEffect } from 'react';

import Chart from '../components/Chart';

import {
  useSelector,
  useDispatch,
} from '../store';
import {
  fetchedData,
} from '../store/actions';
import {
  selectFilteredData,
} from '../store/selectors';


export default function ChartContainer() {
  const dispatch = useDispatch();
  const data = useSelector(selectFilteredData);
  // console.log(data)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data.json');
      const data = await response.json();

      dispatch(fetchedData(data));
    }

    fetchData();
  }, [dispatch]);

  return (
    <Chart data={data}/>
  );
}
