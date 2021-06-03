import React, { Component } from 'react'
// import './todo.css'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { AiOutlineDown} from "react-icons/ai";
// import Data from './data';
import Add from './Add'
import {connect} from 'react-redux';
import {myTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle, changeSelect } from '../Actions';



class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text:'',
            data:'',
        }
    }
    allstatus=()=>{
        const items= this.props.items;
        let filter=[];
        for(let i=0; i<items.length; i++){
            if(items[i].status === 'Incomplete'){
                filter=items.filter(item=> item.status= 'Complete')
            }
            else{
                filter=items.filter(item=> item.status= 'Incomplete')
            }
        }
        this.props.myTodo(filter)
    }
    render() {
        const items=this.props.items;
        let count=0;
        for(let i=0; i<items.length;i++){
            if(items[i].status=== 'Complete'){
                count=count+1;
            }
        }
        return (
            <div className='Apptodo'>
                <div className='top'>
                    <div className='divadd'>
                        {/* <button className='down' onClick={this.allstatus}><AiOutlineDown/></button> */}
                        <Add  />
                    </div>
                </div>
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
        statusChange: (payload, index) => dispatch(statusChange(payload,index)),
        myTodo : (payload)=> dispatch(myTodo(payload)),
        changeIndex :(payload,index)=> dispatch(changeIndex(payload,index)),
        removeIndex: (index)=> dispatch(removeIndex(index)),
        isEdit: (index) => dispatch(isEdit(index)),
        changeTitle: (payload,index) => dispatch(changeTitle(payload,index)),
        changeSelect:(index) => dispatch(changeSelect(index)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo)
