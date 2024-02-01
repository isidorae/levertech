import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/public-pgs/Home'
import About from './pages/about/About'
import Service from './pages/public-pgs/Service'
import Contact from './pages/public-pgs/Contact'
import Faqs from './pages/public-pgs/Faqs'
import Jobs from './pages/public-pgs/Jobs'
import News from './pages/public-pgs/News'
import Login from './pages/public-pgs/Login'
import Register from './pages/public-pgs/Register'
import Contratar from './pages/private-pgs/Contratar'
import Simulador from './pages/Simulador'
import Calendar from './pages/private-pgs/Calendar'
import Profile from './pages/private-pgs/Profile'
import Privacidad from './pages/Privacidad'
import Terminos from './pages/Terminos'
import Historia from './pages/about/Historia'
import CulturaLaboral from './pages/about/CulturaLaboral'
import Valores from './pages/about/Valores'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={< Home/>}/>
        <Route path="/nosotros" element={< About/>}/>
        <Route path="/historia" element={< Historia/>}/>
        <Route path="/cultura-laboral" element={< CulturaLaboral/>}/>
        <Route path="/valores" element={< Valores/>}/>
        <Route path="/como-funciona" element={< Service/>}/>
        <Route path="/contacto" element={< Contact/>}/>
        <Route path="/faqs" element={< Faqs/>}/>
        <Route path="/trabaja-con-nosotros" element={< Jobs/>}/>
        <Route path="/noticias" element={< News/>}/>
        <Route path="/login" element={< Login/>}/>
        <Route path="/registro" element={< Register/>}/>
        <Route path="/contratar" element={< Contratar/>}/>
        <Route path="/simulador" element={< Simulador/>}/>
        <Route path="/agendar" element={< Calendar/>}/>
        <Route path="/profile" element={< Profile/>}/>
        <Route path="/politicas-privacidad" element={< Privacidad/>}/>
        <Route path="/terminos-y-condiciones" element={< Terminos/>}/>
        <Route path="/*" element={<Navigate to="/" />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
