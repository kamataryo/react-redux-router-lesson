import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Provider }   from 'react-redux'
import counterReducer from '../reducers/counter'
import notepadReducer from '../reducers/notepad'

import { BrowserRouter, Route } from 'react-router-dom'
import Home    from '../components/Home.jsx'
import Counter from '../components/Counter.jsx'
import Notepad from '../components/Notepad.jsx'

const history = createHistory()
const historyMiddleWare = routerMiddleware(history)
const store = createStore(
  combineReducers({
    counter : counterReducer,
    notepad : notepadReducer,
    router  : routerReducer,
  }),
  applyMiddleware(historyMiddleWare)
)

export default class App extends React.Component {

  render() {
    return (
      <Provider store={ store }>
        <BrowserRouter history={ history }>
          <div>
            <h1>{ 'Hello, Redux and Router' }</h1>
            <Route path="/"        component={ Home } exact />
            <Route path="/counter" component={ Counter } exact />
            <Route path="/notepad" component={ Notepad } exact />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
