import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';

import taskReducer from '@Root/services/task/reducer';
import {IGlobalState} from '@Root/types';

export default (history: History) => combineReducers<IGlobalState>({
  router: connectRouter(history),
  taskState: taskReducer,
});