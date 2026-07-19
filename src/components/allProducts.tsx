import { productList } from "../constante/constante"
import Card from "./card"


const AllProducts = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
        {productList.all.map((item, index)=>(
            <Card key={index} {...item} />
        ))}
    </div>
  )
}

export default AllProducts