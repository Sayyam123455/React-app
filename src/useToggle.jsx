import { useState } from "react"

const useToggle =(defaultValue)=>{
    const[value, setValue] = useState(defaultValue)

    function toggleExp(val){
       if(typeof val!="boolean"){
            setValue(!value)
       }
       else{
            setValue(value)

       }
    }
    return[value, toggleExp]
}
export default useToggle