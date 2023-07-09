import React, {useContext, useState} from 'react'
import NoteContext from '../Context/Notes/NoteContext';

export default function AddNote() {
    
    const NoteContextData = useContext(NoteContext);
    // console.log(NoteContextData);
    // Destructuring Data
    // Here we only need a addNote function
    const { addNote } = NoteContextData;

    // Making a State to store the note until get submitted that WILL be written in the userNotes state & database later
    const [tempNote,setTempNote] = useState({title:"",description:"",tags:""})

    // Function to handle Adding Note on clicking Submit Button
    const handleAddNote = (event)=>{
        
        // This will prevent the page to get Reloaded (it is preventDefault not preventDefaults !)
        event.preventDefault();

        // Finally after user clicks submit button, we will add the note into the CONTEXT Data and then through there in database as well
        // tempNote ==> will convert into permanent note
        
        // Both ways are correct
        // addNote({tempNote});
        addNote(tempNote.title,tempNote.description,tempNote.tags);

        // Reseting the Form
        document.getElementById("addNoteForm").reset()
    }

    // Function to handle when the data in the input will be changed
    const onChange = (event)=>{

        // Now, Getting the data that user will be adding and that will be saved on that spot when user add the data
        setTempNote({
            ...tempNote, // This will be the data that is already present
            [event.target.name] : event.target.value
            // Using the above line, it will ADD the data and OVERWRITE if already present
            // Thus, when we write the title, then value of title will be the text that user will write
        })
    }

    return (
        <div className="container">
            <h2 className='my-3'>Add a Note</h2>
            <form className='my-3' id='addNoteForm'>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Note Title</label>
                    <input type="text" className="form-control" name='title' id="title" onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea rows="5" className="form-control" id="description" name="description" onChange={onChange} ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleAddNote}>Add Note</button>
            </form>
            <hr />

            {/* Adding the Notes Component Here */}
            {/* This will be getting all the notes and displaying it on the page */}
        </div>
    )
}