import { List, Record } from 'immutable';

import { 
  FETCH_TASK_REQUESTED,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAILURE,
 } from './constants';

// Notes state
export interface ITaskState {
  tasks: List<ITask>;
  status: string,
  loading: boolean;
  error: string;
}
export interface ITask {
  id: number;
  name: string;
  description: string;
}
export interface ITaskStateRecord extends Record<ITaskState>, ITaskState {}

// Task actions
export interface IActionFetchTaskRequested {
  type: typeof FETCH_TASK_REQUESTED;
  payload: any;
}
export interface IActionFetchTaskSuccess {
  type: typeof FETCH_TASK_SUCCESS;
  payload: {
    data: any,
    currentPage: number,
    totalPages: number,
  };
}
export interface IActionFetchTaskFailure {
  type: typeof FETCH_TASK_FAILURE;
  payload: {
    error: string,
  };
}

export type IActionsTask
  = IActionFetchTaskRequested
   | IActionFetchTaskSuccess 
   | IActionFetchTaskFailure;