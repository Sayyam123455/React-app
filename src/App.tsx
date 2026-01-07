import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[data, setData]= useState(["sayyam", "gaurav", "manish"])
  const[datadetails, setDataDetails]= useState([{Name:"sayyam", age:"23"},{Name:"gaurav", age:"25"},{Name:"manish", age:"27"}])
const handleName =(name)=>{
  data[data.length-1] = name
  console.log(data)
  setData([...data])
}
const handleAge =(name)=>{
  datadetails[datadetails.length-1].age = name
  console.log(datadetails)
  setDataDetails([...datadetails])
}
  return (
    <>{
     data.map((item,index)=>(
      <h3 key={index}>{item}</h3>
     ))
    }
    <input type="text" onChange={(e)=>handleName(e.target.value)} />
    <hr>
    </hr>
    <input type="text" onChange={(e)=>handleAge(e.target.value)} />
{
     datadetails.map((item,index)=>(
      <h3 key={index}>{item.Name},{item.age}</h3>
     ))
    }
    </>
  )
}

export default App
