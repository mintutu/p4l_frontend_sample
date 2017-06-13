import { combineReducers } from 'redux'
import { RECEIVE_ACCOUNTS } from '../constants/ActionTypes'

const receiveAccounts = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ACCOUNTS:
        return action.payload.accountList
    default:
      return state
  }
}

const selectedAccount = (state = [], action) => {
 switch (action.type) {
    case "ACCOUNT_SELECTED":
      return action.payload
    default:
      return state
  }  
}

export default receiveAccounts