import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import Home from './pages/Home/'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
)
