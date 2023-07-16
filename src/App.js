import './App.css';

// Importing Route and Routes for the Routing
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';

// Importing NoteState 
import NoteState from './Context/Notes/NoteState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
    return (
        <>
            {/* Adding all other inside it means that we want to use it all them */}
            {/* Allow to access state variables inside all the components */}
            <NoteState>

                {/* Adding Navigation Bar */}
                <Navbar />

                {/* Adding the Alert Component which will be modified later */}
                <Alert title="SAMPLE" message="Your Message will be displayed Here" effect="alert-success" />


                <div className="container">

                    {/* Adding and Setting the Routers */}
                    <Routes>
                        <Route exact path='/' element={<Login />} />
                        <Route exact path='/about' element={<About />} />
                        <Route exact path='/addnote' element={<Home />} />
                        <Route exact path='/signup' element={<Signup />} />
                    </Routes>

                </div>

            </NoteState>
        </>
    );
}

export default App;
