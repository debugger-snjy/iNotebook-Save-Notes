// Steps to Add Context API : 
// Step 1 : Importing useContext from react to use the context
// Step 2 : Importing NoteContext from which we want to use the context
// Step 3 : Use the useContext function to get the data from the Context
// Step 4 : (Optional) Applying Array Destructuring for separate data variables

import React, { useContext } from 'react'

import NoteContext from '../Context/Notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

export default function Notes() {

    // Using the function to get the data from the context
    const usernotestate = useContext(NoteContext);
    console.log(usernotestate);

    // Destructuring Data
    // Removing updateNotes ==> as we have only to display notes right now
    // Adding addNote => Using this we can add the notes in the userNotes state variable
    const { userNotes, addNote } = usernotestate;

    return (
        <>
            {/* Added the code that we have used in the Home.js */}
            <AddNote />
            <div className="container">
                <h2>Your Notes</h2>
                <div className='row'>
                    {/* Getting the notes from the Context API */}
                    {/* Displaying the data individual from the Array */}
                    {userNotes.map((note) => {
                        {/* return note.title; */ }
                        {/*Adding the NoteItem Component Here & will pass the note data as props */ }
                        return (
                            <NoteItem note={note} key={note._id} />
                        );
                    })}
                </div>
            </div>
        </>
    )
}
