import React from 'react'
import { connect } from 'react-redux'
import Header from './Header.jsx'

const mapStateToProps = state => ({
  title   : state.notepad.title,
  content : state.notepad.content,
})

const dispatchStateToProps = dispatch => ({
  updateTitle   : value => dispatch({ type: 'NOTEPAD.UPDATE_TITLE', payload: { title: value } }),
  updateContent : value => dispatch({ type: 'NOTEPAD.UPDATE_CONTENT', payload: { content: value } }),
})

@connect(mapStateToProps, dispatchStateToProps)
export default class Notepad extends React.Component {
  render() {

    const {
      title,
      content,
      updateTitle,
      updateContent,
    } = this.props

    const pathname = this.props.history.location.pathname

    return (
      <div>
        <Header />
        <main>
          <h2>{ 'Note me!' }</h2>
          <input
            type="text"
            value={ title }
            onChange={ e => updateTitle(e.target.value) }
          /><br />
          <textarea
            value={ content }
            onChange={ e => updateContent(e.target.value) }
          />
          <pre>{ title + '\n' + content }</pre>
        </main>
      </div>
    )
  }
}
