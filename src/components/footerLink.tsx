import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { socialLinks, supportLinks } from "../constante/constante";
import { useState } from "react";
import map from '../assets/map/map.png'

const FooterLink = () => {
  const [lienActive, setlienActive] = useState(false);

  const handleClick = () => {
    setlienActive(!lienActive);
  };
  return (
    <div className="bg-[#F7F7F7] p-8 grid md:grid-cols-3 gap-8 rounded-xl place-items-center">
      <div className="divide-y divide-gray-300 space-y-3">
        <div className="space-y-3 leading-loose">
          <Link to="/">
            <img src={logo} alt="logo" className="mix-blend-multiply w-40" />
          </Link>
          <p className="font-light text-md">
            Selling premium products, designed <br /> to elevate your everyday
            experience
          </p>
        </div>
        <div className="flex gap-3 my-2 items-center">
          {socialLinks.map((lien, index) => (
            <Link
              to={lien.name}
              key={index}
              className="p-2 size-10 rounded-full bg-gray-300 inline-flex justify-center items-center"
            >
              {<lien.icon size={18} />}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex px-2 gap-7 justify-between text-gray-400">
        <div className="flex flex-col gap-3 group">
          <h2 className="text-xl text-gray-500">Pages</h2>
          {supportLinks.pages.map((lien, index) => (
            <NavLink
              to={lien.lien}
              key={index}
              onClick={handleClick}
              className={({ isActive }) => (isActive ? "text-black" : "")}
            >
              {lien.page}
            </NavLink>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-xl text-gray-500">Support</h2>
          {supportLinks.support.map((lien, index) => (
            <NavLink
              to={lien.lien}
              key={index}
              onClick={handleClick}
              className={({ isActive }) => (isActive ? "text-black" : "")}
            >
              {lien.page}
            </NavLink>
          ))}
        </div>
      </div>
      <div>
        <img src={map} alt="map" className="mix-blend-multiply rounded-xl" />
      </div>
    </div>
  );
};

export default FooterLink;
