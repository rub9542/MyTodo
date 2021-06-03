import { AiOutlineClose} from "react-icons/ai";
import React, { Component } from 'react'
import './todo.css'
import {connect} from 'react-redux';
import {myTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle, changeSelect } from '../Actions';
import Data from './Data';
import Checkbox from './Checkbox';
import Edit from "./edit";
class Pending extends Component {
    setGray= (index)=>{
        console.log('mouseover',index);
        this.props.changeSelect(index)
    }
    setNormal = (index) =>{
        console.log('mouseout',index)
        this.props.changeSelect(index)        
    }
    deleted=(index)=>{
        this.props.removeIndex(index)
    }
    render() {
        const filtered= this.props.items.filter(item => item.status ==='Incomplete')
        return (
            <div>
                <table className='table'>
                    <tbody className='tbody'>
                        {filtered.map((item,index)=>(
                            <div key={index} className='rowParent'  style={{opacity:item.status==='Complete' ? 0.5: 1}}>
                                <tr className='row'>
                                    <td className='item1'>
                                        <Checkbox status={item.status} index={index}/>
                                    </td>
                                    {item.readonly === false?
                                        <td className='item2'>
                                           <Edit index={index} title={item.title}/>
                                        </td>
                                        :
                                        <div className='item2' onMouseOver={()=>this.setGray(index)} onMouseOut={()=>this.setNormal(index)}  >
                                            <Data title={item.title} status={item.status} index={index} />
                                            <button className='edit' style={{opacity: item.select === true ? 1 : 0}} onClick={()=>this.deleted(index)}>
                                                <span className='word' > 
                                                    <AiOutlineClose/>
                                                </span>
                                            </button>
                                        </div>
                                    }
                                </tr>
                            </div>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

// export default All

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

export default connect(mapStateToProps,mapDispatchToProps)(Pending)

