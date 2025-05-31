//import components
import Banner from '../../assets/components/Banner'
import Collapse from '../../assets/components/Collapse'

//import banner image
import backgroundImage from '../../../public/images/mountains.jpg'

//import style
import './style.scss'

function About () {
    const aboutContent = [
        {
            "head" : "Fiabilité",
            "child" : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            "head" : "Respect",
            "child" : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            "head" : "Service",
            "child" : "La qualité de service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
        },
        {
            "head" : "Sécurité",
            "child" : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ]
    return (
        <main className='about'>
            <Banner title='' image={backgroundImage}/>
            <section className='about__collapseGrid'>
                {aboutContent.map((aboutItem, index) => (
                    <Collapse 
                    key={index}
                    title={aboutItem.head}
                    content={aboutItem.child}
                    />
                ))}
            </section>
        </main>
    )
}

export default About