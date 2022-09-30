import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from './pages/ContactUs';
import ListData from './pages/ListData'



const App = () => {
  return (
  <BrowserRouter> 
    <Routes>
    <Route path="" element={<ContactUs />}/>
    <Route path="listdata" element={<ListData />}/>
    </Routes>
  </BrowserRouter>

  )
}

export default App