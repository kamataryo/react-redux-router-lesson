import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


export default class Header extends React.Component {
  render() {

    const location = this.props.location

    return (
     <header>
       <h1>{ 'ヘッダ' }</h1>
       <ul>
         <li><Link to={ '/' }>{ 'ホーム' }</Link></li>
         <li><Link to={ '/counter' }>{ 'カウンタ' }</Link></li>
         <li><Link to={ '/notepad' }>{ 'メモ帳' }</Link></li>
       </ul>
     </header>
   )
  }
}
