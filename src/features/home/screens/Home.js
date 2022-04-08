import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import Menu from '../../../components/Menu'
import BG from '../../../assets/hero-images/jonathan-borba-LnggkK8864c-unsplash.jpg'
import Footer from '../../../components/Footer';

export const Home = ({history}) => {
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const routesRef = useRef(null)
    const helpRef = useRef(null)
    const testimonialRef = useRef(null)
    const letstalkRef = useRef(null)

    const executeHomeRef = () => homeRef.current.scrollIntoView()
    const executeAboutRef = () => aboutRef.current.scrollIntoView()
    const executeRoutesRef = () => routesRef.current.scrollIntoView()
    const executeHelpRef = () => helpRef.current.scrollIntoView()
    const executeTestimonialRef = () => testimonialRef.current.scrollIntoView()
    const executeLetsTalkRef = () => letstalkRef.current.scrollIntoView()

    const containerStyle = {
        backgroundImage:
          `url(${BG})`,
        width: "100%",
        height: "90%",
        backgroundSize: 'cover',
        position: 'absolute',
        top: 0,
        zIndex: -1,
    };

    const testimonialsStyle = {
        backgroundColor:
          `#00823D`,
        width: "100%",
        height: "90%",
        backgroundSize: 'cover',
        // position: 'absolute',
        marginTop: 200,
        top: 0,
        zIndex: -1,
    };

    const contentStyle = {
        height: '100%',
        width: '101.9%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }

    const isActive = (history, path) => {
        if(history.location.pathname === path) {
            return { color: '#00A74E', backgroundColor: "transparent", fontWeight: 'bold' }
        }else {
            return { color: '#FFF' }
        }
    }

    const navbar = document.querySelector('.fixed-top');
        window.onscroll = () => {
            if (window.scrollY > 300) {
                navbar.classList.add('bg-dark');
            } else {
                navbar.classList.remove('bg-dark');
            }
        };

  return (
    <>
        {/* <Menu/> */}
        <div className="container-fluid" ref={homeRef}>
            <div className='navbar navbar-expand-lg navbar-light fixed-top' >
                <Link className='navbar-brand' style={{ fontSize: 30, marginRight: 20, color: '#FFF', fontWeight: 'bolder'}} to="/">COMFY</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/home')} onClick={executeHomeRef}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/about-comfy')} to="#" onClick={executeAboutRef}>About Comfy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/help-center')} to="#" onClick={executeHelpRef}>Help Center</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/testimonials')} to="#" onClick={executeTestimonialRef}>Testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/contact-us')} to="#bottom" onClick={executeLetsTalkRef} >Let's Talk</Link>
                        </li>
                    </ul>
                    
                    <div className="navbar-btn btn btn-sm lift ms-auto">
                        <button style={{backgroundColor: '#00A74E', color: '#FFF', border: 'none', borderRadius: 10, paddingLeft: 40, paddingRight: 40, paddingBottom: 10, paddingTop: 5}}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>

        {/* Hero Image */}
        <div className='container-fluid' style={containerStyle}>
            <div className="row align-items-center" style={contentStyle} >
                <div className="col-4">
                    {/* <!-- Title --> */}
                    <h2 className="fs-1 text-white">The <span style={{ color: '#00A74E' }}>COMFY</span> <br/> Experience</h2>
                    <p className='text-white'>Let us pamper you on your way to work and back in the most comfytable way possible</p>
                    <div className='row'>
                    <div className="dropdown col">
                        <button className="btn dropdown-toggle" style={{ backgroundColor: '#FFF', width: '100%'}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            From
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Madina</a></li>
                            <li><a className="dropdown-item" href="#">Tema</a></li>
                            <li><a className="dropdown-item" href="#">Haatso</a></li>
                        </ul>
                    </div>
                    <div className="dropdown col">
                        <button className="btn dropdown-toggle" style={{ backgroundColor: '#FFF', width: '100%'}} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Destination
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Madina</a></li>
                            <li><a className="dropdown-item" href="#">Tema</a></li>
                            <li><a className="dropdown-item" href="#">Haatso</a></li>
                        </ul>
                    </div>
                    </div>
                    <button style={{ width: '50%',backgroundColor: '#00A74E', color: '#FFF', border: 'none', borderRadius: 50, paddingLeft: 40, paddingRight: 40, paddingBottom: 10, paddingTop: 5, marginRight: 15, marginTop: 25}}>Check Route</button>
                </div>
                <div className="col-6">
			    </div>
		    </div>

            {/* About Comfy */}
            <div className='container-fluid' style={{ marginTop: 200 }} >
                <div className=" text-center" ref={aboutRef}>
                    <h1 className="display-5 fw-bold">About Comfy</h1>
                    <div className="col-lg-8 mx-auto">
                        <p className="lead mb-4">We have the capability to tailor experiences for corporate and agency individuals by offering a comprehensive range of services and routes that cover major part of the capital city of Greater Accra. Our belief has always been to put the customer first and provide impeccable services.</p>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className="card text-white bg-success  m-4 col-3">
                            <div className="card-header">01</div>
                            <div className="card-body">
                                <h5 className="card-title">Professionalism</h5>
                                <p className="card-text">Our belief has always been to put the customer first and provide impeccable services.</p>
                            </div>
                    </div>
                    <div className="card text-white bg-success m-4 col-3">
                            <div className="card-header">02</div>
                            <div className="card-body">
                                <h5 className="card-title">Timely</h5>
                                <p className="card-text">Our belief has always been to put the customer first and provide impeccable services.</p>
                            </div>
                    </div>
                    <div className="card text-white bg-success m-4 col-3">
                            <div className="card-header">03</div>
                            <div className="card-body">
                                <h5 className="card-title">Luxurious</h5>
                                <p className="card-text">Our belief has always been to put the customer first and provide impeccable services.</p>
                            </div>
                    </div>
                </div>
            </div>    

            {/* Help Center */}
            <div className='container-fluid' style={{ marginTop: 200 }} ref={helpRef}>
                <div className=" text-center">
                    <h1 className="display-5 fw-bold">Help Center</h1>
                    {/* <div className="col-lg-8 mx-auto">
                        <p className="lead mb-4">We have the capability to tailor experiences for corporate and agency individuals by offering a comprehensive range of services and routes that cover major part of the capital city of Greater Accra. Our belief has always been to put the customer first and provide impeccable services.</p>
                    </div> */}
                </div>
                <div className='row justify-content-center mt-4'>
                    <div className="text-white col">
                            <button style={{ width: '100%' , border: 'solid', borderColor:'#00A74E', color: '#00A74E', borderWidth: 2,  borderRadius: 8, padding: 10, textAlign: 'center', backgroundColor: 'white' }}>What social stigma does society need to get over?</button>
                    </div>
                    <div className="text-white  col">
                            <button style={{ width: '100%' , border: 'solid', borderColor:'#00A74E', color: '#00A74E', borderWidth: 2,  borderRadius: 8, padding: 10, textAlign: 'center', backgroundColor: 'white' }}>What are some red flags to watch out for in daily life?</button>
                    </div>
                    <div className="text-white  col">
                            <button style={{ width: '100%' , border: 'solid', borderColor:'#00A74E', color: '#00A74E', borderWidth: 2,  borderRadius: 8, padding: 10, textAlign: 'center', backgroundColor: 'white' }}>Where are some unusual places you’ve been?</button>
                    </div>
                </div>
                <div className='row justify-content-center mt-3 '>
                    <div className="text-white col">
                            <button style={{ width: '100%' , border: 'solid', borderColor:'#00A74E', color: '#00A74E', borderWidth: 2,  borderRadius: 8, padding: 10, textAlign: 'center', backgroundColor: 'white' }}>Where do you get your news?</button>
                    </div>
                    <div className="text-white  col">
                            <button style={{ width: '100%' , border: 'solid', borderColor:'#00A74E', color: '#00A74E', borderWidth: 2,  borderRadius: 8, padding: 10, textAlign: 'center', backgroundColor: 'white' }}>What movie can you watch over and over without ever getting tired of?</button>
                    </div>
                    <div className="text-white  col">
                            <button style={{ width: '100%' , border: 'solid', borderColor:'#00A74E', color: '#00A74E', borderWidth: 2,  borderRadius: 8, padding: 10, textAlign: 'center', backgroundColor: 'white' }}>What are you currently worried about?</button>
                    </div>
                </div>
            </div>    

            {/* Testimonials */}
            <div className='container-fluid d-flex align-items-center' style={testimonialsStyle}>
                <div  className="" ref={testimonialRef}>
                    <h1 className="display-5 fw-bold text-white text-center">Testimonials</h1>
                    <div className='row'>
                        <div className="card text-white bg-success m-4 col">
                            <div className="card-body">
                                <div className='d-flex'>
                                    <img width={80} style={{ borderRadius: 50, marginRight: 10 }} src='https://via.placeholder.com/500'/>
                                    <h5 className="card-title align-self-center ml-1">Sandra Quaye</h5>
                                </div>
                                <p className="card-text">I enjoy the radio silence and breezy air condition that blows me to sleep to and from work</p>
                            </div>
                        </div>
                        <div className="card text-white bg-success m-4 col">
                            <div className="card-body">
                                <div className='d-flex'>
                                    <img width={80} style={{ borderRadius: 50, marginRight: 10 }} src='https://via.placeholder.com/500'/>
                                    <h5 className="card-title align-self-center ml-1">Michael Koofi</h5>
                                </div>
                                <p className="card-text">I enjoy the radio silence and breezy air condition that blows me to sleep to and from work</p>
                            </div>
                        </div>
                        <div className="card text-white bg-success m-4 col">
                            <div className="card-body">
                                <div className='d-flex'>
                                    <img width={80} style={{ borderRadius: 50, marginRight: 10 }} src='https://via.placeholder.com/500'/>
                                    <h5 className="card-title align-self-center">Esi Brown</h5>
                                </div>
                                <p className="card-text">I enjoy the radio silence and breezy air condition that blows me to sleep to and from work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lets Talk */}
            <div className='container-fluid' style={{ marginTop: 200 }} >
                <div className=" text-center" ref={letstalkRef}>
                    <h1 className="display-5 fw-bold">Let's Talk</h1>
                    <div className="col-lg-8 mx-auto">
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className=" col" >
                        <img src='https://via.placeholder.com/500)' width="100%"/>
                        {/* <div className="card-header">01</div>
                        <div className="card-body">
                            <h5 className="card-title">Professionalism</h5>
                            <p className="card-text">Our belief has always been to put the customer first and provide impeccable services.</p>
                        </div> */}
                    </div>
                    <div className="col" style={{ backgroundColor: '#E5E5E5' }}>
                        <div className="card-body">
                            <div className='align-items-center'>
                                <h5 className="card-title">Contact Us</h5>
                                <form className="row g-3">
                                    <div className="col-md-6">
                                        <label for="validationServer01" className="form-label">First name</label>
                                        <input type="text" className="form-control is-valid" id="validationServer01" value="Henry" required=""/>
                                    </div>
                                    <div className="col-6">
                                        <label for="validationServer02" className="form-label">Last name</label>
                                        <input type="text" className="form-control is-valid" id="validationServer02" value="Amihere" required=""/>
                                    </div>
                                </form>
                                <form className="row g-3 mt-1">
                                    <div className="col-md-6">
                                        <label for="validationServer01" className="form-label">Email Address</label>
                                        <input type="text" className="form-control is-valid" id="validationServer01" value="henryamihere77@gmail.com" required=""/>
                                    </div>
                                    <div className="col-6">
                                        <label for="validationServer02" className="form-label">Phone Number</label>
                                        <input type="text" className="form-control is-valid" id="validationServer02" value="+233591559104" required=""/>
                                    </div>
                                </form>
                                <form className="row g-3 mt-1">
                                    <div className="col-md-12">
                                        <label for="validationServer01" className="form-label">Message</label>
                                        <input type="text" className="form-control is-valid" id="validationServer01" value="Mark" required=""/>
                                    </div>
                                </form>
                                <div className="col-12 mt-5">
                                    {/* <button className="btn btn-primary" type="submit">Submit form</button> */}
                                    <button style={{backgroundColor: '#00A74E', color: '#FFF', border: 'none', borderRadius: 10, paddingLeft: 40, paddingRight: 40, paddingBottom: 10, paddingTop: 5}}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        <Footer/>
        </div>
    </>
  )
}
