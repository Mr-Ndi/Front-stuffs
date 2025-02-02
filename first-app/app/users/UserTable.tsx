import React from 'react'
import Link from 'next/link';
import { sort } from 'fast-sort';

interface User {
    id: number;
    name: String;
    email:string;
  }
  
  interface Props{
    sortOrder:string
  }

const UserTable = async ({sortOrder}: Props) => {

    const res = await fetch('https://jsonplaceholder.typicode.com/busers')
    const users: User[] = await res.json()

    const sortedUsers = sort(users).asc(
      sortOrder === "emali" ?
      (user) => user.email
      :(user) => user.name
    );
    
  return (

    <table className='table table-border'>
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
      {users.map(user => <tr key={user.id}>
        <td>{ user.name }</td>
        <td>{ user.email }</td>
      </tr> )}
      </tbody>
     </table>
  )
}

export default UserTable