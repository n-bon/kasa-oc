import '../../style/Banner.scss'

function Banner({ title, image}) {
    return (
        <section className='banner'>
            <img
            src={image}
            className='banner__image'
             />
             <div className='banner__layout'>
                <h1 className="banner__title">{title}</h1>
             </div>
        </section>
    )
}

export default Banner