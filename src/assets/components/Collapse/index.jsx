import { useState } from 'react'
import '../../style/Collapse.scss'

function Collapse ({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleCollapse = () => setIsOpen(!isOpen)

    return (
        <div className='collapse'>
            <div className='collapse__head' onClick={toggleCollapse}>
                <h2 className='collapse__title'>{title}</h2>
                <i className={`collapse__icon fa-solid fa-chevron-up ${isOpen ? 'collapse__icon--open' : ''}`}></i>
            </div>
            <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
                {content}
            </div>
        </div>
    )
}

export default Collapse