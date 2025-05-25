import Tag from '../Tag'
import '../../style/TagsList.scss'

function TagsList({ list }) {
    return (
        <div className='tagsList'>
            {list.map((item, index) => (
                <Tag
                key={`tag-${index}`}
                tagContent={item}
                />
            ))}
        </div>
    )
}

export default TagsList