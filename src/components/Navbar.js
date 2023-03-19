import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
        <div className="container-fluid">
        {/* <Link className={`navbar-brand text-$text-${props.mode ==='light'?'dark':'light'}`} href="/">{props.title}</Link> */}
        <a className={`navbar-brand text-$text-${props.mode ==='light'?'dark':'light'}`} href="/">{props.title}</a>
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className={`nav-link text text-$text-${props.mode ==='light'?'dark':'white'} `} href="/">Home</a>
            </li>
            {/* <li className="nav-item">
                <Link className={`nav-link text text-$text-${props.mode ==='light'?'dark':'white'} `} href="/about">{props.about}</Link>
            </li> */}
            </ul>
            
            {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 h-25" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-dark my-2 my-sm-0 text text-light h-25 " type="submit">Search</button>
            </form> */}
            <div className={`form-check form-inline form-switch text-${props.mode ==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
           
            </div>
         
        </div>
    </nav>
  )
}
Navbar.propTypes ={
                    title: PropTypes.string,
                    about : PropTypes.string,                
                    }
Navbar.defaultProps = {
                        title: "Set the Title Here",
                        about: "About Text here",
}
