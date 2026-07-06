
import type { CardProps } from "../types/card"
import Card from "./card"


const CardContainer = ({cardItem}:{cardItem : CardProps[]}) => {
  return (
    <div className="flex  gap-6 md:grid  md:grid-cols-3 overflow-x-scroll scrollbar-none overflow-y-hidden px-4 md:px-8 rounded-lg mt-10 py-10 h-screen">
        {cardItem.map((item, index)=>(
            <Card image={item.image} nom={item.nom} feature={item.feature} lien={item.lien} prix={item.prix} key={index} />
        ))}
    </div>
  )
}

export default CardContainer