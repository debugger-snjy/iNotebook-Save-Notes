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
import AddNote from './AddNote'

export default function Home() {

    // Removing the Code as there is no need of context API here !!
    // Adding the below code into AddNote as we want it there
    /* 
        // Using the function to get the data from the context
        const usernotestate = useContext(NoteContext);
        console.log(usernotestate);
        // Destructuring Data
        const {Notes,setNotes} = usernotestate;
    */
    return (
        <>
            {/* Removing the Code of Add Note and transfering it to a New Components AddNote  */}
            {/* Adding that code into Notes Component Only */}

            <Notes />
        </>
    )
}
