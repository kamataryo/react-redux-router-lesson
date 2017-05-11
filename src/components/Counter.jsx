import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  count: state.counter.count
})

const dispatchStateToProps = dispatch => ({
  countUp   : () => dispatch({ type: 'COUNTER.ADD', payload: { number: +1 } }),
  countDown : () => dispatch({ type: 'COUNTER.ADD', payload: { number: -1 } }),
  doubleUp  : () => dispatch({ type: 'COUNTER.DOUBLE' })
})

@connect(mapStateToProps, dispatchStateToProps)
export default class Counter extends React.Component {
  render() {

    const {
      count,
      countUp,
      countDown,
      doubleUp,
    } = this.props


    return (
      <main>
        <h2>{ 'Count me!' }</h2>
        <div>{ 'result: ' }<strong>{ count }</strong></div>
        <button onClick={ countUp }>{ 'up' }</button>
        <button onClick={ countDown }>{ 'down' }</button>
        <button onClick={ doubleUp }>{ 'double' }</button>
      </main>
    )
  }
}
