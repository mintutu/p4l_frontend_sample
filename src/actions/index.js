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
