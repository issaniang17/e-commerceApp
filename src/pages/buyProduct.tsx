import { useParams } from "react-router-dom";
import {
  buyProductsList,
  productList,
  serviceWarranty,
  warranty,
} from "../constante/constante";
import Card from "../components/card";
import { useState } from "react";

const BuyProduct = () => {
    const [supportDetail, setSupportDetail] = useState(false)
  const { productDetails } = useParams();
  const category = productDetails?.split("-")[0];

  if (!productDetails || !category)
    return (
      <div className="flex justify-center items-center h-screen bg-blue-300 text-white">
        Produit non trouve
      </div>
    );
  const produit = productList.all.find((productName) =>
    productName.lien.endsWith(productDetails),
  );
  let cardProducts;
  let templatePresentProduct;
  if (category === "headphones") {
    cardProducts = productList.headphones;
    templatePresentProduct = buyProductsList.headphonesImg;
  } else if (category === "ewatch") {
    cardProducts = productList.watch;
    templatePresentProduct = buyProductsList.watchImg;
  } else if (category === "iphone") {
    cardProducts = productList.phones;
    templatePresentProduct = buyProductsList.phonesImg;
  } else {
    cardProducts = productList.displays;
    templatePresentProduct = buyProductsList.displaysImg;
  }

  const handleWarrantyValue = (valeur:string)=>{
    setSupportDetail(true)
    console.log(supportDetail)
    return valeur
  }
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-2 md:gap-6">
        <div className="flex flex-col gap-3 md:flex-row md:gap-6 ">
          <div className="order-1  md:order-2 md:w-[70%]  ">
            <img
              src={produit?.image}
              alt={produit?.nom}
              className=" h-full rounded-2xl pb-2"
            />
          </div>
          <div className="order-2 md:order-1 w-full md:w-[30%]   flex gap-2 md:flex-col md:items-center">
            <div>
              <img
                src={produit?.buyImg?.img1}
                alt={produit?.buyImg?.img1}
                className="rounded-2xl aspect-square"
              />
            </div>
            <div>
              <img
                src={produit?.buyImg?.img2}
                alt="imgD"
                className="rounded-2xl aspect-square"
              />
            </div>
            <div>
              <img
                src={produit?.buyImg?.img3}
                alt="imgD"
                className="rounded-2xl aspect-square"
              />
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl md:text-4xl">{produit?.nom}</h2>
          {templatePresentProduct.map((item, index) => (
            <p className="font-light text-sm" key={index}>{item.description}</p>
          ))}
          <p className="font-normal text-2xl md:text-3xl">{produit?.prix}</p>
          <div className="my-5 flex flex-col items-center justify-center text-center">
            <button className="bg-slate-900 p-4 rounded-full w-full text-white my-2 cursor-pointer">
              Buy now
            </button>
            <p className="text-sm opacity-70">
              Estimate delivery times: 3-6 days (International)
            </p>
            <p className="text-sm opacity-70">
              Return within 45 days of purchase. Duties & taxes are
              non-refundable.
            </p>
          </div>
        <div className="divide-y divide-gray-300 space-y-4 px-5 py-3 text-gray-600">
            {warranty.map((item, index)=>(
                <div className="flex justify-between py-4 cursor-pointer" key={index} onClick={()=> handleWarrantyValue(item.valeur)}>
                    <div className="flex gap-4 justify-center items-center">
                        {item.icon}
                        <h3>{item.name}</h3>
                    </div>
                    <div>
                        {item.arrow}
                    </div>
                </div>
            ))}
            
        </div>
        </div>
      </div>
      <div className="py-20">

      </div>
      <div className="flex flex-col gap-4 my-20">
        <div className="md:order-2 order-1">
          {templatePresentProduct.map((item, index) => (
            <img
              src={item.heroImg}
              alt="hero"
              key={index}
              className="md:animate-zoomover md:[animation-timeline:view()] md:[animation-range:entry_0%_cover_80%] rounded-2xl"
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center  items-center bg-gray-200 p-4 md:p-12 rounded-2xl gap-5 my-10 md:order-1 order-2">
          {serviceWarranty.map((serv, index) => (
            <div
              className="flex flex-col md:flex-row gap-3 items-center justify-center"
              key={index}
            >
              <div className="p-3 rounded-2xl bg-gray-100">{serv.icon}</div>
              <div className="flex flex-col items-center md:items-start">
                <h3 className="text-lg">{serv.titre}</h3>
                <p className="opacity-80">{serv.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {templatePresentProduct.map((item) =>
          item.presentation.map((pres, index) => (
            <div key={index} className="space-y-3">
              <img src={pres.image} alt={pres.titre} className="rounded-2xl" />
              <h3 className="text-2xl">{pres.titre}</h3>
              <p className="opacity-80 font-light">{pres.description}</p>
            </div>
          )),
        )}
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between my-10 md:my-20 space-y-3">
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-4xl">
            What customers{" "}
            <span className="block text-gray-400">are saying</span>
          </h2>
        </div>
        <div className="font-light">
          <p>
            Experience the convenience and satisfaction shared <br /> by our
            thriving community of shoppers who trust <br /> our ecommerce store
            for their every purchase.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5   md:border-b  md:border-gray-300">
        {templatePresentProduct.map((item) =>
          item.testimonials.map((testi, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-2xl p-4 md:p-8 space-y-4 flex flex-col gap-5 justify-between md:mb-20"
            >
              <p className="font-light opacity-80">{testi.body}</p>
              <h3 className="font-semibold">{testi.author}</h3>
            </div>
          )),
        )}
      </div>
      <div className="grid md:grid-cols-3 gap-4 my-5 md:my-10 space-y-3 ">
        <h2 className="md:col-span-3 text-xl md:text-5xl mb-3 md:mb-5">
          Related Products
        </h2>
        {cardProducts?.map((item, index) => (
          <Card
            image={item.image}
            lien={item.lien}
            nom={item.nom}
            key={index}
            prix={item.prix}
            feature={item.feature}
          />
        ))}
      </div>
    </div>
  );
};

export default BuyProduct;
