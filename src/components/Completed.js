import { AiOutlineClose} from "react-icons/ai";
import React, { Component } from 'react'
import './todo.css'
import { BiEditAlt } from 'react-icons/bi';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { IoMdArrowRoundBack } from 'react-icons/io';
import { IoSaveOutline } from 'react-icons/io5';
// import Data from './data';
import {connect} from 'react-redux';
import {myTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle, changeSelect } from '../Actions';
import Data from './Data';
// import Edit from './Edit';
import Delete  from './Delete';
import Status  from './Status';
import Checkbox from './Checkbox';
// import Save from './Save';
// import Cancel  from './Cancel';
import Reset from './reset';
import Add  from './Add';
// import Category from './category';
import { BrowserRouter as BRouter } from 'react-router-dom'; 
// import Router from './router';
// import Category from './category';
// import All from './All';
// import Completed from './completed';
// import Pending from './Pending';
import { Route } from "react-router-dom";
import Edit from "./edit";
import { TiAdjustBrightness } from "react-icons/ti";


class Completed extends Component {
    constructor(props) {
        super(props)
        this.state = {
             text:'',
             data:'',
             modify:null,
             removeItems:[],
             name:'word',
        }
    }
    titlechange = ( index) => {
        // console.log('save clicked', this.state.data);
        {this.props.changeTitle(this.state.data,index)}
        {this.props.isEdit(index)}
        this.setState({
            data:'',
            color:'yellow',
        })
    }
    edited = (index) => {
        // console.log('edit linked', index)
        this.props.isEdit(index)
        this.setState({
            // index:index,
            modify:index,
        })
        // console.log('index', this.state.modify)
    }
    setGray= (index)=>{
        console.log('mouseover',index);
        this.props.changeSelect(index)
       
    }
    setNormal = (index) =>{
        console.log('mouseout',index)
        this.props.changeSelect(index)
        
    }
    deleted=(index)=>{
        // console.log('edit linked', index)
        this.props.removeIndex(index)
    }
    render() {
        const filtered= this.props.items.filter(item => item.status ==='Complete')
        // console.log('completed', filtered);
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

export default connect(mapStateToProps,mapDispatchToProps)(Completed)

