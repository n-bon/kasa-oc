import '../../style/Footer.scss'

import logoWhite from '../../../../public/logo/kasa-logo-white.png'

function Footer() {
    return (
        <footer className='footer'>
            <img 
            className='footer__logo'
            src={logoWhite}  
            alt="logo de Kasa, réservation d'hébergements"/>
            <p className='footer__text'>© 2025 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer