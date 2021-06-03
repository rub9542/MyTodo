import React, { Component } from 'react'
import './todo.css'
import {myTodo,isEdit } from '../Actions';
import {connect} from 'react-redux';
class Data extends Component {
    edited = (index) => {
        this.props.isEdit(index)
    }
    render(){
        if(this.props.status ==='Complete'){
            return (
                <div>
                    <div className='title' onClick={()=>this.edited(this.props.index)} style={{opacity:0.5}} ><strike>{this.props.title}
                        </strike>
                    </div>
                    <div className='msg' onClick={()=>this.edited(this.props.index)} style={{opacity:0.5}} ><strike>{this.props.msg}
                        </strike>
                    </div>
                    
                </div> )  
        }
        else{
            return (
                <div>
                    <div className='title1' onClick={()=>this.edited(this.props.index)}  >{this.props.title}
                        
                    </div>
                    <div className='msg' onClick={()=>this.edited(this.props.index)}  >{this.props.msg}
                        
                    </div>
                    
                </div>)
        }
    }
}
const mapStateToProps= state =>{
    const {items} =state.todo
    console.log('at data', items)   
    return{
     items   
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        // myTodo : (payload)=> dispatch(myTodo(payload)),
        isEdit: (index) => dispatch(isEdit(index)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Data)

