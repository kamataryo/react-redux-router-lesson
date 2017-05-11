
const initialState = {
  count: 0,
}

export default (state = initialState, action) => {

  const prev = state.count
  const type = action.type
  const payload = action.payload

  switch (type) {
    case 'COUNTER.ADD':
      return ({ count: prev + payload.number })
    case 'COUNTER.DOUBLE':
      return({ count: prev * 2 })
    default:
      return state
  }

}
