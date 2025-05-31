//import hooks here
import { useParams, Navigate } from 'react-router-dom'

//import data here
import housings from '../../../public/data/housings.json'

//import components here
import Slideshow from '../../assets/components/Slideshow'
import Collapse from '../../assets/components/Collapse'
import Tag from '../../assets/components/Tag'
import Review from '../../assets/components/Review'

//import styles here
import './style.scss'

function Housing() {
    const { id } = useParams()
    const housingItem = housings.find((item) => item.id === id)
    if (!housingItem) {
        return (
            <Navigate to='/erreur' replace />
        )
    }

    return (
        <main>
            <Slideshow
            pictures={housingItem.pictures}
            title={housingItem.title}
            />
            <section className='housing'>
                <div className='housing__head'>
                    <h1 className='housing__title'>{housingItem.title}</h1>
                    <p className='housing__location'>{housingItem.location}</p>
                    <div className='housing__tagsList'>
                        {housingItem.tags.map((item, index) => (
                            <Tag
                            key={`tag-${index}`}
                            tagContent={item}
                            />
                        ))}
                    </div>
                </div>
                <div className='housing__host'>
                    <div className='profile'>
                        <p className='profile__name'>{housingItem.host.name}</p>
                        <img className='profile__image' src={housingItem.host.picture} alt={`Portrait de ${housingItem.host.name}`} />           
                    </div>
                    <Review 
                    rating={housingItem.rating}
                    />
                </div>
            </section>
            <section className='details'>
                <div className='details__container'>
                    <Collapse
                    key='collapse-1'
                    title='Description'
                    content={housingItem.description}
                    />                    
                </div>
                <div className='details__container'>
                    <Collapse 
                    key='collapse-2'
                    title='Équipements'
                    content={housingItem.equipments}
                    />                    
                </div>
            </section>
        </main>
    )
}

export default Housing