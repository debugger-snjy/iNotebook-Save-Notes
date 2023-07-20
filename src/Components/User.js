import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteContext from '../Context/Notes/NoteContext';

export default function User() {

    let navigateTo = useNavigate();

    let contextData = useContext(NoteContext)
    console.log(contextData);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            contextData.fetchUser()
        }
        else {
            console.log("Error")
            navigateTo("/errorpage")
        }
    }, [])

    return (
        <>
            <h1 className='mt-4'><strong>Welcome {contextData.user.name} 👋</strong></h1>

            <div className="mt-3">
                <label htmlFor="userEmail" className="form-label">Email address</label>
                <input type="email" className="form-control noteField-signup" id="userEmail" defaultValue={contextData.user.email} readOnly />
            </div>
            <div className="mt-3">
                <label htmlFor="userName" className="form-label">Name</label>
                <input type="text" className="form-control noteField-signup" id="userName" defaultValue={contextData.user.name} readOnly />
            </div>
            <div className="mt-3">
                <label htmlFor="userDate" className="form-label">Account Created</label>
                <input type="text" className="form-control noteField-signup" id="userDate" defaultValue={contextData.user.date} readOnly />
            </div>
        </>
    )
}
