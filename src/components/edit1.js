import './todo.css'
// import {myTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle } from '../Actions';


import React, {   useState } from 'react';
import {connect} from 'react-redux';
import {myTodo,newTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle } from '../Actions';


function Edit(props) {
    const [value, setValue] = useState("");
    

    const handleSubmit =(e, index) => {
        e.preventDefault();
        if (!value) return;
        props.changeTitle({title:value, status:'Incomplete', readonly:true, select:false, edit:false },index);
        setValue("");
    };
       
    
    const index=props.index
    const title= props.title
    return (        
        <form onSubmit={e =>handleSubmit(index)}>
            <span ><input
                type="text"
                value={value}
                autoFocus={true}
                className='input'
                placeholder={title}
                onChange={e => setValue(e.target.value)}
            /></span>
        </form>
    )
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
