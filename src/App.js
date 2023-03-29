import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home1 from './components/Home1';
import Add from './components/Add';
import Edit from './components/Edit';

import Home from './pages/home';
import About from './pages/about';
import Modal from './pages/modal';
import Contact from './pages/contact';
import Signup from './pages/sign up';


  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home1/>}/>
        <Route path='/create' element={<Add/>}/>
        <Route path='/edit' element={<Edit/>}/>

        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/modal' element={<Modal/>} />
        <Route path='/signup' element={<Signup/>} />

       
       
    </Routes>
    </Router>
);
}
  
export default App;