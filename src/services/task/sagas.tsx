import { all, call, put, takeEvery } from 'redux-saga/effects';

import { IAsyncCall } from '@Root/types';
import TaskAPI from './apis';

import { ASYNC_FETCH_TASK } from './constants';

function* asyncListHandler(action: IAsyncCall, api: (payload: any) => Promise<any>, payload: any) {
  try {
    const resJson = yield call(api, payload);
    yield put({ type: action.SUCCESS, payload: { data: resJson } });
  } catch (err) {
    yield put({ type: action.FAILURE, payload: { error: err.message } });
  }
}

function* sagaAsyncCallListGenerator(action: IAsyncCall, api: (payload: any) => Promise<any>) {
  yield takeEvery(action.REQUESTED, asyncListHandler, action, api);
}

export default function* taskWatchers() {
  yield all([
    sagaAsyncCallListGenerator(ASYNC_FETCH_TASK, TaskAPI.fetch),
  ]);
}