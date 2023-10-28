import React from "react"
import Header from "./components/header"
import Image from "./components/image"
import logo from "./img/logo.png"





class App extends React.Component {
    

    render() {
        return <div className="mainPageContainer">
        <Header /> 
        <h1>Hi</h1>
        <input  onClick = {this.inputClick}/>
       </div>
    }
    inputClick () {
        console.log("Clicked!")
    }
    mouseOver () {
        console.log("Mouse over")
    }
}

export default App