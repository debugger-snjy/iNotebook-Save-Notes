import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    // Creating a Data Object
    const sampleData = {
        "name" : "Sanjay",
        "class" : "12th"
    }

    // Creating the state and its setState function
    const [state,setState] = useState(sampleData);

    // Making a function which will update the state data/value
    const updateState = ()=>{
        
        // Changing the Data after 2 seconds
        setTimeout(() => {
            setState({
                "name" : "Sanjay Sukhwani",
                "class" : "College"
            })
        }, 2000);
    }

    return (

        // we will pass all the things in value that we have to pass
        // Passing the State and function which will update it
        // Here, {state,updateState} ===> {state:state, updateState:updateState}
        <NoteContext.Provider value={{state,updateState}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;