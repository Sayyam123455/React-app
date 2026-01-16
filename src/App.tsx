import { useActionState, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import College from './College';
import { subjectComponent } from "./ContextComponent";
// import './App.css'

function App() {
 const [subject, setSubject]=useState("english")
  return (
    <>
    <subjectComponent.Provider value={subject}>
    <select onChange={(event)=>setSubject(event.target.value)}>
      <option value="">Select Option</option>
      <option value="Maths">Maths</option>
      <option value="Science">Science</option>
      <option value="history">history</option>
    </select>
    
 <div style={{background:"red", padding:20}}>
  <h1>content api</h1>
   <College />
   
 </div>
</subjectComponent.Provider>
    </>
  )
}

export default App
