import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Import components here
import Header from '../Header'
import Footer from '../Footer'

//Import Pages
import Home from '../../../pages/Home'
import About from '../../../pages/About/'
import Housing from '../../../pages/Housing/'
import Error from '../../../pages/Error/'

function Routing() {
    return (
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
    )
}

export default Routing