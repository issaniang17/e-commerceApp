import BrowseCategories from "../components/browseCategories";
import Button from "../components/button";
import CardContainer from "../components/cardContainer";
import { browseCard, cardHome } from "../constante/constante";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col gap-8 md:flex-row px-4 md:px-12 space-y-4">
        <div className="flex-2 space-y-3 leading-relaxed">
          <h1 className="font-semibold text-5xl tracking-widest text-neutral-800 leading-normal">
            Elevate your lifestyle <br /> with premium essentials.
          </h1>
          <p className="font-light text-xl mt-5 tracking-tight ">
            Elevate your daily routine with our meticulously <br /> selected
            premium goods and curated essentials.
          </p>
        </div>
        <div className="flex md:items-end">
          <Button lien="/shop" text="Browse all products" affichage={true} />
        </div>
      </div>
      <CardContainer cardItem={cardHome} />
      <BrowseCategories />
      <div className="py-10 px-4 md:px-12">
        <h2 className="font-semibold text-4xl">Our articles and news</h2>
        <CardContainer cardItem={browseCard} />
      </div>
    </div>
  );
};

export default Home;
