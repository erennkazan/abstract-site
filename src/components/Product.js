import { useState,useEffect } from "react"
import Page from '../api/page.json'
import PageItems from '../components/ui/PageItems'

export default function Product(){

    const[pageItems,setPageItems] = useState([]);

    useEffect(()=>{
      setPageItems(Page);
    })

    return(
        <div className="container mt-5 d-flex flex-wrap justify-content-between">
          {pageItems.length && pageItems.map((pages,index)=> <PageItems key={index} pages={pages}/>)}
        </div>
    )
}