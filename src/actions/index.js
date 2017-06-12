import accountAPI from '../api/AccountListAPI'
import * as types from '../constants/ActionTypes'

const receiveAccounts = accounts => ({
  type: types.RECEIVE_PRODUCTS,
  accounts: accounts
})

export const getAllAccounts = () => dispatch => {
  accountAPI.getAccounts(accounts => {
    dispatch(receiveAccounts(accounts))
  })
}

export function fetchAccounts(data) {
  return {
    type: types.RECEIVE_PRODUCTS,
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