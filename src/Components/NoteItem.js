import React from 'react'

import { Link } from 'react-router-dom';
import Alert from './Alert';

// As we needed the data from the props
export default function NoteItem(props) {

    // Applying Destructing
    const { title, description, date } = props.note;

    // Function to Notify and Delete the Note
    const deleteNote = () => {
        console.log("Delete");
        // <Alert title="SUCCESS" message="Your Note has been Deleted !" effect="alert-success"/>
    }

    // Function to Notify and Edit the Note
    const editNote = () => {
        console.log("Edit");
        // <Alert title="INFO" message="You can Edit the Note Now !" effect="alert-primary"/>
    }

    // Function to format the Date that we got from database
    const formatteddatetime = (datetimeString)=>{

        // Removing the Z from the string
        const datetime = datetimeString.split("Z")[0];
        
        // Getting the Date from the datetime String and then dividing the hrs,min,sec,microsec into a array
        const dateString = (datetime.split("T")[0]).split("-");

        // Getting the Time from the datetime String
        const timeString = datetime.split("T")[1];
        
        // Array of all months
        const months = ["Jan","Feb","Mar","Apr","MayJun","Jul","Aug","Sep","Oct","Nov","Dec"];

        // Getting the hrs from the time string
        let hrs = timeString.split(":")[0];
        
        // Getting the min from the time string
        let min = timeString.split(":")[1];

        // Finding the am pm notation from the string
        let ampm = "";

        // Converting the 24 hours into 12 hours and finding the ampm notation
        if(hrs>12){
            ampm = "PM";
            hrs = hrs - 12;
        }
        else{
            ampm = "AM";
        }

        // Formatting Time from hrs, min, and ampm notation
        const noteTime = hrs + ":" + min + " " + ampm;

        // Formatting Date from date,month and year
        const noteDate = dateString[2] + " " + months[parseInt(dateString[1])] + " " + dateString[0];
        
        // Checking
        // console.log(noteDate,noteTime);
        
        // Returning the Date and Time in a form of String
        return `${noteDate} ${noteTime}`;
    }

    // TODO : Change the icon color on hover !
    // Function to change the color to hover color on hover
    // const hoverEditEffect = () => {
    //     const editElements = document.getElementsByClassName("editIcon");
    //     // console.log(editElements);  // ===> Just for Checking
    //     for (let i = 0; i < editElements["length"]; i++) {
    //         console.log(editElements[i].style.color = "#FF0000");
    //     }
    // }

    // const hoverDeleteEffect = () => {
    //     const deleteElements = document.getElementsByClassName("deleteIcon");
    //     for (let i = 0; i < deleteElements["length"]; i++) {
    //         console.log(deleteElements[i].style.color = "#FF0000");
    //     }
    // }

    // Function to change hover color to original color on hover
    // const removeHoverEditEffect = () => {
    //     const editElements = document.getElementsByClassName("editIcon");
    //     // console.log(editElements);  // ===> Just for Checking
    //     for (let i = 0; i < editElements["length"]; i++) {
    //         console.log(editElements[i].style.color = "#FF0000");
    //     }
    // }

    // const removeHoverDeleteEffect = () => {
    //     const deleteElements = document.getElementsByClassName("deleteIcon");
    //     for (let i = 0; i < deleteElements["length"]; i++) {
    //         console.log(deleteElements[i].style.color = "#FF0000");
    //     }
    // }


    return (
        <div className="col" >
            <div className="card noteCard">

                <div className="card-body">
                    <h5 className="card-title">
                        <div className="d-flex">
                            <div className="p-2 flex-grow-1">{title}</div>
                            <div className="p-2"><i className="icons fa-solid fa-trash" style={{ "color": "#231a1a" }} onClick={deleteNote}></i></div>
                            <div className="p-2"><i className="icons fa-solid fa-marker" style={{ "color": "#231a1a" }} onClick={editNote}></i></div>
                        </div>
                    </h5>
                    <p className="card-text p-2">{description}</p>
                </div>
                <div className="card-footer text-body-secondary small">
                    <div className='px-2'>Created : {formatteddatetime(date)}</div>

                    {/* TODO : Add Last Date Modified */}
                    {/* <div className='px-2'>Last Modified : </div> */}
                </div>
            </div>
        </div>
    );
}
