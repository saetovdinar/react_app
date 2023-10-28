import React, { Component } from "react"
import * as ReactDOMClient from "react-dom/client"
import App from "./app"
import "./styles/main.css"
    
 

const app = ReactDOMClient.createRoot(document.getElementById("root"))



app.render(<App/>)