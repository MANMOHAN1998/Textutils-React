import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">{props.tittle}</Link> */}
                <p className="navbar-brand">{props.tittle}</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    {/* <Link className="nav-link" aria-current="page" to="/">Home</Link> */}
                    </li>
                    <li className="nav-item">
                    {/* <Link className="nav-link" to="/about">{props.about}</Link> */}
                    </li>
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                </form> */}
                </div>
                {/* <div className={`mx-2 form-check text-${props.mode==='light'?'dark':'light'} ${props.mode==='light'?'d-none':''}`}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={props.changeTheme}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Green Mode
                    </label>
                </div>
                <div className={`mx-2 form-check text-${props.mode==='light'?'dark':'light'} ${props.mode==='light'?'d-none':''}`}>
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={props.changeTheme}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Pink Mode
                    </label>
                </div> */}
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Enable dark mode</label>
                </div>
            </div>
        </nav>
  )
}

Navbar.propTypes = { tittle : PropTypes.string.isRequired,
                    about : PropTypes.string.isRequired}

Navbar.defaultProps = {tittle : 'provide title',
                        about : 'about'}