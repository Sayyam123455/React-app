import { useActionState, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import College from './College';
import useToggle from './useToggle';
// import { subjectComponent } from "./ContextComponent";
// import './App.css'

function App() {
const [value, toggleExp]= useToggle(true)
  return (
    <>
   <div>
    <button onClick={toggleExp}>Toggle Button</button>
    <button onClick={()=>toggleExp(false)}>Hide Button</button>
    <button onClick={()=>toggleExp(true)}>Show Button</button>


    {
      value?<h1>Heading1 in js</h1>:null
      }
   </div>
    </>
  )
}

export default App
