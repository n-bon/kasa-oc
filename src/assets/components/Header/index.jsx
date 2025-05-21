import { Link, useLocation } from 'react-router-dom'
import '../../style/Header.scss'

function Header () {
    const location = useLocation()
    return (
        <header>
            <p>Ceci est mon header</p>
            <img 
            src='src/assets/images/kasa-logo-color.png' 
            alt="logo de Kasa, platerforme de réservation d'hébergements" 
            />
            <nav>
                <Link 
                to='/'
                className={location.pathname === '/' ? 'navbar__link--active' : ''}
                >Accueil</Link>
                <Link 
                to='/a-propos'
                className={location.pathname === '/a-propos' ? 'navbar__link--active' : ''}
                >À propos</Link>
            </nav>
        </header>
    )
}

export default Header