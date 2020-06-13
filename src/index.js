import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store, { history } from './store';
import App from './App'

//We can wrap app with persistor and give it persistor prop if we want to save redux state in LS
//const persistor = getPersistor();


const mountRoot = document.getElementById('root');
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
  </Provider>,
  mountRoot,
);



