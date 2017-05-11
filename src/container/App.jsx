import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider }   from 'react-redux'
import counterReducer from '../reducers/counter'
import notepadReducer from '../reducers/notepad'

import Counter from '../components/Counter.jsx'
import Notepad from '../components/Notepad.jsx'

const store = createStore(
  combineReducers({
    counter: counterReducer,
    notepad: notepadReducer,
  })
)

export default class App extends React.Component {

  render() {
    return (
      <Provider store={ store }>
        <div>
          <h1>{ 'Hello, Redux' }</h1>
          <Counter />
          <Notepad />
        </div>
      </Provider>
    )
  }
}
