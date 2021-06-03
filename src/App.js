// import logo from './logo.svg';
import './components/todo.css';
import Nav from './components/nav';
import All from './components/All';
import Completed from './components/Completed'
import Pending from './components/Pending';
import Todo from './components/Top';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Sample from './components/count';
import {myTodo} from './Actions/index';
import {useState, useEffect, Component} from 'react';
import {connect} from 'react-redux';
import  AllDel  from './components/AllDel';
import { Footer } from './components/footer';
import { render } from '@testing-library/react';
import Add from './components/Add';
import Dropdown1 from './components/Dropdown';
import Dropdown from './components/Dropdown';

export default class App extends Component {
 constructor(props) {
     super(props)
 
     this.state = {
          
     }
 }
 
  render(){
    
    return (<div style={{backgroundColor: '#f5f5f5'}} className='sample'>
    <p className='heading'>Todos</p>

    {/* <div class="checkbox-wrapper">	
      <input type="checkbox" id="check" hidden />	
      <label for="check" class="checkmark"></label>	
    </div> */}
      <div className='sample2'>

      <div className='sample3'>   
        <Add/></div>
        {/* <Dropdown /> */}
      <div className='sample3'>   
        
          <Router>
          <div className="App">
          
            <Switch>
              <Route path='/' exact component={All}/>
              <Route path='/completed' exact component={Completed} />
              <Route path='/pending' exact component={Pending} />
            </Switch>
            <div className='footer'   >
              
               <Footer/> 
            
                      
            </div> 
          </div>
        </Router> 
        </div>

        </div>
        </div>
  );
  }
  
}

// const mapStateToProps= state =>{
//   const {items} =state.todo
//   return{
//    items   
//   }
// }
// const mapDispatchToProps = (dispatch) =>{
//   return{
//       myTodo : (payload)=> dispatch(myTodo(payload)),
//       // changeIndex :(payload,index)=> dispatch(changeIndex(payload,index)),
//       // removeIndex: (index)=> dispatch(removeIndex(index)),
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App)


