import './todo.css'
// import {myTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle } from '../Actions';
import Dropdown from 'react-dropdown';

import React, {   useState, Component } from 'react';
import {connect} from 'react-redux';
import {myTodo,newTodo, statusChange, changeIndex, removeIndex, isEdit, changeTitle } from '../Actions';

import { Input } from 'antd';


// import React, { Component } from 'react'

class Add extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:"",
             title:"",
        }
    }
    handleSubmit = () => {
        console.log("button clicked")
                // e.preventDefault();
                // if (!this.state.title) return;
                this.props.newTodo({title:this.state.title, status:'Incomplete', readonly:true, select:false, edit:false, msg:this.state.msg });
                // setTitle("");
                this.setState({
                    title:"",
                    msg:"",
                })
                // setmsg("")
            };
    render() {
        const { TextArea } = Input;

        return (
            <div>
                <span>
                <input
                type="text"
                value={this.state.msg}
                autoFocus={true}
                className='input'
                placeholder="Please Enter Message?"
                onChange={(event) => this.setState({msg:event.target.value})}
            />
                <input
                type="text"
                value={this.state.title}
                autoFocus={true}
                className='input'
                placeholder="Please Enter title?"
                onChange={e => this.setState({title:e.target.value})}
            />
                <button className='sbtbtn' onClick={()=>this.handleSubmit()}> Submit</button>

                </span>
            </div>
        )
    }
}

// export default Add

// function Modal1({newTodo}) {
//     const [title, setTitle] = useState("");
//     const [msg, setmsg] = useState("")
//     const handleSubmit = e => {
//         e.preventDefault();
//         if (!title ) return;
//         newTodo({title:title, status:'Incomplete', readonly:true, select:false, edit:false, msg:msg });
//         setTitle("");
//         setmsg("")
//     };
//     return (       
//         <div> 
//         {/* // <form onSubmit={handleSubmit}> */}
//             <span >
//             {/* <input
//                 type="text"
//                 value={title}
//                 autoFocus={true}
//                 className='input'
//                 placeholder="Please Enter Message"
//                 onChange={e => setTitle(e.target.title)}
//             /> */}
//                 <input
//                 type="text"
//                 value={msg}
//                 autoFocus={true}
//                 className='input'
//                 placeholder="Please Enter Message?"
//                 onChange={e => setmsg(e.target.msg)}
//             />
//                 <input
//                 type="text"
//                 value={title}
//                 autoFocus={true}
//                 className='input'
//                 placeholder="Please Enter Message?"
//                 onChange={e => setmsg(e.target.title)}
//             />
//             <button className='sbtbtn' onClick={handleSubmit}> Submit</button>
//             {/* <TextArea rows={4} /> */}
//             {/* <Dropdown> */}
//             {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
//   <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//   <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//   <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
// </DropdownButton> */}
//             </span>
//         </div>
//         /* // </form> */
//     )
// }
// const mapStateToProps= state =>{
//     const items =state.todoRedducer.items
//     return{
//      items   
//     }
// }
const mapDispatchToProps = (dispatch) =>{
    return{
        // myTodo : (payload)=> dispatch(myTodo(payload)),
        // removeIndex: (index)=> dispatch(removeIndex(index)),
        // changeTitle: (payload,index) => dispatch(changeTitle(payload,index)),
        // isEdit: (index) => dispatch(isEdit(index)),
        newTodo:(payload) =>dispatch(newTodo(payload)),
    }
}
export default connect(null,mapDispatchToProps)(Add)
