import React, {useContext, useEffect} from 'react';

// Importing NoteContext 
import NoteContext from '../Context/Notes/NoteContext'

export default function About() {
    
    // This will allow to access the data of Notecontext
    const data = useContext(NoteContext);

    
    // Using Effect for calling updateFunction
    useEffect(()=>{
        data.updateState(); // This will call the updateState function and will 
    })
    return (
        <>
            <div>This is About Page</div>
            <div>Data : Name = {data.state.name} and Class = {data.state.class}</div>
            {/* we have to use the data.state as state is the key in the object that we have sent from the NoteContext */}
            {/* we have passed {state,updateState} ===> {state:state, updateState:updateState} */}
        </>
    )
}
