import { RECEIVE_ACCOUNTS_SETTING, SHOW_ON_RULE_DETAIL_SETTING } from '../constants/ActionTypes'
import Immutable from 'seamless-immutable'

const DEFAULT_STATE = Immutable({
    accountList: [],
    accountId: 0,
    ruleOffExpression: '',
    timeRangeType: 0,
    offAdList: [],
    offRuleList: [],
    onRuleListDetail: []
})

function ruleSetting(state = DEFAULT_STATE, action) {
    if (!action) return DEFAULT_STATE
    switch (action.type) {
        case RECEIVE_ACCOUNTS_SETTING:
            return state.setIn(['offRuleList'], action.payload.accountList.filter(rule => rule.offRuleExpression !== ''))
                .setIn(['accountList'], action.payload.accountList)
        case SHOW_ON_RULE_DETAIL_SETTING:
            return state.setIn(['onRuleListDetail'], action.rule)
        default:
            return state

    }
}

export default ruleSetting
