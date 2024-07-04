// import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { useRef } from 'react';

const Navbar=(props)=> {
    const navbarCollapseRef = useRef(null);

    const handleNavLinkClick = () => {
        if (navbarCollapseRef.current.classList.contains('show')) {
            navbarCollapseRef.current.classList.remove('show');
        }
    };
        return (
            <div>
                <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode} my-1`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navbarCollapseRef}>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/" onClick={handleNavLinkClick} >Home</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link" to="/business" onClick={handleNavLinkClick}>Business</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/entertainment" onClick={handleNavLinkClick}>Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/general" onClick={handleNavLinkClick}>General</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/health" onClick={handleNavLinkClick}>Health</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/science" onClick={handleNavLinkClick}>Science</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/sports" onClick={handleNavLinkClick}>Sports</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/technology" onClick={handleNavLinkClick}>Technology</Link></li>
                            </ul>
                            
                        </div>
                        <div className={`form-check form-switch text-${props.mode==='light'?'black':'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>
                    </div>
                </nav>
            </div>
        )
}

export default Navbar
