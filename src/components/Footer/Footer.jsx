import React from 'react'
import './Footer.css'
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import logo from "../../assets/logo.png"


const Footer = () => {
  return (
    <div className="Footer-container">
        <hr/>
        <div className="footer">
        <div className="social-links">
        <img src={Github} alt="" />
        <img src={Instagram} alt="" />
        <img src={LinkedIn} alt="" />

        </div>
        <div className="logo-f">
            <img src={logo}  style={{height :'5rem'}} alt="" />
            </div>
            <div className="copyright">Copyright@2022 All Rights Reserved by Fitness Gym </div>

        </div>
         
         <div className="blur blur-f1"></div>
         <div className="blur blur-f2"></div>
      
    </div>
  )
}

export default Footer