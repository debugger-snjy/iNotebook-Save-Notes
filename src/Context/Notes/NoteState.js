import NoteContext from "./NoteContext";

const NoteState = (props) => {

    // Creating a Data Object
    const sampleData = {
        "name" : "Sanjay",
        "class" : "12th"
    }

    return (

        // we will pass all the things in value that we have to pass
        <NoteContext.Provider value={sampleData}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState;