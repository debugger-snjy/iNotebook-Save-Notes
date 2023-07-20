import React, { useContext, useEffect } from 'react';

// Importing NoteContext 
import NoteContext from '../Context/Notes/NoteContext'
import { Link } from 'react-router-dom';

export default function ContactUs() {

    return (
        <>

            <h1 className='mt-4'><strong>Contact Us</strong></h1>

            <hr />

            <div className='textData my-2 mt-3'>
                We are thrilled to hear from you and want to make sure your experience with iNotebook is exceptional. Whether you have questions, feedback, or need assistance, our team is here to help. Below, you'll find various ways to get in touch with us:
            </div>

            <div className='textData my-2 mt-3'>
                Contact Information:
                <ul type="none">
                    <li><strong>Email</strong> : <Link to="mailto:sanjayasukhwani@gmail.com">sanjayasukhwani@gmail.com</Link></li>
                    <li><strong>Facebook</strong> : <Link to="https://www.facebook.com/profile.php?id=100069005771579">Sanjay Sukhwani</Link></li>
                    <li><strong>Instagram</strong> : <Link to="https://www.instagram.com/itssanjay.sukhwani/">itssanjay.sukhwani</Link></li>
                    <li><strong>Twitter</strong> : <Link to="https://twitter.com/sukhwani_sanjay">Sanjay Sukhwani</Link></li>
                </ul>
            </div>

            <div className="textData my-2 mt-3">
                Please feel free to reach out to us anytime. Our dedicated support team is available to respond to your queries and concerns promptly.
            </div>

            <div className="textData my-2 mt-3">
                Thank You !<br />
                We appreciate your interest in iNotebook and thank you for being a part of our note-taking community. Your support and feedback drive us to create the best note-taking app possible, empowering you to save notes, edit notes, and delete notes effortlessly.
            </div>
            
            <div className="textData my-2 mt-3">
                We look forward to hearing from you and helping you make the most of iNotebook. Happy note-taking!
            </div>
            
            <div className="textData my-2 mt-3">
                Best regards,<br />
                <strong>The iNotebook Team 📔</strong>
            </div>
        </>
    )
}
