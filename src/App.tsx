import { useActionState, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const handleSubmit = async(previousData, formData)=>{
    let name=formData.get('name');
    let password=formData.get('password');
    await new Promise(res=>setTimeout(res, 2000))
    console.log("handleSubmit", name, password )
    if(name && password){
      return{message:"data submitted", name, password}
    }
    else{
      return{error:"data not submited", name, password}
    }
  }
 const[data, action, pending]=useActionState(handleSubmit, undefined)
  return (
    <>
  <form action={action}>
    <input type="text" placeholder='enter name' name='name'/>
    <br></br>
    <br></br>
    <input type="password" placeholder='enter password' name='password'/>
    <br></br>
    <br></br>
<button disabled={pending}>Submit Data</button>
  </form>
  {
    data?.error && <span>{data?.error}</span>
  }
  {
    data?.message && <span>{data?.message}</span>
  }
<h3>Name:{data?.name}</h3>
    </>
  )
}

export default App
