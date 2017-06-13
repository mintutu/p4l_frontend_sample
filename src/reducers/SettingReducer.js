import { RECEIVE_ACCOUNTS_SETTING } from '../constants/ActionTypes'
import Immutable from 'seamless-immutable'

const DEFAULT_STATE = Immutable({
    accountList: [],
    accountId: 0,
    ruleOffExpression: '',
    timeRangeType: 0,
    offAdList: [],
    offRuleList: []
})

function ruleSetting(state = DEFAULT_STATE, action) {
    if (!action) return DEFAULT_STATE
    switch (action.type) {
        case RECEIVE_ACCOUNTS_SETTING:
            return state.setIn(['offRuleList'], action.payload.accountList.filter(rule => rule.offRuleExpression != ''))
        default:
            return state

    }
}

export default ruleSetting
