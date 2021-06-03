import React from 'react'
import './todo.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <div className='options'>
                <Link to='/'>
                <p className='categories'>All</p>
                </Link>
                <Link to='/completed'>
                <p className='categories'>Completed</p></Link>
                <Link to='/pending'>
                <p className='categories'>Pending</p></Link>
            </div>
       </nav>
    )
}
export default Nav
