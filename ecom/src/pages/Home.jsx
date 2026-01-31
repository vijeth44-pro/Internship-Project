import React from 'react'
import ResponsiveAppBar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Home() {
  const [number, setNumber] = useState(0)

  const changeNumber = () => {
    console.log("Number changed");
  }

  // useEffect(()=> {
    //} ,[dependency array])}

  useEffect(()=>{
    changeNumber();
  },[number]) // runs only once when component mounts 

  return (
    <div>
      This is Number : {number}
      <button onClick={() => setNumber(number+1)}>+</button>
      {/* <button onClick={() => setNumber(number-1)}>-</button> */}
    </div>
  )
}
