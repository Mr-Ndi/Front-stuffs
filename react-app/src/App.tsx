// import  Message  from './Message';

import { useEffect, useRef } from "react";

// import ListGroup from "./components/ListGroup";
const connect = ()=> console.log('Connecting')
const diconnect = ()=> console.log('Disconnecting')

function App() {
  const ref = useRef<HTMLInputElement>(null)
  useEffect(()=>{
    if (ref.current) ref.current.focus();
  })

  useEffect(()=> {
    document.title = 'Nje naa Mbaduko'
  })
  return (
    <div>
      <input type="text" className="form-control" />
    </div>
  );
}

export default App
