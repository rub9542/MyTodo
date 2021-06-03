import React, { Component } from 'react'
import './todo.css'
import {connect} from 'react-redux';
// import {myTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle, changeSelect } from '../Actions';

// import { Route } from "react-router-dom";


class Sample extends Component {
    render() {
    const items=this.props.items;
    let count=0;
    for(let i=0; i<items.length;i++){
        if(items[i].status!== 'Complete'){
            count=count+1;
        }
    }
        return (
            <div  className='count'>
                <span  style={{color:'gray'}} >{count} Items Left</span>
            </div>
        )  
    }
}
const mapStateToProps= state =>{
    const {items} =state.todo
    return{
     items   
    }
}
export default connect(mapStateToProps,null)(Sample)
