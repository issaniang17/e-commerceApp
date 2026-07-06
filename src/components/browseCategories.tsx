import Button from "./button"
import watch from '../assets/watch/watch3.png'
import ordi from '../assets/ordi/blackOrdi.png'
import phone from '../assets/phones/phone13.png'
import whiteHeadphone from '../assets/headphone/white-headphone.png'

const BrowseCategories = () => {
  return (
    <div className="py-10 px-4 md:px-12 space-y-3">
        <h2 className="text-4xl font-semibold tracking-tight">Browse by categories</h2>
        <p className="text-lg">Explore our diverse range of categories tailored <br />to meet your specific needs and interests.</p>
        <div className="grid gap-4 md:grid-cols-4 my-4">
            <div className="md:col-span-2 md:row-span-2  p-6 bg-[#F7F7F7] rounded-xl space-y-2 ">
                <div className="mb-5">
                    <h3 className="text-xl font-medium my-4">All products</h3>
                    <p className="mb-4 font-light text-sm">Discover endless possibilities with our All Products <br /> category. Shop now for everything you need in one <br /> convenient place.</p>
                    <Button lien="/shop" text="Browse all products" />
                </div>
                <div>
                    <img src={watch} alt="watch" className="md:scale-x-110 scale-x-120"/>
                </div>
            </div>
            <div className="md:col-span-2 p-3 bg-[#F7F7F7]  rounded-xl flex flex-col gap-2 md:flex-row">
                <div className="flex justify-around flex-col">
                    <div>
                        <h2 className="text-xl font-medium my-4">Displays</h2>
                        <p className="mb-4 font-light text-sm">Experience crystal-clear clarity and vibrant visuals with our Displays.</p>
                    </div>
                    <Button lien="/shop/displays" text="Check displays"/>
                </div>
                <div className="flex justify-center items-center">
                    <img src={ordi} alt="ordi" className="mix-blend-multiply"/>
                </div>
            </div>
            <div className="rounded-xl p-3 bg-[#F7F7F7] relative">
                <img src={whiteHeadphone} alt="headphone" />
                <div className="absolute bottom-5 left-[20%]">
                    <Button lien="/shop/headphones" text="Headphones"/>
                </div>
            </div>
            <div className="rounded-xl p-3 bg-[#F7F7F7] relative">
                <img src={phone} alt="phone13" className="mix-blend-multiply h-[95%] "/>
                <div className="absolute bottom-5 left-[30%]">
                    <Button lien="/shop/phones" text="Phones"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BrowseCategories