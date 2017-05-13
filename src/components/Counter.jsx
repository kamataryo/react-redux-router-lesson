import React from 'react'
import { connect } from 'react-redux'
import Header from './Header.jsx'

const mapStateToProps = state => ({
  count: state.counter.count
})

const dispatchStateToProps = dispatch => ({
  countUp   : () => dispatch({ type: 'COUNTER.ADD', payload: { number: +1 } }),
  countDown : () => dispatch({ type: 'COUNTER.ADD', payload: { number: -1 } }),
  doubleUp  : () => dispatch({ type: 'COUNTER.DOUBLE' }),
  doubleUpAsync : () => setTimeout(
    () => dispatch({ type: 'COUNTER.DOUBLE' }),
    2000),
})

@connect(mapStateToProps, dispatchStateToProps)
export default class Counter extends React.Component {
  render() {

    const {
      count,
      countUp,
      countDown,
      doubleUp,
      doubleUpAsync,
    } = this.props


    return (
      <div>
        <Header />
        <main>
          <h2>{ 'Count me!' }</h2>
          <div>{ 'result: ' }<strong>{ count }</strong></div>
          <button onClick={ countUp }>{ 'up' }</button>
          <button onClick={ countDown }>{ 'down' }</button>
          <button onClick={ doubleUp }>{ 'double' }</button>
          <button onClick={ doubleUpAsync }>{ 'double async' }</button>
        </main>
      </div>
    )
  }
}
