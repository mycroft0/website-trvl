import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from "./Components/Home";


function App() {
  return (
    <>
        <Router>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route index element={<Home/>} />
            </Routes>
        </Router>

    </>
  )
}

export default App;
