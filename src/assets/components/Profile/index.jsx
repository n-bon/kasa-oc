function Profile( { host }) {
    return(
        <div>
            <p>Ceci est mon composant profil</p>
            <p>{host.name}</p>
            <img src={host.picture} alt={`Portrait de ${host.name}`} />           
        </div>
    )
}

export default Profile