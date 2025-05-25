import '../../style/Tag.scss'

function Tag({ tagContent }) {
    return (
        <div className='tag'>
            <p className="tag__text">{tagContent}</p>            
        </div>

    )
}

export default Tag