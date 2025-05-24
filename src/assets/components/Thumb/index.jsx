import '../../style/Thumb.scss'
import { Link } from 'react-router-dom'

function Thumb({ id, title, cover }) {
    return (
        <Link to={`hebergement/${id}`}>
            <article className='thumb'>
                <img 
                className='thumb__background'
                src={cover}
                alt={`Aperçu de ${title}`}
                />
                <div className='thumb__layout'>
                    <h2 className='thumb__title'>{title}</h2>
                </div>
            </article>        
        </Link>
    )
}

export default Thumb