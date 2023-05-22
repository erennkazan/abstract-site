export default function FeaturesItem({cards}){
    return(
        <div className="w-100 h-100 rounded-4 ">
            <img className="p-2 mt-5 ms-4 m-2" src={cards.image}/>
            <div className="p-2 mt-3 ms-4 m-2 fw-bold text-white">{cards.title}</div>
            <div className="p-2 mt-3 ms-4 m-2 text-white">{cards.alt}</div>
        </div>
    )
}