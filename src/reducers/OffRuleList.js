import { combineReducers } from 'redux'
import { RECEIVE_ACCOUNTS } from '../constants/ActionTypes'

const filterOffRules = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ACCOUNTS:
            const rules = action.payload.accountList.filter(account => account.offRuleExpression != "")
            localStorage.setItem('offRules', rules)
            return rules
        default:
            return state
    }
}

export default filterOffRules