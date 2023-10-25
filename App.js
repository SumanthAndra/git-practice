import React,{useEffect,useState} from 'react';
import axios from 'axios';

const App=()=>{
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then(       //https://jsonplaceholder.typicode.com/todos
      response=>setData(response.data)                                  //console.log(response.data)
    )

  },[])
  return(
    <div>
      {data.map(item=><li key={item.id}>{item.title}</li>)}
    </div>
  )
}

export default App;


/*

for post

axios.post('https://jsonplaceholder.typicode.com/todos', {
  "name":"yousaf",
  "job":"developer"
}).then(response=>console.log)

*/

/*

for put  (updtae)

axios.put('https://jsonplaceholder.typicode.com/todos', {
  "name":"yousaf",
  "job":"developer"
}).then(response=>console.log)

*/

/*

for delete

axios.delete('https://jsonplaceholder.typicode.com/todos').then(response=>console.log)

*/