export default function ProductItem({product}){
    return(
        <div className="w-50  rounded-4 ">   
            <img className="rounded-4 " src={product.image} alt={product.title}/>
            <div className="m-4 mb-5 fw-bold fs-2">{product.title}</div>
        </div>
    )
}