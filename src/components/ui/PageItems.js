export default function PageItems({pages}){
    return(
        <div className="">   
            <img className="" src={pages.image}/>
            <div className="">{pages.title}</div>
            <div className="">{pages.alt}</div>
        </div>
    )
}