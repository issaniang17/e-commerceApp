import { Link } from "react-router-dom";
import type { ButtonProps } from "../types/button";

const Button = ({ text, lien, affichage }: ButtonProps) => {
  return <Link to={lien} className={`rounded-full px-8 py-4 bg-white transition duration-300 ease-in hover:-translate-y-1 inline-flex items-center justify-center  ${affichage ? "hover:bg-white border-black border" : "border border-gray-400 hover:bg-gray-200"}`}>
    {text}
    </Link>;
};

export default Button;
