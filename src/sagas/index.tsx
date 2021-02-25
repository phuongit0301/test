import { all, fork } from 'redux-saga/effects';

import taskWatchers from '@Root/services/task/sagas';

export default function* rootSaga() {
  yield all([
    fork(taskWatchers),
  ]);
}
