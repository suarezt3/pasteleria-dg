import React from 'react'
import "./Logo.css"
import logo from '../../assets/images/Pasteleria DG Logo.png'

export const Logo = () => {
    return (
        <div className="logo-marca">
           <img src={logo} alt="Logo"/>
        </div>
    )
}
