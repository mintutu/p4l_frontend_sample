import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ACCOUNT_SELECTED, FETCH_OFF_ADS } from '../constants/ActionTypes'

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
    case ACCOUNT_SELECTED:
      return action.accountId
    default:
      return state
  }  
}

const getOffRuleExpression = (state = [], action) => {
 switch (action.type) {
    case FETCH_OFF_ADS:
      return action.payload.ruleOffExpression
    default:
      return state
  }  
}

const getTimeRange = (state = [], action) => {
 switch (action.type) {
    case FETCH_OFF_ADS:
      return action.payload.timeRangeType
    default:
      return state
  }  
}

const getOffAdsList = (state = [], action) => {
 switch (action.type) {
    case FETCH_OFF_ADS:
      return action.payload.offAdList
    default:
      return state
  }  
}

export default combineReducers({
  accountReducer: visibleIds,
  selectReducer: selectedAccount,
  getOffRuleExpReducer: getOffRuleExpression,
  getTimeRangeReducer : getTimeRange,
  getOffAdsListReducer: getOffAdsList
})