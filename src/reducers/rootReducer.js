import {combineReducers} from 'redux';
import activeStateReducer from './activeStateReducer';
import counterStateReducer from './counterStateReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
    activeStateReducer,
    counterStateReducer,
    routing: routerReducer
});

export default rootReducer;