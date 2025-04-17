import { useState } from 'react'
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Homepage from './component/Home'
import NotFound from './component/NotFoud'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import Work from './component/Work';
import About from './component/About';
import Journal from './component/Journal';
import Contact from './component/Contact';
import Project from './component/Project';

function App() {
  const [count, setCount] = useState(0)
  const footerText = "Marta Spaccapietra - Portfolio 2025";


  return (
    <>
      <div className="page-container">
        <Header />
        <main className="content">
          <Routes>
            <Route
              path="/marta_portfolio" element={
                <Homepage />
              }>
            </Route>
            <Route
              path="/marta_portfolio/work" element={
                <Work />
              }>
            </Route>
            <Route
              path="/marta_portfolio/work/:id" element={<Project/>
              }>
            </Route>
            <Route
              path="/marta_portfolio/about" element={
                <About />
              }>
            </Route>
            <Route
              path="/marta_portfolio/journal" element={
                <Journal />
              }>
            </Route>
            <Route
              path="/marta_portfolio/contact" element={
                <Contact />
              }>
            </Route>
            <Route path="/marta_portfolio/*" element={<NotFound />}> </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
