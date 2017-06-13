import { call, put, takeEvery, take, takeLatest, fork } from 'redux-saga/effects'
import {fetchAccounts, fetchOffAds} from '../api/AccountListAPI';
import {delay} from "redux-saga";
import * as actions from "../actions";

const DELAY_REQUEST = 0;

function* loadAccounts() {
  try {
    const accounts = yield call(fetchAccounts);
    console.log(accounts)
    yield put(actions.fetchAccounts(accounts));
  } catch (error) {
    console.log(error)
    yield put({type: 'LOAD_IMAGES_FAILURE', error})
  }
}

function* loadOffAds() {
  while(true) {
    try {
      var { accountId } = yield take('ACCOUNT_SELECTED');
      console.log(accountId)
      const accounts = yield call(fetchOffAds, accountId);
      console.log(accounts)
      yield put(actions.fetchOffAds(accounts));
    } catch(e) {
      // yield put(actions.auth.loginError(e.error));
    }
  }
}

export default function* root() {
    yield [
        fork(loadAccounts),
        fork(loadOffAds)
    ];
}