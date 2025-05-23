import Banner from '../../assets/components/Banner'
import backgroundImage from '../../../public/images/ocean.jpg'
import ThumbsGrid from '../../assets/components/ThumbsGrid'

function Home() {

  return (
    <main>
      <Banner title='Chez vous, partout et ailleurs' image={backgroundImage}/>
      <ThumbsGrid />
    </main>
  )
}

export default Home
