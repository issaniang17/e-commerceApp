import { productList } from "../constante/constante"
import Card from "./card"


const DisplayProduct = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
        {productList.displays.map((item, index)=>(
            <Card key={index} {...item}/>
        ))}
    </div>
  )
}

export default DisplayProduct