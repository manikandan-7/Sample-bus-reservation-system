import React from "react"
import {NavLink} from "react-router-dom"
import { Button} from 'semantic-ui-react'
class Navigation extends React.Component{
    render(){
        return(
    <div>
        <br/>
        <NavLink to="/App"><Button basic color='green'>
                  ADD BUS
    </Button></NavLink>
    </div>
        );
    }
}
export default Navigation