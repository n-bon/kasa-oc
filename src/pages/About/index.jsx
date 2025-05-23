import Banner from '../../assets/components/Banner'
import backgroundImage from '../../../public/images/mountains.jpg'
import Collapse from '../../assets/components/Collapse'

function About () {
    return (
        <main>
            <Banner title='' image={backgroundImage}/>
            <section>
                <Collapse
                title='Exemple de titre'
                content= 'Exemple de contenu'
                />
            </section>
        </main>
    )
}

export default About