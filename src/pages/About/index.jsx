import Banner from '../../assets/components/Banner'
import backgroundImage from '../../../public/images/mountains.jpg'
import Collapse from '../../assets/components/Collapse'

function About () {
    return (
        <main>
            <Banner title='' image={backgroundImage}/>
            <section>
                <Collapse />
            </section>
        </main>
    )
}

export default About