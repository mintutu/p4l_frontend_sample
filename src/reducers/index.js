import { combineReducers } from 'redux'

import execution from './ExecutionReducer'
import ruleSetting from './SettingReducer'

export default combineReducers({
    executionReducer: execution,
    settingReducer: ruleSetting,
})
