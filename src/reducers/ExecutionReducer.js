import * as types from "../constants/ActionTypes";
import Immutable from 'seamless-immutable'

const DEFAULT_STATE = Immutable({
    accountList: [],
    accountId: 0,
    ruleOffExpression: '',
    timeRangeType: 0,
    offAdList: [],
    offRuleList: [],
    isSelected: false,
    executionResult: null,
    executedAccounts: []
})

function execution(state = DEFAULT_STATE, action) {
    if (!action) return DEFAULT_STATE
    switch (action.type) {
        case types.RECEIVE_ACCOUNTS_EXECUTION:
            return state.setIn(['accountList'], action.payload.accountList)
        case types.ACCOUNT_SELECTED_EXECUTION:
            return state.setIn(['accountId'], action.accountId)
                        .setIn(['isSelected'], true)
                        .setIn(['executionResult'], null)
        case types.FETCH_OFF_ADS:
            return state.setIn(['ruleOffExpression'], action.payload.ruleOffExpression)
                .setIn(['timeRangeType'], action.payload.timeRangeType)
                .setIn(['offAdList'], action.payload.offAdList)
        case types.GET_EXECUTION_RESULT:
            return state.setIn(['executionResult'], action.result)
        case types.EXECUTE_ON_OFF_RULES:
            return state.setIn(['executedAccounts'], [...state.executedAccounts, action.accountId])
        default:
            return state

    }
}

export default execution