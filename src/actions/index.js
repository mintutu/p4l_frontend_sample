import accountAPI from '../api/AccountListAPI'
import * as types from '../constants/ActionTypes'

export function fetchAccounts(data) {
  return {
    type: types.RECEIVE_ACCOUNTS,
    payload: data
  }
}

export const selectAccountId = (accountId) => {
  console.log("clicked");
  return {
    type: "ACCOUNT_SELECTED",
    payload: accountId
  }
}