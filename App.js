import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Play from './pages/play';
import About from './pages/about';
//import SignUp from './pages/signup';
import Home from './pages/login/views/login';
import Contact from './pages/contact'
import Welcome from './pages/welcome'
import Register from './pages/login/views/register';
import Play2 from './pages/play2'

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/play' element={<Play/>} />
		<Route exact path='/play2' element={<Play2/>} />
		<Route exact path='/about' element={<About/>} />
		<Route exact path='/contact' element={<Contact/>} />
		<Route exact path='/welcome' element={<Welcome/>} />
		<Route exact path='/' element= {<Home/>} />
		<Route exact path='/register' element= {<Register/>} />
	</Routes>
	</Router>
);
}

export default App;

