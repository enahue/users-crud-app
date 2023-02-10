import React from 'react'
import UserCard from './UserCard'

const UsersList = ({users}) => {
  return (
    <section>
    {users.map((user) => <UserCard user={user} key={user.id}/>)}
  </section>
  )
}

export default UsersList
