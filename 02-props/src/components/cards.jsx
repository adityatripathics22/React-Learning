import React from 'react'

const cards = (props) => {
  return (
    <div class="card">
      <img src={props.img} alt="Profile Image" class="profile-img" />
      <h2>{props.user}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View Profile</button>
    </div>
  )
}

export default cards