import React from 'react'
import "./postcard.css"

const PostCard = () => {
  return (
    <div className='PostCard'>
        <h3>This is post title</h3>
        <div className='comments'>
            <span>12 comments</span>
            <span>2 replies</span>
        </div>
    </div>
    
  )
}

export default PostCard