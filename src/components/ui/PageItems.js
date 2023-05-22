export default function PageItems({pages}){
    return(
        <div className="d-flex align-items-center p-2 mt-5">   
            <img className="" src={pages.image}/>
            <div className="ms-5 p-2">
            <div className="ms-5 fw-bold text-demo-font-size">{pages.title}</div>
            <div className="ms-5 mt-4 fs-4">{pages.alt}</div>
            </div>
        </div>
    )
}