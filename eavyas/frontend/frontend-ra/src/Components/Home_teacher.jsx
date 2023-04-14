import React from 'react'

const Home_teacher = (props) => {
  const x=localStorage.getItem('loggedteacher');
  return (
    <div>
      <h1>homepage hehe welcome welcome for TEACHER
        
        this is {props.user};
       { console.log(x)}
        {x};
        {console.log(props.user)}
      </h1>
    </div>
  )
}

export default Home_teacher
