import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { fetchContacts } from './actions'
import App from './containers/App'

const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(fetchContacts())

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
