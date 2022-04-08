import React from 'react'
import { withRouter, Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = ({history}) => {
    const isActive = (history, path) => {
        if(history.location.pathname === path) {
            return { color: '#00A74E', backgroundColor: "transparent", fontWeight: 'bold' }
        }else {
            return { color: '#000' }
        }
    }

  return (
    <div className="container-fluid">
        <div className='navbar navbar-expand-lg navbar-light'>
            <Link className='navbar-brand' style={{ fontSize: 30, marginRight: 20, }} to="/">CG</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/')} to="/" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/about-comfy')} to="#" >About Comfy</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/destinations')} to="#" >Destinations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/help-center')} to="#" >Help Center</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/testimonials')} to="#" >Testimonials</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/contact-us')} to="#" >Let's Talk</Link>
                    </li>
                </ul>
                
                <div className="navbar-btn btn btn-sm lift ms-auto">
                    <button style={{backgroundColor: '#00A74E', color: '#FFF', border: 'none', borderRadius: 10, paddingLeft: 40, paddingRight: 40, paddingBottom: 10, paddingTop: 5}}>Sign In</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default withRouter(Menu)