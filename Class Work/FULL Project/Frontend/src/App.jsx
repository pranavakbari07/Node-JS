import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';

export default function App() {

  useEffect(() => {
    fetchApi();
  })

  const fetchApi = async () => {
    await axios.get("http://localhost:2438").then((res)=>{
      console.log(res);
    })
  }

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
