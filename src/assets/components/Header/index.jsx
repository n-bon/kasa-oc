import { Link } from 'react-router-dom'

function Header () {
    return (
        <header>
            <p>Ceci est mon header</p>
            <img 
            src='src/assets/images/kasa-logo-color.png' 
            alt="logo de Kasa, platerforme de réservation d'hébergements" 
            />
            <nav>
                <Link to='/'>Accueil</Link>
                <Link to='/a-propos'>À propos</Link>
            </nav>
        </header>
    )
}

export default Header