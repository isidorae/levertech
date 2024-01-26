import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Faqs from './pages/Faqs'
import Jobs from './pages/Jobs'
import News from './pages/News'
import Login from './pages/Login'
import Register from './pages/Register'
import Contratar from './pages/Contratar'
import Simulador from './pages/Simulador'
import Calendar from './pages/Calendar'
import Profile from './pages/Profile'
import Privacidad from './pages/Privacidad'
import Terminos from './pages/Terminos'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={< Home/>}/>
        <Route path="/nosotros" element={< About/>}/>
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
