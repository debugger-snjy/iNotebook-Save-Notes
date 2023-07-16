import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {

    let navigateTo = useNavigate()

    // Using State for the credintials
    const [credentials, setcredentials] = useState({
        email: "",
        name: "",
        password: "",
        confirmpassword: "",
    })

    let confirmPasswordRef = useRef(null)
    let passwordRef = useRef(null)

    const comparePassword = (event) => {

        // TODO : try to use redux for better functionality
        // console.log(event.target.value);
        setcredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
        console.log(credentials);
        
        console.log(passwordRef.current.value);
        console.log(confirmPasswordRef.current.value);

        if (confirmPasswordRef.current.value !== passwordRef.current.value) {
            document.getElementById("confirmpassword").style.border = "3px solid red"
            document.getElementById("password").style.border = "3px solid red"
            // credentials.valid = false ====> We cannot update the value like this
            // setcredentials({...credentials,valid : "false",confirmpassword : confirmPasswordRef.current.value})
            setcredentials({ ...credentials, confirmpassword: confirmPasswordRef.current.value })
            console.log("Unmatched", "confirmpassword : ", confirmPasswordRef.current.value, "password : ", passwordRef.current.value);
            console.log(credentials);
        }
        else if(confirmPasswordRef.current.value === passwordRef.current.value){
            // credentials.valid = true ====> We cannot update the value like this

            setTimeout(() => {
                document.getElementById("confirmpassword").style.border = "3px solid black"
                document.getElementById("password").style.border = "3px solid black"
            }, 2000);
            document.getElementById("confirmpassword").style.border = "3px solid green"
            document.getElementById("password").style.border = "3px solid green"
            // credentials.valid = true ====> We cannot update the value like this
            // setcredentials({...credentials,valid : "true",confirmpassword : passwordRef.current.value})
            setcredentials({ ...credentials, confirmpassword: confirmPasswordRef.current.value })
            console.log("Matched", "confirmpassword : ", confirmPasswordRef.current.value, "password : ", passwordRef.current.value);
            console.log(credentials);
        }
    }

    // Function when the values of the input are changed
    const onChange = (event) => {
        setcredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    // Function to handle when user gets logged in !
    const handleSignup = async (event) => {

        console.log("Signup Submit !");

        event.preventDefault();
        console.log(credentials);
        // console.log(credentials.valid);

        if (credentials.password === credentials.confirmpassword) {
            // Adding the API Call to add the notes into the Database
            const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
                method: "POST", // As fetchallnotes is a GET method

                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },

                body: JSON.stringify({ email: credentials.email, password: credentials.password, name: credentials.name })
            });

            // Variable to handle the Login Response
            const userToken = await response.json()

            console.log(userToken);

            // If the user is registered and we get its auth-token,
            // Then we will save that auth-token in the localStorage
            if (userToken.status === "success") {

                // Saving auth-token in localstorage
                localStorage.setItem("token", userToken.authToken)

                // Setting the status message :
                document.getElementById("status").innerText = userToken.msg
                document.getElementById("status").style.color = "green"
                document.getElementById("status").style.fontWeight = 600;

                setTimeout(() => {
                    // Also redirecting it to the Home Page(Add Note Page)
                    navigateTo("/addnote")

                }, 2000);


            }
            else {
                // Setting the status message :
                document.getElementById("status").innerText = userToken.msg
                document.getElementById("status").style.color = "red"
                document.getElementById("status").style.fontWeight = 600;
            }

        }
        else {
            document.getElementById("status").innerText = "Please Check the Fields"
            document.getElementById("status").style.color = "red"
            document.getElementById("status").style.fontWeight = 600;
        }
    }

    return (
        <>
            <div className="container" style={{ marginTop: "50px" }}>
                <h2><strong>Sign Up Form</strong></h2>
                <div id="status" className='my-3 fw-bold'></div>
                <form id='signupForm' className='mt-3' onSubmit={handleSignup}>
                    <div className="mb-4">
                        <label htmlFor="name" className="form-label"><strong>Full Name</strong></label>
                        <input type="text" className="form-control noteField-signup" id="name" name="name" required onChange={onChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label"><strong>Email address</strong></label>
                        <input type="email" className="form-control noteField-signup" id="email" name="email" aria-describedby="emailHelp" required onChange={onChange} />
                        {/* <div id="emailHelp" name="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label"><strong>Password</strong></label>
                        <input type="password" className="form-control noteField-signup" id="password" name="password" required minLength={5} ref={passwordRef} onChange={onChange} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmpassword" className="form-label"><strong>Confirm Password</strong></label>
                        <input type="password" className="form-control noteField-signup" id="confirmpassword" name="confirmpassword" required minLength={5} ref={confirmPasswordRef} onChange={comparePassword} />
                    </div>
                    <center><button type="submit" className="btn btn-primary signupBtn">Signup</button></center>
                </form>
                {/* <hr size={3} style={{ width:"80%", opacity : .85, background : "#353535", border : "0px solid #353535", borderRadius : "10px", margin : "20px auto"}}/> */}
                <div className="mt-3 mb-3">
                    <div className='text-center'><strong>Already Have Account, <Link to='/'>Login</Link></strong></div>
                </div>
            </div>
        </>
    )
}
