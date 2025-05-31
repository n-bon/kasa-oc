import './style.scss'
function Review({ rating }) {
const totalStars = 5

    return (
        <div className='review'>
            {[...Array(totalStars)].map((_, index) =>(
                <i
                key={index}
                className={`fa-solid fa-star review__star ${ index < rating ? 'review__star--active' : ''}`}
                ></i>
            ))}
        </div>
    )
}

export default Review