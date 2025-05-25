//import hooks here
import { useParams, Navigate } from 'react-router-dom'

//import data here
import housings from '../../../public/data/housings.json'

//import components here
import Slideshow from '../../assets/components/Slideshow'
import Collapse from '../../assets/components/Collapse'
import TagsList from '../../assets/components/TagsList'

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
                    {/* Insérer les tags ici*/}
                    <TagsList list={housingItem.tags} />
                </div>
                <div>
                    {/* Insérer le profile sumup ici*/}
                    {/* Insérer la note ici, gérer les propriétés avec flex */}
                </div>
            </section>
            <section className='details'>
                <Collapse
                key='collapse-1'
                title='Description'
                content={housingItem.description}
                />
                <Collapse 
                key='collapse-2'
                title='Équipements'
                content={housingItem.equipments}
                />
            </section>
        </main>
    )
}

export default Housing