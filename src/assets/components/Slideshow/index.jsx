import '../../style/Slideshow.scss'

function Slideshow({ pictures, title }) {
    if (pictures.length === 1) {
        return (
            <section className='Slideshow'>
              <img 
                src={`${pictures[0]}`} 
                alt={`Aperçu de ${title}`}
                className='Slideshow__picture'
              />  
            </section>
        )
    }
}

export default Slideshow