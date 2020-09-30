import React from 'react'
import {Link} from 'react-router-dom'
import './header.scss'
import {ReactComponent as Logo} from '../../Assets/logo.svg'

const Header = () => {
    return(
        <div className='header'>
            <div className='logo-container'>
                <Link to='/'><Logo /></Link>
            </div>
            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/contact'>CONTACT</Link>
                <Link className="option" to='/signin'>SIGN IN</Link>
            </div>
        </div>
    )
}

export default Header