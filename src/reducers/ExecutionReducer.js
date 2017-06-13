import { RECEIVE_ACCOUNTS_EXECUTION, ACCOUNT_SELECTED, FETCH_OFF_ADS } from '../constants/ActionTypes'
import Immutable from 'seamless-immutable'

const DEFAULT_STATE = Immutable({
    accountList: [],
    accountId: 0,
    ruleOffExpression: '',
    timeRangeType: 0,
    offAdList: [],
    offRuleList: []
})

function execution(state = DEFAULT_STATE, action) {
    if (!action) return DEFAULT_STATE
    switch (action.type) {
        case RECEIVE_ACCOUNTS_EXECUTION:
            return state.setIn(['accountList'], action.payload.accountList)
        case ACCOUNT_SELECTED:
            return state.setIn(['accountId'], action.accountId)
        case FETCH_OFF_ADS:
            return state.setIn(['ruleOffExpression'], action.payload.ruleOffExpression)
                .setIn(['timeRangeType'], action.payload.timeRangeType)
                .setIn(['offAdList'], action.payload.offAdList)
        default:
            return state

    }
}

export default execution