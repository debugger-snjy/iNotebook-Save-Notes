import React, { useContext, useEffect } from 'react';

// Importing NoteContext 
import NoteContext from '../Context/Notes/NoteContext'

export default function About() {

    return (
        <>
            <h1 className='mt-4'><strong>Welcome to the About Us page of iNotebook!</strong></h1>

            <hr />

            <div className='my-2 mt-3 textData'>
                At iNotebook, we believe that taking notes should be a seamless and enjoyable experience, whether you're jotting down ideas, capturing important information, or simply organizing your thoughts. Our mission is to provide you with a powerful yet user-friendly platform that allows you to save notes, edit them, and delete them with ease.
            </div>

            <div className='my-2 mt-3 textData'>
                <h5><strong>Our Story:</strong></h5>

                The idea for iNotebook was born out of a genuine passion for productivity and the desire to create a tool that simplifies note-taking while enhancing productivity. We noticed that existing note-taking applications often lacked certain essential features or were overly complex for everyday users. Thus, we set out on a journey to design an intuitive, feature-rich, and accessible note-taking app that caters to the needs of individuals from all walks of life.

            </div>

            <div className='my-2 mt-3 textData'><h5><strong>Features and Functionality:</strong></h5>
                At iNotebook, we pride ourselves on offering a comprehensive set of features to help you stay organized and productive.
            </div>

            <div className='my-2 mt-3 textData'>
                <h5><strong>Here are some of the key functionalities our app offers:</strong></h5>

                <ul>
                    <li className='my-1'><strong>Save Notes</strong>: With iNotebook, you can quickly create and save notes on the go. Whether it's a simple text note or a more complex multimedia-rich entry, our app ensures that your thoughts and ideas are securely stored for future reference.</li>

                    <li className='my-1'><strong>Edit Notes</strong>: We understand that ideas evolve, and information may change. That's why we've made it effortless to edit your notes at any time. Modify, add, or delete content within your notes, and the changes will be automatically saved.</li>

                    <li className='my-1'><strong>Organize Your Notes</strong>: iNotebook provides intuitive organizational tools, such as tags, folders, and categories, allowing you to categorize and group your notes based on themes or topics. This organization system ensures you can easily find what you need, precisely when you need it.</li>

                    <li className='my-1'><strong>Cross-Device Synchronization</strong>: Your notes should be accessible wherever you are. iNotebook offers seamless synchronization across all your devices, be it your smartphone, tablet, or computer. Your notes are securely backed up in the cloud, guaranteeing that your data remains up-to-date and accessible from anywhere.</li>

                    <li className='my-1'><strong>Collaboration and Sharing</strong>: We recognize the importance of teamwork and the value of sharing ideas with others. iNotebook allows you to collaborate with colleagues, friends, or family by sharing notes or entire notebooks, fostering a dynamic and productive working environment.</li>
                </ul>
            </div>

            <div className='my-2 mt-3 textData'>
                <h5><strong>Security and Privacy:</strong></h5>
                At iNotebook, we take the security and privacy of your data seriously. We employ state-of-the-art encryption techniques to safeguard your notes and ensure that your personal information remains private and protected. We adhere to strict data protection practices, and your data will never be shared with third parties without your explicit consent.
            </div>

            <div className='my-2 mt-3 textData'>
                <h5><strong>Join Us in Enhancing Productivity:</strong></h5>
                We invite you to join the iNotebook community and experience the joy of effortless note-taking. Whether you're a student, a professional, or anyone in need of an efficient note-taking tool, iNotebook is here to simplify your life and boost your productivity.

                Thank you for choosing iNotebook - your go-to platform for saving notes, editing notes, and organizing your thoughts. If you have any questions or need assistance, feel free to reach out to our support team. Let's take productivity to new heights together!
            </div>
        </>
    )
}
