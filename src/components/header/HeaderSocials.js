import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {SiNetlify} from "react-icons/si"

const HeaderSocials = () => {
  return (
<div className="header__socials">
    <a href="https://www.linkedin.com/in/youssef-dhaou-808293160/" rel="noreferrer" target="_blank"><BsLinkedin/></a>
    <a href="https://github.com/Youssef-Dhaou" rel="noreferrer" target="_blank"><FaGithub/></a>
    <a href="https://app.netlify.com/teams/youssef-dhaou/overview" rel="noreferrer" target="_blank"><SiNetlify/></a>
</div>
  )
}

export default HeaderSocials    