

const Formulaire = () => {
  return (
    <div className="bg-[#F7F7F7] flex flex-col justify-center items-center space-y-3 rounded-xl p-8">
        <h2 className="text-3xl font-light tracking-tight">Subscribe to our email</h2>
        <h3 className="text-3xl font-light tracking-tight">newsletter and get 15% off</h3>
        <p className="font-light">Be the first to know about the latest in tech trends, exclusive offers, and exciting product launches by subscribing to our newsletter.</p>
        <form action="#" onSubmit={(e)=>e.preventDefault()} className="my-5 flex flex-col md:flex-row gap-8 w-full md:justify-center">
            <input type="email" placeholder="Your email address" className="bg-white p-4 rounded-full w-full md:w-[70%] " />
            <button type="submit" className="bg-black text-white p-4 rounded-full  w-full md:w-[10%]">Subscribe</button>
        </form>
    </div>
  )
}

export default Formulaire