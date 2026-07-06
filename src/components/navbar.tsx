import { Link, NavLink } from "react-router-dom";
import { navitems } from "../constante/constante";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenu, setmobileMenu] = useState(false);

  const toggleMenu = () => {
    setmobileMenu(!mobileMenu);
  };
  

  return (
    <nav className={`flex justify-between items-center p-8 px-2 lg:px-4 relative  w-full bg-white z-100 transition-transform duration-100 mb-10`}>
      <Link to="/" onClick={()=>setmobileMenu(false)}>
        <img src={logo} alt="logo-profile" width="150px" height="150px" />
      </Link>
      <div className="lg:hidden">
        {mobileMenu ? <X onClick={toggleMenu} /> : <Menu onClick={toggleMenu} />}
      </div>
      
      <div className={`absolute left-0 w-full top-[80%]  z-10 px-5 pt-10 h-[85vh] bg-white duration-300 transition-all ease-in ${mobileMenu ? "translate-y-0 opacity-100 visible pointer-events-auto":"-translate-y-full opacity-0 invisible pointer-events-none"}`}>
          <ul className="flex flex-col gap-4 divide-y divide-gray-400 space-y-2 text-gray-500 ">
            {navitems.map((item, index) => (
              <li key={index} onClick={toggleMenu}>
                <NavLink to={item.lien}  className={(({isActive})=> isActive ? 'text-black' :"")}>{item.page}</NavLink>
              </li>
            ))}
          </ul>
      </div>
    

      <ul className="lg:flex items-center gap-8 text-gray-500 text-lg font-normal hidden space-x-2">
        {navitems.map((item, index) => (
          <li key={index}>
            <NavLink to={item.lien} className={(({isActive})=> isActive ? 'text-black' : "")}>{item.page}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
