import React, { Component } from 'react'
import {connect} from 'react-redux';
import './todo.css'
import { TiTick} from "react-icons/ti";
import { AiOutlineCheck } from "react-icons/ai";
import { statusChange, changeIndex, removeIndex } from '../Actions';

class Checkbox extends Component {
    checkboxx=(value,index)=>{
        const items=this.props.items
        if(value==='Incomplete'){
           this.props.statusChange('Complete', index)
        }
        else{
            this.props.changeIndex('Incomplete',index) 
        }
        
    }
    check = (index)=>{
        this.props.changeIndex('Incomplete',index)
    }
    render(){
        const {index,status}=this.props
        return (
            <div  className='checkpoint' >
                <div style={{display : status === 'Complete'? 'none' : 'flex'}}>
                <input className='checkbox'
                    type='checkbox'
                    defaultChecked={false}
                    checked={status=== 'Complete'}
                    onClick={()=>{
                        if(!this.props.items[index].readonly){
                            return(  null)
                        } 
                        else 
                        {
                            this.checkboxx(status,index)
                        }
                    }}
               /></div>
               <div style={{display : status === 'Incomplete'? 'none' : 'flex'}} className='tick' onClick={()=>this.check(index)}><AiOutlineCheck/></div>
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
        removeIndex: (index)=> dispatch(removeIndex(index)),
        changeIndex :(payload,index)=> dispatch(changeIndex(payload,index)),
        statusChange: (payload, index) => dispatch(statusChange(payload,index)),

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Checkbox)
