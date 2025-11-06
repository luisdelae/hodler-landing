function FeatureCard({title, description, icon}) {
    return (
        <div>
            <h3><span>{icon}</span>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default FeatureCard;