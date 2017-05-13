import React from 'react'
import Header from './Header.jsx'

const Home = (props) => {
  console.log(props.history)

  return (
    <div>
      <Header />
      <main>
        <h1>{ 'Home' }</h1>
      </main>
    </div>
  )
}

export default Home
