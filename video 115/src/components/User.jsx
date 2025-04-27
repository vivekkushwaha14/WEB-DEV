import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const params = useParams()
  return (
    <div>
      I am a user {params.username}
    </div>
  )
}

export default User
