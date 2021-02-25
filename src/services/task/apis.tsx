import axios from 'axios';

import {API_URL} from '@Root/private/constants';
import {
  IActionFetchTaskRequested
} from './types';

const taskUrl = `${API_URL}/task`;

export default class TaskAPI {
  public static fetch(payload: IActionFetchTaskRequested['payload']) {
    return axios.get(`${taskUrl}`, 
    { 
      params: {...payload?.payload},
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    }).then((res) => {
      return res.data;
    }).catch((err) => {
      if (err.response != null) {
        throw Error(err.response.data.error.message);
      }
      throw Error(err);
    });
  }
}