import { useState } from 'react'
import './style.scss'

function Collapse ({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleCollapse = () => setIsOpen(!isOpen)

    //if content is an array, transform it into a list
    function renderContent() {
        if (Array.isArray(content)) {
            return (
                <ul>
                    {content.map((item, index) =>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )
        }
        return content
    }
 
    return (
        <div className='collapse'>
            <div className='collapse__head' onClick={toggleCollapse}>
                <h2 className='collapse__title'>{title}</h2>
                <i className={`collapse__icon fa-solid fa-chevron-up ${isOpen ? 'collapse__icon--open' : ''}`}></i>
            </div>
            <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
                {renderContent()}
            </div>
        </div>
    )
}

export default Collapse