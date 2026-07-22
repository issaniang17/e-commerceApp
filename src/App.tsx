import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Blog from "./pages/blog";
import Faq from "./pages/faq";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import AllProducts from "./components/allProducts";
import HeadphonesProducts from "./components/headphonesProducts";
import WatchesProduct from "./components/watchesProduct";
import PhonesProduct from "./components/phonesProduct";
import DisplayProduct from "./components/displayProduct";
import BuyProduct from "./pages/buyProduct";

const App = () => {
  return (
    <div className="">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}>
            <Route index element={<AllProducts/>}/>
            <Route path="headphones" element={<HeadphonesProducts/>}/>
            <Route path="watches" element={<WatchesProduct/>}/>
            <Route path="phones" element={<PhonesProduct/>}/>
            <Route path="displays" element={<DisplayProduct/>}/>
            
          </Route>
          <Route path="/shop/:productDetails" element={<BuyProduct/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}>

          </Route>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/contact" element={<Contact/>}/>

         </Routes>
         <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
