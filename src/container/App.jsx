import React from 'react'
import { createStore, combineReducers } from 'redux'
import { Provider }   from 'react-redux'
import counterReducer from '../reducers/counter'


import Counter from '../components/Counter.jsx'

const store = createStore(combineReducers({
  counter: counterReducer,
  // note: noteReducer,
}))

export default class App extends React.Component {

  render() {
    return (
      <Provider store={ store }>
        <div>
          <h1>{ 'Hello, Redux' }</h1>
          <Counter />
        </div>
      </Provider>
    )
  }
}
