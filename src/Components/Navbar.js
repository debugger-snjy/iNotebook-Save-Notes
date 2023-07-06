import React from 'react'
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const fixednavbarStyle = {
        // "position": "fixed",
        // "top": "0px",
        "width": "100%",
        "zIndex": "1",
        "boxShadow": "0px 0px 9px 5px black",
    }

    let location = useLocation();

    React.useEffect(() => {
        // Logging for checking
        // console.log("Getting Location : ",location);
        // console.log("Getting Location Pathname : ",location.pathname);
    }, [location]);

    return (



        <nav className="navbar navbar-expand-lg bg-dark" style={fixednavbarStyle} data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : "" }`} aria-current="page" to="/">Home</Link>
                        </li>
                        {/* <li className="nav-item">
                                <Link className="nav-link" to="/">View All Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Add Note</Link>
                            </li> */}
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : "" }`} to="/about">About</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                </div>
            </div>
        </nav>
    )
}
