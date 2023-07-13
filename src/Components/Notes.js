// Steps to Add Context API : 
// Step 1 : Importing useContext from react to use the context
// Step 2 : Importing NoteContext from which we want to use the context
// Step 3 : Use the useContext function to get the data from the Context
// Step 4 : (Optional) Applying Array Destructuring for separate data variables

import React, { useContext, useEffect, useRef, useState } from 'react'

import NoteContext from '../Context/Notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

export default function Notes() {

    // Using the function to get the data from the context
    const usernotestate = useContext(NoteContext);
    // console.log(usernotestate);

    // Destructuring Data
    // Removing updateNotes ==> as we have only to display notes right now
    // REMOVED and Transfered to <AddNote /> Component : Adding addNote => Using this we can add the notes in the userNotes state variable --> NO need of this as we have a component of it
    // Adding fetchAllNotes will fetch all the notes from the database !
    const { userNotes, fetchAllNotes, editNote } = usernotestate;

    // Calling the fetchAllNotes() :
    useEffect(() => {
        fetchAllNotes()
    }, []);

    // Adding the Things for Edit Form Fields
    // Making a State to store the note until get submitted that WILL be written in the userNotes state & database later
    const [editedNote,setEditedNote] = useState({id:"", editTitle:"",editDescription:"",editTags:""})

    // Function to handle Adding Note on clicking Submit Button
    const handleEditNote = (event)=>{
        
        // This will prevent the page to get Reloaded (it is preventDefault not preventDefaults !)
        event.preventDefault();

        console.log("Edited Note : ",editedNote)

        // Calling the function editNote from NoteState and update the data in the database as well using API
        editNote(editedNote.id,editedNote.editTitle,editedNote.editDescription,editedNote.editTags)

        // When the User clicks on Edit Note Button and after editing the note in database we want to close the modal
        // So for that, we will use close button by using the ref=modalCloseRef
        modalCloseRef.current.click(); //=> Closes the modal
    }

    // Function to handle when the data in the input will be changed
    const onChange = (event)=>{

        // Now, Getting the data that user will be adding and that will be saved on that spot when user add the data
        setEditedNote({
            ...editedNote, // This will be the data that is already present
            [event.target.name] : event.target.value
            // Using the above line, it will ADD the data and OVERWRITE if already present
            // Thus, when we write the title, then value of title will be the text that user will write
        })
    }

    const updatenote = (currentNote) => {
        console.log("Updating Note !!");

        setEditedNote({
            id : currentNote._id,
            editTitle : currentNote.title,
            editDescription : currentNote.description,
            editTags : currentNote.tags
        })

        // Now, we can use the ref here and show/Open the modal by using the click() function ==> Refer the Docs on bootstrap Modal Theory
        modalOpenRef.current.click(); // Also Note that we have to use the current after the ref everytime !
    }

    // By Using useRef, we can give reference to any one element !
    
    // We use this ref for showing/opening the modal
    const modalOpenRef = useRef(null);

    // We use this ref for hiding/closing the modal
    const modalCloseRef = useRef(null)

    return (
        <>
            {/* Added the code that we have used in the Home.js */}
            <AddNote />

            {/* Adding the Code for Edit Note Modal */}
            {/* Button to trigger modal */}
            {/* Making the button as reference and also hiding it*/}
            <button type="button" ref={modalOpenRef} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* Adding the Form Fields to update the Note */}
                            <form className='my-3' id='addNoteForm'>
                                <div className="mb-3">
                                    <label htmlFor="editTitle" className="form-label">Note Title</label>
                                    <input type="text" className="form-control" name='editTitle' id="editTitle" onChange={onChange} defaultValue={editedNote.editTitle}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="editDescription" className="form-label">Description</label>
                                    <textarea rows="5" className="form-control" id="editDescription" name="editDescription" onChange={onChange} defaultValue={editedNote.editDescription} ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="editTags" className="form-label">Tags</label>
                                    <input type="text" className="form-control" name="editTags" id="editTags" defaultValue={editedNote.editTags}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" ref={modalCloseRef} data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleEditNote}>Edit Note</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <h2>Your Notes</h2>
                <div className='row'>
                    {/* Getting the notes from the Context API */}
                    {/* Displaying the data individual from the Array */}
                    {userNotes.map((note) => {
                        {/* return note.title; */ }
                        {/*Adding the NoteItem Component Here & will pass the note data as props */ }
                        return (
                            <NoteItem note={note} key={note._id} updatenote={updatenote} />
                        );
                    })}
                </div>
            </div>
        </>
    )
}
