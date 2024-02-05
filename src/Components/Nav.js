import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './main.css'
const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/login')

  }
  const userName = auth !== null ? JSON.parse(auth).name : '';
  return (
    <div className='navbar'>
      {auth ? <ul className='navlist'>
        <li><NavLink to='/'> Home </NavLink></li>
        <li><NavLink to='/entry'> Entry From </NavLink></li>
        <li className='item'><NavLink onClick={logout} to='/login' >Logout({userName})</NavLink></li>
        </ul> :
        <ul className='navlist'>
          <li><NavLink to='/login'> Login  </NavLink></li>
          <li><NavLink to='/signup'> Signup </NavLink></li>
        </ul>
      }
    </div>
  )
}
export default Nav
