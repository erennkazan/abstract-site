export default function FeaturesItem({cards}){
    return(
        <div className="">
            <img src={cards.image}/>
            <div className="fw-bold text-secondary">{cards.title}</div>
            <div className="opacity-75">{cards.alt}</div>
        </div>
    )
}