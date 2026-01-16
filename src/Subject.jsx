import { useContext } from "react"
import { subjectComponent } from "./ContextComponent";


function Subject(){
    const subject= useContext(subjectComponent)
    return(
        <div style={{background:"Skyblue", padding:20}}>
            <h1>Subject Name: {subject}</h1>

        </div>
    )
}
export default Subject