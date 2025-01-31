import React from 'react'

interface Props{
    params: {id:number, photoId: number}
}
const UserPhoto = ({params: {id, photoId}} : Props) => {
  return (
    <div>User {id} and owns photo {photoId} </div>
  )
}

export default UserPhoto