import { init } from '@rematch/core';
import { createBrowserHistory as createHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRematchPersist from '@rematch/persist';
import { routerReducer, logoutReducer } from './baseReducers';
import models from './models';

const middlewares = [];
export const history = createHistory();

middlewares.push(routerMiddleware(history));

const persistPlugin = createRematchPersist({
  whitelist: ['rewards'],
  throttle: 500,
  version: 1,
});

const store = init({
  models,
  plugins: [
    //persistPlugin,
  ],
  redux: {
    rootReducers: { ...logoutReducer },
    reducers: {
      router: routerReducer(history),
    },
    middlewares,
  },
});

export const { dispatch } = store;
export default store;
