import { useState } from 'react'
import '../../style/Slideshow.scss'

function Slideshow({ pictures, title }) {

    //Slideshow management init & programm
    const [count, setCount] = useState(0)

    function previousImage() {
        setCount((prevCount) => 
            prevCount === 0 ? pictures.length -1 : prevCount -1
        )
    }

    function nextImage() {
        setCount((prevCount) =>
            prevCount === pictures.length - 1 ? 0 : prevCount + 1 
        )
    }

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
            src={`${pictures[count]}`} 
            alt={`Aperçu de ${title}`}
            className='slideshow__picture'
            />
            <div className='slideshow__layout'>
                <div className='slideshow__chevron'>
                    <i 
                        className="slideshow__chevron--left fa-solid fa-chevron-left"
                        onClick={previousImage}
                    ></i>
                    <i 
                        className="slideshow__chevron--right fa-solid fa-chevron-right"
                        onClick={nextImage}
                    ></i>                    
                </div>
                <div className='slideshow__count'>
                    <p className='slideshow__count'>{count + 1} / {pictures.length}</p>
                </div>
            </div>
        </section>        
    )
}

export default Slideshow