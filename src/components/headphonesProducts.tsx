import { productList } from "../constante/constante"
import Card from "./card"


const HeadphonesProducts = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
        {productList.headphones.map((item, index)=>(
            <Card key={index} {...item}/>
        ))}
    </div>
  )
}

export default HeadphonesProducts