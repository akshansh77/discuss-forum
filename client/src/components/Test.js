import React from 'react'
import { useParams } from 'react-router-dom'

const Test = () => {
    const {postid} = useParams();
  return (
    <div>Post is of {postid}</div>
  )
}

export default Test