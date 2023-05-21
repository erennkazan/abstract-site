export default function FeaturesItem({features}){
    return(
        <div className="bg-white flex flex-col relative gap-y-1 p-3 items-center text-center text-sm font-semibold">
            <button className="absolute top-3 right-3 w-8 h-8 bg-white flex items-center justify-center border transition-colors border-gray-200 rounded-lg text-brand-color shadow-md hover:border-brand-color ">
                
            </button>
            <img src={features.image} alt={features.title}/>
            <div className=" text-brand-color">{features.price}</div>
            <div className=" text-gray-900">{features.title}</div>
            <div className="text-gray-500">{features.alt}</div>
        </div>
    )
}