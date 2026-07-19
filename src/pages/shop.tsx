import { Link, NavLink, Outlet } from "react-router-dom";
import { productList, shopLisNav } from "../constante/constante";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const Shop = () => {
  const [searBtn, setSerachBtn] = useState(false);
  const [inputSeacrh, setInputSeacrh] = useState("");
  const [clearBtn, setClearBtn] = useState(false);

  const filteredList = useMemo(() => {
    return productList.all.filter((item) =>
      item.nom.toLowerCase().includes(inputSeacrh.toLowerCase()),
    );
  }, [inputSeacrh]);

  const handleClick = () => {
    setSerachBtn(!searBtn);
  };

  const handleClearInput = () => {
    setClearBtn(false);
    setInputSeacrh("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.currentTarget.value;
    if (currentValue !== "") {
      setClearBtn(true);
    } else {
      setClearBtn(false);
    }
    setInputSeacrh(currentValue);
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputSeacrh("");
  };

  useEffect(()=>{
   document.body.style.overflow = searBtn ? 'hidden' : 'auto'
   return ()=>{
    document.body.style.overflow = 'auto'
   }
  }, [searBtn])

  return (
    <div className="px-4 md:px-12 ">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-6xl tracking-tight">Shop</h2>
        <p className="font-light text-xl">
          Check out our full collection of products tailored to your needs
        </p>
      </div>
      <div className="flex justify-between my-10 items-center">
        <div className="flex gap-5 items-center overflow-x-auto overflow-y-hidden scrollbar-none">
          {shopLisNav.map((item, index) => (
            <NavLink
              to={item.lien}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "bg-black text-white py-2 px-6 rounded-full shrink-0"
                  : "bg-white text-black rounded-full border py-2 shrink-0 px-6 border-gray-400 font-light"
              }
            >
              {item.page}
            </NavLink>
          ))}
        </div>
        <div className="-order-1 md:order-1 mr-3 text-gray-500">
          <Search size={25} onClick={handleClick} />
        </div>
      </div>
      <div>
        <Outlet />
      </div>

      <div
        className={`transition-all duration-100 ease-in ${searBtn ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <div
          className="absolute left-0 top-0 w-full h-full bg-black bg-blend-multiply opacity-80 z-2000"
          onClick={handleClick}
        ></div>
        <form
          method="get"
          action="submit"
          onSubmit={handleSubmit}
          className="p-4 absolute top-0 left-0 w-full md:w-1/2 md:top-[30%] md:left-[25%] md:rounded-xl z-3000 bg-white flex gap-2 items-center"
        >
          <button type="submit" className="ml-3">
            <Search size={15} />
          </button>
          <input
            type="text"
            name="search"
            id="search"
            value={inputSeacrh}
            onChange={handleInputChange}
            placeholder="Type in to search..."
            className="p-2 focus:outline-0 w-[80%]"
          />
          <div>
            {clearBtn && (
              <X
                size={18}
                className="cursor-pointer p-1 rounded-full bg-gray-400 text-white"
                onClick={handleClearInput}
              />
            )}
          </div>
        </form>
        {clearBtn && (
          <div className="absolute top-[20%] left-0 w-full md:w-1/2 md:top-[40%] md:rounded-xl md:left-[25%]  z-3000 bg-white flex flex-col gap-4 pr-3 md:py-8 py-2   overflow-y-scroll scrollbar-none h-1/2 items-start">
            {filteredList.length === 0 ? (
              <p className="text-sm text-gray-600">No results</p>
            ) : (
              filteredList.map((item, index) => (
                <Link
                  to={item.lien}
                  key={index}
                  className="hover:bg-gray-300 w-full px-3 md:px-8 py-1 text-sm text-gray-600 space-y-2"
                >
                  <h2>{item.nom}</h2>
                  <p>{item.lien}</p>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
