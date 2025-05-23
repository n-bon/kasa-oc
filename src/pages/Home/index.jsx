import Banner from "../../assets/components/Banner"
import backgroundImage from '../../../public/images/ocean.jpg'

function Home() {

  return (
    <main>
      <Banner title='Chez vous, partout et ailleurs' image={backgroundImage}/>
    </main>
  )
}

export default Home
