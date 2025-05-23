import Thumb from "../Thumb";
import data from '../../../../public/data/housings.json'

function ThumbsGrid () {
    return (
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
    )
}

export default ThumbsGrid