import React from 'react'
import { withRouter, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#00A74E' }}>
        <div className='navbar navbar-expand-lg'>
            <Link className='navbar-brand' style={{ fontSize: 30, marginRight: 20, color: '#FFF'}} to="/">COMFY</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-white" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="#" >Routes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="#" >Careers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="#" >News</Link>
                    </li>
                </ul>
                
                <div className='d-flex align-items-center ms-auto '>
                  <p className="text-white ">© Comfy. 2021. We value your comfort</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default withRouter(Footer)