//import components
import Banner from '../../assets/components/Banner'
import Thumb from '../../assets/components/Thumb'

//import assets
import data from '/src/assets/data/housings.json'
import backgroundImage from '/src/assets/images/ocean.jpg'

//import style
import './style.scss'

function Home() {

  return (
    <main>
      <Banner title='Chez vous, partout et ailleurs' image={backgroundImage}/>
      <section className="grid">
        {data.map((housing) => (
            <Thumb 
                key={housing.id}
                id={housing.id}
                title={housing.title}
                cover={housing.cover}
            />
        ))}
      </section>
    </main>
  )
}

export default Home
