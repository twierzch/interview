export const FETCHED_DATA = 'FETCHED_DATA';

export const fetchedData = (data = []) => ({
  type: FETCHED_DATA,
  data,
});

export const SET_DATASOURCES = 'SET_DATASOURCES';

export const setDatasources = (datasources = []) => ({
  type: SET_DATASOURCES,
  data: datasources,
});

export const SET_CAMPAIGNS = 'SET_CAMPAIGNS';

export const setCampaigns = (campaigns = []) => ({
  type: SET_CAMPAIGNS,
  data: campaigns,
});
