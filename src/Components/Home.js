// Steps to Add Context API : 
// Step 1 : Importing useContext from react to use the context
// Step 2 : Importing NoteContext from which we want to use the context
// Step 3 : Use the useContext function to get the data from the Context
// Step 4 : (Optional) Applying Array Destructuring for separate data variables

import React, { useContext } from 'react'

// Importing NoteContext 
// import NoteContext from '../Context/Notes/NoteContext'

// Importing the Notes Component
import Notes from './Notes'

export default function Home() {

    // Removing the Code as there is no need of context API here !!
    /* 
        // Using the function to get the data from the context
        const usernotestate = useContext(NoteContext);
        console.log(usernotestate);
        // Destructuring Data
        const {Notes,setNotes} = usernotestate;
    */
    return (
        <>
            <div className="container">
                <h2 className='my-3'>Add a Note</h2>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <hr />

                {/* Adding the Notes Component Here */}
                {/* This will be getting all the notes and displaying it on the page */}
                <Notes />
            </div>
        </>
    )
}
