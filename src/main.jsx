//Import hooks from libraries here
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Import components here
import Routing from './assets/components/Router'

//import main style
import './assets/style/main.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routing />
  </StrictMode>
)
