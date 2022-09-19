import React from 'react'
import CTA from './CTA'
import "./header.css"
import ME from "../../assets/face.png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
  <header id="home">
    <div className="container header__container">
      <h5> Hello I'm</h5>
      <h1> Youssef DHAOU</h1>
      <h5 className="text-light">Fullstack Developer </h5>
<span> (Mern) </span>
      <CTA/> 
      <HeaderSocials/> 
<div  className="me">
  <img style={{width:"200px", marginLeft:"1.7rem"}} src={ME} alt="me" />  
</div>

<a href="#contact" className='scroll__down'> Scroll Down</a>
    </div>
  </header>
  )
}

export default Header