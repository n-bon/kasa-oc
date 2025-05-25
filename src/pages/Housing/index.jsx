import { useParams, Navigate } from 'react-router-dom'
import housings from '../../../public/data/housings.json'

import Slideshow from '../../assets/components/Slideshow'

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
            <h1>{housingItem.title}</h1>
            <p>{housingItem.id}</p>
            <p>{housingItem.description}</p>
        </main>
    )
}

export default Housing