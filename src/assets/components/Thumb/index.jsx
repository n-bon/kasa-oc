import '../../style/Thumb.scss'

function Thumb() {
    return (
        <article 
        className='thumb' 
        key=''
        >
            <img 
            class='thumb__background'
            src='https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg'
            />
            <div class='thumb__layout'>
                <h2 class='thumb__title'>
                    Ceci est le titre de ma carte
                </h2>
            </div>
        </article>
    )
}

export default Thumb