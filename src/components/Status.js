import React, { Component } from 'react'
import './todo.css'



class Status extends Component {
    render(){
        const {status}=this.props
        return (
            <div>
                <span style={{color:"#C0C0C0"}}>{status}</span>
            </div>
        )
    }
}

export default Status
