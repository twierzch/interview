import {
  groupBy,
  map,
  sumBy,
  uniqBy,
} from 'lodash';
import { createSelector } from 'reselect'


export const selectData = state => state.data;

export const selectCurrentCampaings = state => state.campaigns;

export const selectCurrentDatasources = state => state.datasources;

export const selectAvailableCampaings = createSelector(
  selectData,
  data => uniqBy(data, 'Campaign').map(({ Campaign: campaign }) => campaign),
);

export const selectAvailableDatasources = createSelector(
  selectData,
  data => uniqBy(data, 'Datasource').map(({ Datasource: datasource }) => datasource),
);

const filterByCampaings = (data, campaigns) =>
  data.filter(({ Campaign: campaign }) => campaigns.includes(campaign));

const filterByDatasources = (data, datasources) =>
  data.filter(({ Datasource: datasource }) => datasources.includes(datasource));

const sumResults = (data) => {
  const groupedByDate = groupBy(data, 'Date');
  const mappedGroups = map(groupedByDate, (dateItems, date) => {
    const clicks = sumBy(dateItems, 'Clicks');
    const impressions = sumBy(dateItems, 'Impressions');

    return {
      date,
      clicks: clicks,
      impressions: impressions,
    };
  });
  return mappedGroups;
}

export const selectFilteredData = createSelector(
  selectData,
  selectCurrentCampaings,
  selectCurrentDatasources,
  (data, campaigns, datasources) => {
    if (datasources.length > 0 && campaigns.length > 0) {
      return sumResults(filterByCampaings(filterByDatasources(data, datasources), campaigns));
    }

    if (campaigns.length > 0) {
      return sumResults(filterByCampaings(data, campaigns));
    }

    if (datasources.length > 0) {
      return sumResults(filterByDatasources(data, datasources));
    }

    return sumResults(data);
  }
);
