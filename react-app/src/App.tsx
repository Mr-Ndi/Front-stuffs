import axios from 'axios';
import Form from './components/Form/Forms';
// import { useEffect, useState } from 'react';

// interface User{
//   id: number;
//   name: string
// }
// function App() {
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
//       .then(res => setUsers(res.data))
//   }, [])
//   return <ul>
//     {users.map(user => <li key={user.id}>{user.name}</li>)}
//   </ul>; 
// }

// export default App;

function App() {
  return (
    <div>
      <Form />
    </div>
  );
};

export default Form