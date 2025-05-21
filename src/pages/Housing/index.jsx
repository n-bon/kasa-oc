import { useParams } from 'react-router-dom'
import housings from '../../assets/data/housings.json'

function Housing() {
    const { id } = useParams()
    const housingItem = housings.find((item) => item.id === id)

    if (!housingItem) {
        return (
            <div>
                 {/* Changer ce morceau de code quand la page erreur sera créée */}
                <p>Hébergement non trouvé</p>
            </div>
        )
    }
    return (
        <div>
            <h1>{housingItem.title}</h1>
            <p>{housingItem.id}</p>
            <p>{housingItem.description}</p>
        </div>
    )
}

export default Housing