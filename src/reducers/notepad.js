
const initialState = {
  title: '',
  content: '',
}

export default (state = initialState, action) => {

  const type = action.type
  const title_prev = state.title
  const title_next = action.payload ? action.payload.title : false
  const content_prev = state.content
  const content_next = action.payload ? action.payload.content : false

  switch (type) {
    case 'NOTEPAD.UPDATE_TITLE':
      return ({ title: title_next, content: content_prev })
    case 'NOTEPAD.UPDATE_CONTENT':
      return ({ title: title_prev, content: content_next })
    default:
      return state
  }

}
