export default function ProjectsCard(text, link, image) {
    return (
        <div className="card">
            <div className="text">
                <p>{text}</p>
            </div>
            <a href={link}>
                <img className="card-image" src={image} alt="" />
            </a>            
        </div>
    );
};
