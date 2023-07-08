import React from 'react'

import { Link } from 'react-router-dom';

// As we needed the data from the props
export default function NoteItem(props) {

    // Applying Destructing
    const { title, description, date } = props.note;
    return (
        <div className="col" >
            <div className="card noteCard">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                </div>
            </div>
        </div>
    );
}
