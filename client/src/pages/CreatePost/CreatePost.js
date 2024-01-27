import React from 'react'
import "./createpost.css"

const CreatePost = () => {
  return (
    <div>CreatePost
         <div className='createpost'>
         <h3>Create Your Account</h3>
        <input className='inputBox' placeholder='Post title'/>
      <input className='inputBox' placeholder='Describe your post'/>
        
        </div>
    </div>
   
  )
}

export default CreatePost