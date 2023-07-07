import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    // Adding notes by hardcore just for now 
    // Will add through database after some time
    const mynotes = [
        {
          "_id": "64a85eef7a5925329325c7e0",
          "user": "64a85e527a5925329325c7d9",
          "title": "Title 1",
          "description": "Description is a good thing to add in Note 1",
          "tags": "Sample",
          "date": "2023-07-07T18:52:31.711Z",
          "__v": 0
        },
        {
          "_id": "64a85efe7a5925329325c7e2",
          "user": "64a85e527a5925329325c7d9",
          "title": "My Title 2",
          "description": "Description is a good thing to add in Note 2",
          "tags": "Sample",
          "date": "2023-07-07T18:52:46.885Z",
          "__v": 0
        },
        {
          "_id": "64a85f0a7a5925329325c7e4",
          "user": "64a85e527a5925329325c7d9",
          "title": "Note 3",
          "description": "Description is a good thing to add in Note 3",
          "tags": "Sample",
          "date": "2023-07-07T18:52:58.490Z",
          "__v": 0
        },
        {
          "_id": "64a85f197a5925329325c7e6",
          "user": "64a85e527a5925329325c7d9",
          "title": "Notes",
          "description": "Will Store all the notes",
          "tags": "Sample",
          "date": "2023-07-07T18:53:13.342Z",
          "__v": 0
        },
        {
          "_id": "64a85f407a5925329325c7e8",
          "user": "64a85e527a5925329325c7d9",
          "title": "Placement",
          "description": "Create Resume for Placement",
          "tags": "Priority",
          "date": "2023-07-07T18:53:52.785Z",
          "__v": 0
        }
      ];
    // const {Notes,setNotes} = useState(mynotes); ===========>> LARGE MISTAKE !!!
    const [Notes,setNotes] = useState(mynotes);

    return (

        // we will pass all the things in value that we have to pass
        // Passing the State and function which will update it
        // Here, {state,updateState} ===> {state:state, updateState:updateState}
        // Passing the Notes and setNotes in the context
        <NoteContext.Provider value={{Notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;