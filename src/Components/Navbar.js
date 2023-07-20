import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";
import NoteContext from '../Context/Notes/NoteContext';

export default function Navbar() {
    const fixednavbarStyle = {
        // "position": "fixed",
        // "top": "0px",
        "width": "100%",
        "zIndex": "1",
        "boxShadow": "0px 0px 9px 5px black",
    }

    let location = useLocation();

    let contextData = useContext(NoteContext)

    let navigateTo = useNavigate();

    React.useEffect(() => {
        // Logging for checking
        // console.log("Getting Location : ",location);
        // console.log("Getting Location Pathname : ",location.pathname);
    }, [location]);

    const logoutUser = () => {
        localStorage.removeItem("token");
        navigateTo("/");
        console.log("Signing");
    }

    const aboutUser = () => {
        contextData.fetchUser()
        navigateTo("/user");
    }

    return (

        <nav className="navbar navbar-expand-lg bg-dark" style={fixednavbarStyle} data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to={localStorage.getItem('token') ? "/addnote" : "/"}>iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact Us</Link>
                        </li>

                    </ul>
                    <form className={localStorage.getItem("token") ? "d-flex" : "d-none"} role="search">
                        <Link className='btn btn-primary' type='button' style={{marginRight : "10px"}} to="/user" onClick={aboutUser}><i className="fa-solid fa-user fa-sm" style={{marginRight : "2px"}}></i> <strong>Profile</strong></Link>
                        <Link className="btn btn-primary" type="button" style={{marginRight : "10px"}} to="/" onClick={logoutUser}><i className="fa-solid fa-right-from-bracket fa-sm" style={{marginRight : "2px"}}></i> <strong>Logout</strong></Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}
