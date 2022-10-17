import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Style/Topbar.css'

export default function Topbar() {

    const temp = useNavigate()

    const logout = () => {
        localStorage.clear()
        temp('/')

    }

    return (
        <>
            <div className='bar'>
                <ul>
                    <li> <Link to='/customerform/:id' className='text' style={{ 'textDecoration': 'none' }}>Dashboard</Link></li>
                    <button onClick={logout} style={{ 'color': 'black', 'float': 'right', 'margin-top': '10px' }}><i class="fa fa-sign-out" aria-hidden="true"> Log Out</i></button>
                </ul>
            </div>
        </>
    )
}
