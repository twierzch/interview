import {
  FETCHED_DATA,
  SET_CAMPAIGNS,
  SET_DATASOURCES,
} from './actions';


export const initialState = {
  data: [],
  datasources: [],
  campaigns: [],
};

export const reducer = (state, { type, data }) => {
  switch (type) {
    case FETCHED_DATA:
      return {
        data,
        datasources: [],
        campaigns: [],
      };
    case SET_CAMPAIGNS:
      return {
        ...state,
        campaigns: data,
      }
    case SET_DATASOURCES:
      console.log(data)
      return {
        ...state,
        datasources: data,
      };
    default:
      return state;
  }
}
