import React from 'react'

export default function Alert(props) {
    return (
        <div className={`alert ${props.effect} alert-dismissible fade show`} role="alert">
            <strong>{props.title} !</strong> {props.message}
            {console.log("Hello")}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
