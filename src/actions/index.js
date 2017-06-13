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
  return {
    type: types.ACCOUNT_SELECTED_EXECUTION,
    accountId: accountId
  }
}

export const selectOnRuleDetail = (rule) => {
    return {
        type: types.SHOW_ON_RULE_DETAIL_SETTING,
        rule: rule
    }
}

export const getExecutionResult = (result) => {
    return {
        type: types.GET_EXECUTION_RESULT,
        result: result
    }  
}

export const executionOnOffRules = (accountId) => {
    return {
    type: types.EXECUTE_ON_OFF_RULES,
    accountId: accountId
  }  
}