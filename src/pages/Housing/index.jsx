//import hooks here
import { useParams, Navigate } from 'react-router-dom'

//import data here
import housings from '../../../public/data/housings.json'

//import components here
import Slideshow from '../../assets/components/Slideshow'
import Collapse from '../../assets/components/Collapse'
import TagsList from '../../assets/components/TagsList'
import Review from '../../assets/components/Review'
import Profile from '../../assets/components/Profile'

//import styles here
import '../../assets/style/Housing.scss'

function Housing() {
    const { id } = useParams()
    const housingItem = housings.find((item) => item.id === id)
    console.log(housingItem)
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
                    <TagsList list={housingItem.tags} />
                </div>
                <div className='housing__host'>
                    <Profile
                    host={housingItem.host}
                    />
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