import '../../style/Profile.scss'

function Profile( { host }) {
    return(
        <div className='profile'>
            <p className='profile__name'>{host.name}</p>
            <img className='profile__image' src={host.picture} alt={`Portrait de ${host.name}`} />           
        </div>
    )
}

export default Profile