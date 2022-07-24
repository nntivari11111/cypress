import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"
function App() {
  const [counter,setCounter]=useState(0);
  const fetchData=()=>{
    axios.get("http://localhost:8080/counter").then(({data})=>setCounter(data.value))
  }
  const incrementHandler=()=>{
    axios.post("http://localhost:8080/counter",
    {value:counter+1}).then(r=>{setCounter(r.data.value)})
  }
  useEffect(()=>{
    fetchData();
  },[]);
  
  return (
    <div className="App">
     <h2>Count is {counter}</h2>
     <button className='increment_count' onClick={incrementHandler}>Increment</button>
     {/* <button className='decrement_count' onClick={()=>setCounter(prev=>prev-1)}>Decrement</button> */}

    </div>
  );
}

export default App;
