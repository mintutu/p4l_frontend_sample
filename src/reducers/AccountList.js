import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes'

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
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

export default combineReducers({
  accountReducer: visibleIds,
  selectReducer: selectedAccount
})