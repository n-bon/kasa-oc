import { useState } from 'react'

function Collapse ({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggleCollapse = () => setIsOpen(!isOpen)

    return (
        <div className='collapse'>
            <div className='collapse__head' onClick={toggleCollapse}>
                <h2 className='collapse__title'>{title}</h2>
                <i className={`collapse__head fa-solid fa-chevron-right ${isOpen ? 'open' : ''}`}></i>
            </div>
            {isOpen && <div className='collapse__content'>{content}</div>}
        </div>
    )
}

export default Collapse