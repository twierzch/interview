import React, { useState } from 'react';

import MultiSelect from '../components/MultiSelect';
import Text from '../components/Text';

import {
  useSelector,
  useDispatch,
} from '../store';
import {
  setCampaigns,
  setDatasources,
} from '../store/actions';
import {
  selectAvailableCampaings,
  selectAvailableDatasources,
} from '../store/selectors';


export default function FiltersContainer() {
  const dispatch = useDispatch(useDispatch);
  const [currentCampaings, setCurrentCampaings] = useState([]);
  const [currentDatasources, setCurrentDatasources] = useState([]);
  const availableCampaings = useSelector(selectAvailableCampaings);
  const availableDatasources = useSelector(selectAvailableDatasources);

  return (
    <>
      <MultiSelect
        label="Datasources"
        value={currentDatasources}
        options={availableDatasources}
        onChange={setCurrentDatasources}
      />
      <MultiSelect
        label="Campaings"
        value={currentCampaings}
        options={availableCampaings}
        onChange={setCurrentCampaings}
      />
      <Text
        typography="title"
        onClick={() => {
          dispatch(setCampaigns(currentCampaings))
          dispatch(setDatasources(currentDatasources))
        }}
      >
        Apply!
      </Text>
    </>
  )

}
