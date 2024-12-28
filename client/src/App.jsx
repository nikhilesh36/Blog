import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'

export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Projects" element={<Projects/>}/>
     </Routes>
    </BrowserRouter>
  )
}
