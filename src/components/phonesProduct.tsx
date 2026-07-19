import { productList } from "../constante/constante"
import Card from "./card"


const PhonesProduct = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
        {productList.phones.map((item, index)=>(
            <Card key={index} {...item}/>
        ))}
    </div>
  )
}

export default PhonesProduct