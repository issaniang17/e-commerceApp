import { Link } from "react-router-dom";
import type { ButtonProps } from "../types/button";

const Button = ({ text, lien, affichage }: ButtonProps) => {
  return <Link to={lien} className={`rounded-2xl px-4 py-2 bg-white transition duration-300 ease-in hover:-translate-y-1 ${affichage && "hover:bg-gray-400"}`}>
    {text}
    </Link>;
};

export default Button;
