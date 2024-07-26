import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Demos from "./sections/Demos";
import Experience from "./sections/Experience";
import OtherPages from "./sections/OtherPages";
import Footer from "./sections/Footer";
import Benefits from "./sections/Benefits";

export default function Home() {
  const homeDemos = [
    {
      name: "FLAMINGO",
      image: "/images/demo1.png",
      url: "https://theme-cro-wild-flamingo.myshopify.com/",
    },
    {
      name: "panther",
      image: "/images/demo2.png",
      url: "https://theme-cro-wild-panther.myshopify.com/",
    },
    {
      name: "butterfly",
      image: "/images/demo3.png",
      url: "https://theme-cro-wild-butterfly.myshopify.com/",
    },
    {
      name: "panda",
      image: "/images/demo4.png",
      url: "https://theme-cro-wild-panda.myshopify.com/",
    },
  ];

  const catalogPages = [
    {
      name: "FLAMINGO",
      image: "/images/catalog/demo1.png",
      url: "https://theme-cro-wild-flamingo.myshopify.com/collections/one-piece",
    },
    {
      name: "panther",
      image: "/images/catalog/demo2.png",
      url: "https://theme-cro-wild-panther.myshopify.com/collections/womens-top-collection",
    },
    {
      name: "butterfly",
      image: "/images/catalog/demo3.png",
      url: "https://theme-cro-wild-butterfly.myshopify.com/collections/stride-in-confidence-womens-sport-footwear-collection",
    },
    {
      name: "panda",
      image: "/images/catalog/demo4.png",
      url: "https://theme-cro-wild-panda.myshopify.com/collections/accessories",
    },
  ];

  const productPages = [
    {
      name: "FLAMINGO",
      image: "/images/product/demo1.png",
      url: "https://theme-cro-wild-flamingo.myshopify.com/products/black-high-waisted-brazilian-bikini-bottom?variant=45155621830896",
    },
    {
      name: "panther",
      image: "/images/product/demo2.png",
      url: "https://theme-cro-wild-panther.myshopify.com/products/shortened-wool-blend-oversize-coat?variant=44063543197859",
    },
    {
      name: "butterfly",
      image: "/images/product/demo3.png",
      url: "https://theme-cro-wild-butterfly.myshopify.com/products/zip-up-black-sports-top?variant=42144329072685",
    },
    {
      name: "panda",
      image: "/images/product/demo4.png",
      url: "https://theme-cro-wild-panda.myshopify.com/products/dusty-pink-long-sleeve-dress-with-flowers?_pos=1&_psq=Dusty&_ss=e&_v=1.0",
    },
  ];

  return (
    <>
      <Header />
      <Hero />
      <Demos demoInfo={homeDemos} title={"Home Demos"} id={"demos"} />
      <Experience title={"Best User Experience On All Devices"} />
      <Demos demoInfo={catalogPages} title={"Catalog Pages"} id={"catalog"} />
      <Demos demoInfo={productPages} title={"Product Pages"} id={"products"} />
      <Experience title={"Flexibility for customize"} variation="v2" />
      <OtherPages />
      <Experience title={"Mobile Version"} variation="v3" />
      <Benefits />
      <Footer />
    </>
  );
}
