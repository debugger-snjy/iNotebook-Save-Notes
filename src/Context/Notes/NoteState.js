import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    // Adding the url of the host
    const host = "http://localhost:5000";

    // Adding notes by hardcore just for now 
    // Will add through database after some time
    // const mynotes = [
    //     {
    //         "_id": "64a85eef7a5925329325c7e0",
    //         "user": "64a85e527a5925329325c7d9",
    //         "title": "Title 1",
    //         "description": "Description is a good thing to add in Note 1",
    //         "tags": "Sample",
    //         "date": "2023-07-07T18:52:31.711Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "64a85efe7a5925329325c7e2",
    //         "user": "64a85e527a5925329325c7d9",
    //         "title": "My Title 2",
    //         "description": "Description is a good thing to add in Note 2",
    //         "tags": "Sample",
    //         "date": "2023-07-07T18:52:46.885Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "64a85f0a7a5925329325c7e4",
    //         "user": "64a85e527a5925329325c7d9",
    //         "title": "Note 3",
    //         "description": "Description is a good thing to add in Note 3",
    //         "tags": "Sample",
    //         "date": "2023-07-07T18:52:58.490Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "64a85f197a5925329325c7e6",
    //         "user": "64a85e527a5925329325c7d9",
    //         "title": "Notes",
    //         "description": "Will Store all the notes",
    //         "tags": "Sample",
    //         "date": "2023-07-07T18:53:13.342Z",
    //         "__v": 0
    //     },
    //     {
    //         "_id": "64a85f407a5925329325c7e8",
    //         "user": "64a85e527a5925329325c7d9",
    //         "title": "Placement",
    //         "description": "Create Resume for Placement",
    //         "tags": "Priority",
    //         "date": "2023-07-08T18:53:52.785Z",
    //         "__v": 0
    //     }
    // ];
    // Getting the NOTES from the DATABASE :
    const mynotes = [];

    // const {Notes,updateNotes} = useState(mynotes); ===========>> LARGE MISTAKE !!!
    const [userNotes, setuserNotes] = useState(mynotes);

    // Function to Add a Note
    const addNote = async (title, description, tags) => {

        if (tags==="") {
            tags="Default";
        }

        // ✅ Done TODO : Make an API Call Here !

        // Adding the API Call to add the notes into the Database
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST", // As fetchallnotes is a GET method
            
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',

                // Adding the auth-token hardcore till now !
                "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhODVlNTI3YTU5MjUzMjkzMjVjN2Q5In0sImlhdCI6MTY4ODc1NTgzNn0.bn4dh8C4bDBzXC8e4yNhOaBlFMAkXDrgSyJ8gEKYrNU",
            },
            
            body : JSON.stringify({title,description,tags})
            // No need of body as we will not pass anything in the body
        });
        // parses JSON response into native JavaScript objects and using await as the function is asynchronus function
        const allNotesFromDb = await response.json();
        
        // Checking
        console.log("New Note : ",allNotesFromDb);

        // Now, adding all the notes in the userNotes state variable and will display all the notes from database !
        setuserNotes(userNotes.concat(allNotesFromDb))
        
        // Checking
        // console.log("Adding a new Note");

        // // Now, it will set the title,description and tags that we pass !
        // const newNote = {
        //     "user": "64a85e527a5925329325c7d9",
        //     "title": title,
        //     "description": description,
        //     "tags": tags,
        //     "date": "2023-07-08T22:30:56.453Z",
        //     "__v": 0
        // }

        // // Adding the note in the userNotes state variable
        // setuserNotes(userNotes.concat(newNote))
    }

    // Function to Edit a Note
    const editNote = (id, title, description, tags) => {

        // TODO : Make an API Call Here !
        
        for (let index = 0; index < userNotes.length; index++) {
            const element = userNotes[index];
            // Finding the Note that we have to edit
            if (element._id === id) {
                // Editing title, description and tags
                element.title = title;
                element.description = description;
                element.tags = tags;
            }
        }
    }

    // Function to Delete a Note
    const deleteNote = async (id) => {

        // TODO : Make an API Call Here !
        // Adding the API Call to delete the notes from the database
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE", // As fetchallnotes is a GET method
            
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',

                // Adding the auth-token hardcore till now !
                "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhODVlNTI3YTU5MjUzMjkzMjVjN2Q5In0sImlhdCI6MTY4ODc1NTgzNn0.bn4dh8C4bDBzXC8e4yNhOaBlFMAkXDrgSyJ8gEKYrNU",
            },
            
            // No need of body as we will not pass anything in the body
        });
        // parses JSON response into native JavaScript objects and using await as the function is asynchronus function
        const allNotesFromDb = await response.json();

        console.log("Deleting the note !!");
        // let usersWithoutTim = userNotes.filter(user => user.name !== "Tim");
        // Using the filter function and using that we will not allow the note to be included
        let notesWithoutdeletedNote = userNotes.filter((note) => note._id !== id)

        // Adding the note in the userNotes state variable
        setuserNotes(notesWithoutdeletedNote)
    }

    // Function to Fetch all Note From the Database using the Backend API
    const fetchAllNotes = async () => {

        console.log("Fetching All Notes !");
        // ✅ Done TODO : Make an API Call Here !

        // Adding the API Call to fetch all the notes
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET", // As fetchallnotes is a GET method
            
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',

                // Adding the auth-token hardcore till now !
                "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhODVlNTI3YTU5MjUzMjkzMjVjN2Q5In0sImlhdCI6MTY4ODc1NTgzNn0.bn4dh8C4bDBzXC8e4yNhOaBlFMAkXDrgSyJ8gEKYrNU",
            },
            
            // No need of body as we will not pass anything in the body
        });
        // parses JSON response into native JavaScript objects and using await as the function is asynchronus function
        const allNotesFromDb = await response.json();
        
        // Checking
        // console.log(allNotesFromDb);

        // Now, adding all the notes in the userNotes state variable and will display all the notes from database !
        setuserNotes(allNotesFromDb)
        
    }


    return (

        // we will pass all the things in value that we have to pass
        // Passing the State and function which will update it
        // Here, {state,updateState} ===> {state:state, updateState:updateState}
        // Passing the userNotes and updateNotes in the context
        <NoteContext.Provider value={{ userNotes, addNote, editNote, deleteNote, fetchAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;