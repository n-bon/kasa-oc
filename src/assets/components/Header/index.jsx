import { Link, useLocation } from 'react-router-dom'
import '../../style/Header.scss'

function Header () {
    const location = useLocation()
    return (
        <header className='navbar'>
            <img 
            className='navbar__logo'
            src='src/assets/images/kasa-logo-color.png' 
            alt="logo de Kasa, platerforme de réservation d'hébergements" 
            />
            <nav className='navbar__menu'>
                <Link 
                to='/'
                className={location.pathname === '/' ? 'navbar__link navbar__link--active' : 'navbar__link'}
                >Accueil</Link>
                <Link 
                to='/a-propos'
                className={location.pathname === '/a-propos' ? 'navbar__link navbar__link--active' : 'navbar__link'}
                >À propos</Link>
            </nav>
        </header>
    )
}

export default Header