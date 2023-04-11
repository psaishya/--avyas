import React from 'react'

const Home = (props) => {
  return (
    <div>
      <h1>homepage hehe welcome welcome
        this is {props.user};
        {console.log(props.user)}
      </h1>
    </div>
  )
}

export default Home
