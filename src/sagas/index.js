import {call, put, take} from 'redux-saga/effects';
import {fetchAccounts} from '../api/AccountListAPI';
import {delay} from "redux-saga";
import * as actions from "../actions";

const DELAY_REQUEST = 0;



export function* loadAccounts() {
  try {
    const accounts = yield call(fetchAccounts);
    // yield call(delay, DELAY_REQUEST);
    console.log(accounts)
    yield put(actions.fetchAccounts(accounts));
  } catch (error) {
    console.log(error)
    yield put({type: 'LOAD_IMAGES_FAILURE', error})
  }
}