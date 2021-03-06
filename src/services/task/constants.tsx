import { IAsyncCall } from '@Root/types';

export const FETCH_TASK_REQUESTED = 'FETCH_TASK/REQUESTED';
export const FETCH_TASK_SUCCESS = 'FETCH_TASK/SUCCESS';
export const FETCH_TASK_FAILURE = 'FETCH_TASK/FAILURE';

export const ASYNC_FETCH_TASK: IAsyncCall = {
  REQUESTED: FETCH_TASK_REQUESTED,
  SUCCESS: FETCH_TASK_SUCCESS,
  FAILURE: FETCH_TASK_FAILURE,
};