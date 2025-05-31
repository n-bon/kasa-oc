//Import hooks from libraries here
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Import components here
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'

//import pages here
import Home from './pages/Home'
import About from './pages/About'
import Housing from './pages/Housing'
import Error from './pages/Error'

//import main style
import './assets/style/main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/a-propos' element={<About />} />
        <Route path='/hebergement/:id' element={<Housing />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
)
