import React from 'react'

interface Props{
    params: {id: number }
}
const UserDetailedPage = ({params: {id}}: Props) => {
  return (
    <div>
    UserDetailedPage {id}
    </div>
    
  )
}

export default UserDetailedPage