import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Service from './Components/Service/Service'
import Industries from './Components/Industries/Industries'
import ContactForm from './Components/Home/ContactForm/ContactForm'

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/industries' element={<Industries/>}/>
        <Route path='/contactForm' element={<ContactForm/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App