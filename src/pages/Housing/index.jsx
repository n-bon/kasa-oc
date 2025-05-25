import { useParams, Navigate } from 'react-router-dom'
import housings from '../../../public/data/housings.json'

import Slideshow from '../../assets/components/Slideshow'
import Collapse from '../../assets/components/Collapse'

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
                    {/* Insérer les tags ici*/}
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