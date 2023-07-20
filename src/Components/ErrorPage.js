import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className="container" style={{ marginTop: "100px" }}>
            <h1>Sorry, Access Denied !</h1>
            <hr />
            <h4>Kindly Login with your Account or Signup for New Account to Access the Facilities</h4>
            <div className="d-flex justify-content-center">
                <button className="btn mx-2 my-2 btn-primary btn-lg" type="button"><Link to="/" className='text-white text-decoration-none'>Login</Link></button>
                <button className="btn mx-2 my-2 btn-primary btn-lg" type="button"><Link to="/signup" className='text-white text-decoration-none'>Signup</Link></button>
            </div>
        </div>
    )
}
