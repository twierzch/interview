import {
  createContext,
  useContext,
  useReducer,
} from 'react';

import {
  initialState,
  reducer,
} from './reducer';


const StoreContext = createContext({});

export const useStore = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [StoreContext, { state, dispatch }];
}

export const useSelector = (selector = () => null) => {
  const { state } = useContext(StoreContext);

  return selector(state);
}

export const useDispatch = (action) => {
  const { dispatch } = useContext(StoreContext);

  return dispatch;
};
