import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter,Route} from "react-router-dom"
//import '../semantic/dist/semantic.min.css'
import Navigation from "./Navigation"
import App from "./App"

    ReactDOM.render(
            <BrowserRouter>
            <div>
            <Route path="/" component={Navigation} exact/>
            <Route path="/App" component={App}/>
          </div>
         </BrowserRouter>
    ,document.getElementById("root"))


