'use client'
import React from 'react'
import { notFound, useRouter } from 'next/navigation'

interface Props{
    params: {id: number }
}
const UserDetailedPage = ({params: {id}}: Props) => {
  const router = useRouter()
  if ( id > 10) return notFound()
  return (
    <div>
    UserDetailedPage {id}
    <br />
    <button
    className='btn btn-primary'
    onClick={()=>{
      router.push("/users")
    }}
    >Add user</button>
    </div>
    
  )
}

export default UserDetailedPage