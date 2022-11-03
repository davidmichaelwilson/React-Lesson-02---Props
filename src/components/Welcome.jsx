import React from 'react'

// ****** Create your component below
function Welcome(props) {
  return (
    <div>
      <h2>Welcome {props.userName}!</h2>
        <p>It looks like you're {props.userAge} years old.</p>
    </div>
  )
}




// *** Export your component here
export default Welcome