import { Link } from "react-router-dom"
import type { CardProps } from "../types/card"


const Card = ({image, nom, prix, feature, lien=''}:CardProps) => {
    
  return (
    <Link to={lien} className=" shrink-0 hover:scale-102 w-full transition duration-200 ease-in relative">
        {feature && <div className="absolute top-2 left-4 rounded-full border px-2 py-1 text-gray-500">{feature}</div>}
        <div className="h-[80%]">
            <img src={image} alt={nom} className="rounded-2xl h-full"/>
        </div>
        <div className="flex justify-between items-center my-4 text-lg">
            <h3>{nom}</h3>
            <h3 className="opacity-50">{prix}</h3>
        </div>
    </Link>
  )
}

export default Card