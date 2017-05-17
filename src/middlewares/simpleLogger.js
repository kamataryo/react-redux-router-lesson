export default store => next => action => {
  const now      = new Date().toString()
  const type     = action.type
  const preState = JSON.stringify(store.getState())
  const payload  = JSON.stringify(action.payload)
  next(action)
  const postState = JSON.stringify(store.getState())
  // eslint-disable-next-line no-console
  console.log(`[${now}] type:${type} payload:${payload} pre:${preState} post:${postState}`)
}
