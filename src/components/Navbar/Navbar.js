import React, { useState } from 'react'
import './Navbar.css'

// import logo from '../../image/images-removebg-preview.png'
import btnlogo from '../../image/messages-removebg-preview.png'
import {Link} from 'react-scroll'
import menu from '../../image/hamburger-removebg-preview.png'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div>
      <nav className="navbar sticky">
        {/* <img src={logo} alt="logo" className='logo'/> */}
        <div className="logo">DP</div>
        <div className="desktopMenu">
            <Link  className='desktopMenuList' to='intro'>Home</Link>
            <Link  className='desktopMenuList' to='skill'>About</Link>
            <Link  className='desktopMenuList' to='cards'>Projects</Link>
        </div>
        <Link to='contact' className="desktopMenuBtn">
            <img src={btnlogo} alt="" className='desktopMenuImg' />Contact Me
        </Link>

        <img src={menu} style={{width:"3rem"}} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="navMenu" style={{display: showMenu ? 'flex' : 'none'}}>
            <Link  className='List' onClick={()=>setShowMenu(false)} to='intro'>Home</Link>
            <Link  className='List' onClick={()=>setShowMenu(false)} to='skill'>About</Link>
            <Link  className='List' onClick={()=>setShowMenu(false)} to='cards'>Projects</Link>
            <Link  className='List' onClick={()=>setShowMenu(false)} to='contact'>Contact</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
