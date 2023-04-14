import React from 'react'

const Home_student = (props) => {
  const x=localStorage.getItem('loggedstudent');
  return (
    <div>
      <h1>homepage hehe welcome welcome for STUDENTS
        this is {props.user};
       { console.log(x)}
        {x};
        {console.log(props.user)}
      </h1>
    </div>
  )
}

export default Home_student
