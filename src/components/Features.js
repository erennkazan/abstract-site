import { useState, useEffect } from "react"
import Features from '../api/features.json'
import FeaturesItems from './ui/FeaturesItem'


export default function Features(){

  const[features, setFeatures] = useState([]);

  useEffect(()=>{
    setFeatures(Package);
  },[])

    return(
        <div className="bg-brand-color ">
          <div>
            {features.length && features.map((features,index)=> <FeaturesItem key={index} package={features}/>)}
          </div>
        </div>
    )
}