import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    return (

        // we will pass all the things in value that we have to pass
        // Passing the State and function which will update it
        // Here, {state,updateState} ===> {state:state, updateState:updateState}
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;