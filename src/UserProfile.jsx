import React, { useId } from 'react'
import { useParams } from 'react-router'

const UserProfile = () => {

const { userId } = useParams();
 

const userInfo = Users.filter(user => user.id == useId)

console.log(params)
console.log(userInfo)

  return (
    <div>
        <h1>UserProfile</h1>
        <p>user id : {userInfo.id}</p>
          <p>user id : {userId.name}</p>



    </div>
  )
}

export default UserProfile