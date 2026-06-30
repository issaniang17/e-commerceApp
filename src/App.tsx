import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Blog from "./pages/blog";
import Faq from "./pages/faq";
import Contact from "./pages/contact";

const App = () => {
  return (
    <div className="">
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}>

          </Route>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}>

          </Route>
          <Route path="/faq" element={<Faq/>}/>
          <Route path="/contact" element={<Contact/>}/>

         </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
