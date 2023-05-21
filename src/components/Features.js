import { useState, useEffect } from "react"
import Cards from '../api/cards.json'
import FeaturesItems from '../components/ui/FeaturesItem'


export default function Features(){

  const[card, setCard] = useState([]);

  useEffect(()=>{
    setCard(Cards);
  },[])

    return(
        <div className="container">
          <div className="d-flex justify-content-evenly align-items-center mt-5">
            <div className="w-50">
              <span className="text-demo-font-size fw-bold w-100">
              We Have Impressive Features
              </span>
            </div>
            <div className="w-50">
              <span className=" fs-5 opacity-75">
              You will love all of the features in our Theme. 100% guaranteed satisfaction.
              </span>
            </div>
          </div>
          <div className="">
            {card.length && card.map((cards,index)=> <FeaturesItems key={index} cards={cards}/>)}
          </div>
        </div>
    )
}