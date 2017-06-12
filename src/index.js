import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers/AccountList'
import { getAllAccounts } from './actions'
import App from './containers/App'
import OnOffRuleExecution from './containers/OnOffRuleExecution'
import createSagaMiddleware from 'redux-saga'
import {loadAccounts} from './sagas'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
const sagasMiddle = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(...middleware, sagasMiddle)
)

// store.dispatch(getAllAccounts())

sagasMiddle.run(loadAccounts)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
