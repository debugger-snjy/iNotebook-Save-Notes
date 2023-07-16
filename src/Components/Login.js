import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    let navigateTo = useNavigate()

    // Function to handle when user gets logged in !
    const handleLogin = async (event) => {

        console.log("Login Submit !");

        event.preventDefault();

        let userEmail = document.getElementById("userEmail").value;
        console.log(userEmail);
        let userPassword = document.getElementById("userPassword").value;
        console.log(userPassword);

        // Adding the API Call to add the notes into the Database
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST", // As fetchallnotes is a GET method

            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',

            },

            body: JSON.stringify({ email: userEmail, password: userPassword })
        });

        // Variable to handle the Login Response
        const userToken = await response.json()
        
        console.log(userToken);

        // If the user is registered and we get its auth-token,
        // Then we will save that auth-token in the localStorage
        if (userToken.status === "success") {

            // Saving auth-token in localstorage
            localStorage.setItem("token",userToken.authToken)

            // Also redirecting it to the Home Page(Add Note Page)
            navigateTo("/addnote")

        }
        else{
            // Setting the status message :
            document.getElementById("status").innerText = userToken.msg
            document.getElementById("status").style.color = "red"
            document.getElementById("status").style.fontWeight = 600;
        }

    }

    return (
        <>
            <div className="container">
                <h1 className='websiteHeading'>iNotebook - Save Notes Easily</h1>
                <div className="row mt-5 gy-4">
                    <div className="col">

                        <ul className='websitetext'>
                            <li>iNotebook Website is a user-friendly online platform designed to provide a seamless note-taking experience.</li>
                            <li>Users can easily compose and store their thoughts, ideas, reminders, or any other relevant information within the platform.</li>
                            <li>This Website strives to provide a secure and user-friendly environment for note-taking and managementthe platform ensures that users can easily organize and access their valuable information whenever they need it.</li>
                            <li>Functionality :
                                <ol>
                                    <li>Create Note</li>
                                    <li>Save Note</li>
                                    <li>Update Note</li>
                                    <li>Delete Note</li>
                                    <li>Read All Notes</li>
                                </ol>
                            </li>
                        </ul>

                    </div>
                    <div className="col">
                        <div className="loginForm">
                            <div className="row g-3 align-items-center mx-3 mt-2">
                                <h5 className='text-center'><strong>Login Form</strong></h5>
                                <div className="my-1 text-center" id='status'></div>
                                <form onSubmit={handleLogin}>
                                    <div className="mb-3">
                                        {/* <label for="userEmail" className="form-label">Email Address</label> */}
                                        <input type="email" className="form-control noteField-login" id="userEmail" placeholder="Email Id" />
                                    </div>
                                    <div className="mb-3">
                                        {/* <label for="userPassword" className="form-label">Password</label> */}
                                        <input type="password" className="form-control noteField-login" id="userPassword" placeholder='Password' />
                                        <div style={{ "textAlign": "right", marginTop : "10px" }}><Link to="/">Forget Password ?</Link></div>
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-primary container">Log in</button>
                                    </div>
                                </form>
                                <hr />
                                <div className="mb-3">
                                    <div className='text-center text-white'>New to iNotebook, <Link to='/signup'>Create Account</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login