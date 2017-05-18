import 'babel-polyfill';
import React from 'react';
import PropTypes from 'prop-types';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './store/storeConfig';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import {triggerActiveStateFromChild, apiCallActive} from './actions/activeStateActions';
import {incrementCounterStateFromChild, apiCallCounter} from './actions/counterStateActions';

const store = configureStore();
store.dispatch(apiCallActive());
store.dispatch(apiCallCounter());
const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('appRoot')
);