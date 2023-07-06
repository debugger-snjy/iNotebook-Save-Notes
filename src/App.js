import './App.css';

// Importing Route and Routes for the Routing
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';

function App() {
    return (
        <>

            {/* Adding Navigation Bar */}
            <Navbar />

            {/* Adding and Setting the Routers */}
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
            </Routes>

        </>
    );
}

export default App;
