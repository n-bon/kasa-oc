import { useState } from 'react'
import '../../style/Slideshow.scss'

function Slideshow({ pictures, title }) {

    //Slideshow management init & programm
    const [count, setCount] = useState(0)

    //no slodeshow if 1 picture in array
    if (pictures.length === 1) {
        return (
            <section className='slideshow'>
              <img 
                src={`${pictures[0]}`} 
                alt={`Aperçu de ${title}`}
                className='slideshow__picture'
              />  
            </section>
        )
    }

    //else, slideshow if several pictures in array
    return (
        <section className='slideshow'>
            <img 
            src={`${pictures[0]}`} 
            alt={`Aperçu de ${title}`}
            className='slideshow__picture'
            />
            <div className='slideshow__layout'>
                <div className='slideshow__chevron'>
                    <i className="slideshow__chevron--left fa-solid fa-chevron-left"></i>
                    <i className="slideshow__chevron--right fa-solid fa-chevron-right"></i>                    
                </div>
                <div className='slideshow__count'>
                    <p className='slideshow__count'>{count + 1} / {pictures.length}</p>
                </div>
            </div>
        </section>        
    )
}

export default Slideshow