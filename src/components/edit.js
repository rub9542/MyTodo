import './todo.css'
// import {myTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle } from '../Actions';


import React, {   Component, useState } from 'react';
import {connect} from 'react-redux';
import { IoSaveOutline } from 'react-icons/io5';
import {myTodo,newTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle } from '../Actions';


class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
             data:''
        }
    }
    submit = (index) =>{
        this.props.changeTitle(this.state.data,index)
        {this.props.isEdit(index)}
        this.setState({
            data:'',
        })
    }
    render(){
        const title= this.props.title
        const index = this.props.index
        return (   
            <div>
                <input
                    type="text"
                    value={this.state.data}
                    autoFocus={true}
                    className='input'
                    placeholder={title}
                    onChange={(event) => this.setState({data:event.target.value})}
                />
                <button className='edit1' onClick={()=>this.submit(index)} >
                    <IoSaveOutline/>
                </button>
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
const mapDispatchToProps = (dispatch) =>{
    return{
        myTodo : (payload)=> dispatch(myTodo(payload)),
        removeIndex: (index)=> dispatch(removeIndex(index)),
        changeTitle: (payload,index) => dispatch(changeTitle(payload,index)),
        isEdit: (index) => dispatch(isEdit(index)),
        newTodo:(payload) =>dispatch(newTodo(payload)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Edit)
