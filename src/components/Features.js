import { useState, useEffect } from "react"
import Cards from '../api/cards.json'
import FeaturesItems from '../components/ui/FeaturesItem'


export default function Features(){

  const[card, setCard] = useState([]);

  useEffect(()=>{
    setCard(Cards);
  },[])

    return(
        <div className="features-bg-color">
          <div className="container p-5 mt-5 d-flex justify-content-between align-items-center ">
            <div className="w-50">
              <span className="text-demo-font-size text-white fw-bold w-100">
              We Have Impressive Features
              </span>
            </div>
            <div className="w-50">
              <span className=" fs-5 text-white opacity-50">
              You will love all of the features in our Theme. 100% guaranteed satisfaction.
              </span>
            </div>
          </div>
          <div class="container">
          <div class="d-flex justify-content-around row mt-5 gap-4">
            {card.length && card.map((cards, index) => (
              <div class="col-lg-3" key={index}>
                <FeaturesItems cards={cards} />
              </div>
            ))}
          </div>
        </div>
        </div>
    )
}