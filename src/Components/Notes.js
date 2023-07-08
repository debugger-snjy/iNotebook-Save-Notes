// Steps to Add Context API : 
// Step 1 : Importing useContext from react to use the context
// Step 2 : Importing NoteContext from which we want to use the context
// Step 3 : Use the useContext function to get the data from the Context
// Step 4 : (Optional) Applying Array Destructuring for separate data variables

import React, { useContext } from 'react'

import NoteContext from '../Context/Notes/NoteContext';
import NoteItem from './NoteItem';

export default function Notes() {

    // Using the function to get the data from the context
    const usernotestate = useContext(NoteContext);
    console.log(usernotestate);
    // Destructuring Data
    const { userNotes, updateNotes } = usernotestate;

    return (
        <div className="container p-0">
            <h2>Your Notes</h2>
            <div className='row row-cols-3'>
                {/* Getting the notes from the Context API */}
                {/* Displaying the data individual from the Array */}
                {userNotes.map((note) => {
                    {/* return note.title; */}
                    {/*Adding the NoteItem Component Here & will pass the note data as props */ }
                    return (
                        <NoteItem note={note} key={note._id} />
                     );
                })}
            </div>
        </div>
    )
}
