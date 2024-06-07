import React from "react"
import Header3 from "./Header3"
import Body3 from "./Body3"
import "./style.css"
export default function App3(){
    const [user, setUser] = React.useState("Shantanu")
    return (
        <main>
            <Header3 name={user}/>
            <Body3 name={user} />
        </main>
    )
}