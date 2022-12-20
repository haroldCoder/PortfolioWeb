import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Skills from './Components/Skills'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/skills' element={<Skills/>} />
        </Routes>
      </Router>
      
      <footer className='foot'>
        <h1>Copyright ©Koderx Development 2022</h1>
      </footer>
    </div>
  )
}

export default App
