import React, {useContext} from 'react';

// Importing NoteContext 
import NoteContext from '../Context/Notes/NoteContext'

export default function About() {
    
    // This will allow to access the data of Notecontext
    const data = useContext(NoteContext);

    return (
        <>
            <div>This is About Page</div>
            <div>Data : Name = {data.name} and Class = {data.class}</div>
        </>
    )
}
