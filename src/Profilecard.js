function ProfileCard({title, handle, image, description}) {
    return (
    <div className="card">
        <div className="card-image">
            <figure>
                <img src={image} alt="pda logo" />
            </figure>
        </div>
        <div className="card-content">
            <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{handle}</p>
                <p>{description}</p>
            </div>
        </div>
    </div>
    );
}

export default ProfileCard;

/**
 * CSS bulma framework can be installed using npm. 
 * see bulma docs on google
 */