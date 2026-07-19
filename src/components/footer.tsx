import { Link } from "react-router-dom"
import FooterLink from "./footerLink"
import Formulaire from "./formulaire"


const Footer = () => {
  return (
    <div className="py-10 px-4 md:px-12 space-y-5">
        <Formulaire />
        <FooterLink />
        <div className="py-10 text-gray-500 flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <div>
            <p>2024 &copy; designed by <Link to='#'>tolv.studio</Link></p>
            
          </div>
          <div className="flex justify-between gap-5 text-xs md:text-lg">
            <Link to='/faq/terms-and-conditions'>Terms & Conditions</Link>
            <Link to='/faq/cookie-policy'>Cookies</Link>
            <Link to='/faq/privacy-policy'>Privacy policy</Link>
          </div>

        </div>
    </div>
  )
}

export default Footer