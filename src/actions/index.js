import * as types from '../constants/ActionTypes'

export function fetchAccountsExecution(data) {
  return {
    type: types.RECEIVE_ACCOUNTS_EXECUTION,
    payload: data
  }
}

export function fetchAccountsSetting(data) {
    return {
        type: types.RECEIVE_ACCOUNTS_SETTING,
        payload: data
    }
}

export function fetchOffAds(data) {
  return {
    type: types.FETCH_OFF_ADS,
    payload: data
  }  
}

export const selectAccountId = (accountId) => {
  console.log("clicked");
  return {
    type: "ACCOUNT_SELECTED",
    accountId: accountId
  }
}

export const selectOnRuleDetail = (rule) => {
    return {
        type: types.SHOW_ON_RULE_DETAIL_SETTING,
        rule: rule
    }
}