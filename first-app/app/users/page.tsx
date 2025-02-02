import React from 'react'
import UserTable from './UserTable'
import Link from 'next/link'

interface Props{
  searchParams: { sortOrder:string }
}

const UsersPage = async ({ searchParams }: { searchParams: { sortOrder?: string } }) => {
  const sortOrder = searchParams?.sortOrder || "default";

  console.log(sortOrder)
  return (
    <>
     <h1>Users</h1> 
     <Link className="btn" href="/users/new">Create</Link>
     < UserTable sortOrder={sortOrder}/>
    </>
  )
}

export default UsersPage