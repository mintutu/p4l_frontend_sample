import { call, put, takeEvery, take, takeLatest, fork } from 'redux-saga/effects'
import {getAccounts, fetchOffAds, executeOnOffRule} from '../api/AccountListAPI'
import {delay} from "redux-saga"
import * as actions from "../actions"
import * as types from '../constants/ActionTypes'

const DELAY_REQUEST = 0;

function* loadAccounts() {
  try {
    const accounts = yield call(getAccounts);
    yield put(actions.fetchAccountsExecution(accounts))
    yield put(actions.fetchAccountsSetting(accounts))
  } catch (error) {
    yield put({type: types.LOAD_ACCOUNTS_FAILURE, error})
  }
}

function* loadOffAds() {
  while(true) {
    try {
      var { accountId } = yield take(types.ACCOUNT_SELECTED_EXECUTION);
      const accounts = yield call(fetchOffAds, accountId);
      yield put(actions.fetchOffAds(accounts));
    } catch(error) {
      yield put({type: types.LOAD_OFF_ADS_FAILURE, error})
    }
  }
}

function* executeOnOffRules() {
  while(true) {
    try {
      var { accountId } = yield take(types.EXECUTE_ON_OFF_RULES);
      const result = yield call(executeOnOffRule, accountId);
      yield put(actions.getExecutionResult(result));
      localStorage.setItem(accountId, 'executed');
    } catch(error) {
      yield put({type: types.LOAD_OFF_ADS_FAILURE, error})
    }
  }  
}

export default function* root() {
    yield [
        fork(loadAccounts),
        fork(loadOffAds),
        fork(executeOnOffRules)
    ];
}