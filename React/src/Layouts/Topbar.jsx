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
            <ul>
                <li> <Link to='/dash' className='text' style={{ 'textDecoration': 'none' }}>Dashboard</Link></li>
                <li> <Link to='/employe' className='text' style={{ 'textDecoration': 'none' }}>Employe</Link></li>
                <li><Link to='/customer' className='text' style={{ 'textDecoration': 'none' }}>Customer</Link></li>
                <li><Link to='/connection' className='text' style={{ 'textDecoration': 'none' }}>Connectin Detais</Link></li>
                <li><Link to='/units' className='text' style={{ 'textDecoration': 'none' }}>Units</Link></li>
                <li><Link to='/payment' className='text' style={{ 'textDecoration': 'none' }}>Payment</Link></li>
                <Link to='/animation'></Link>
                <button onClick={logout} style={{ 'color': 'black', 'float': 'right', 'margin-top': '10px' }}><i class="fa fa-sign-out" aria-hidden="true"> Log Out</i></button>
            </ul>
        </>
    )
}
