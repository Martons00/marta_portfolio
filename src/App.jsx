import { useState } from 'react'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Homepage from './component/Home'
import NotFound from './component/NotFoud'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)
  const footerText = "Marta Spaccapietra - Portfolio 2025";


  return (
    <>
      <Header />
      <Routes>
        <Route
            path="/marta_portfolio" element={
                    <Homepage/>
            }>
        </Route>
        <Route path="/marta_portfolio/*" element={<NotFound />}> </Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
