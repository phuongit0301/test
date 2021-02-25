import { Record } from 'immutable';
import { RouterState } from 'connected-react-router';

import { ITaskStateRecord } from '@Root/services/task/types';


export interface IGlobalState {
  router: RouterState;
  taskState: ITaskStateRecord;
}
export interface IGlobalStateRecord extends Record<IGlobalState>, IGlobalState {}

// Interface for async call steps
export interface IAsyncCall {
  REQUESTED: string;
  SUCCESS: string;
  FAILURE: string;
}
export interface IWaitingAsyncCall {
  SHOW: string;
  HIDE: string;
}