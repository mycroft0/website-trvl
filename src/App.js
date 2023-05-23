import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from "./Components/Home";
import Services from "./Components/pages/Services";
import Products from "./Components/pages/Products";
import SignUp from "./Components/pages/SignUp";


function App() {
  return (
    <>
        <Router>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route index element={<Home/>} />
                <Route path='/services' element={<Services/>} />
                <Route path='/products' element={<Products/>} />
                <Route path='/sign-up' element={<SignUp/>} />
            </Routes>
        </Router>

    </>
  )
}

export default App;
