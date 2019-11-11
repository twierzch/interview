import React from 'react';

import FlexRow from './components/FlexRow';
import ChartWrapper from './components/ChartsWrapper';
import FiltersWrapper from './components/FiltersWrapper';
import Text from './components/Text';
import ChartContainer from './containers/ChartContainer';
import FiltersContainer from './containers/FiltersContainer';
import { useStore } from './store';


export default function App() {
  const [StoreProvider, value] = useStore();

  return (
    <StoreProvider.Provider value={value}>
      <FlexRow>
        <FiltersWrapper>
          <Text typography="title">Filters</Text>
          <FiltersContainer />
        </FiltersWrapper>
        <ChartWrapper>
          <Text typography="title">Chart</Text>
          <ChartContainer />
        </ChartWrapper>
      </FlexRow>
    </StoreProvider.Provider>
  );
};
