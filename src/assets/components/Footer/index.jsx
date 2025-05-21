import '../../style/Footer.scss'
function Footer() {
    return (
        <footer className='footer'>
            <img 
            className='footer__logo'
            src='src/assets/images/kasa-logo-white.png'  
            alt="logo de Kasa, réservation d'hébergements"/>
            <p className='footer__text'>© 2025 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer