import { combineReducers } from 'redux'

import filterOffRules from './OffRuleList'
import receiveAccounts from './AccountList'

export default combineReducers({
    filterOffRules,
    receiveAccounts
})