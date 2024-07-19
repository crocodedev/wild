import Experience from "./sections/Experience";

export default function Home() {
  const homeDemos = [
    {
      name: "PITAYA",
      image: "/images/demo1.png",
    },
    {
      name: "ACACIA",
      image: "/images/demo2.png",
    },
    {
      name: "PLUM",
      image: "/images/demo3.png",
    },
    {
      name: "BONSAI",
      image: "/images/demo4.png",
    },
  ];

  const catalogPages = [
    {
      name: "PITAYA",
      image: "/images/catalog/demo1.png",
    },
    {
      name: "ACACIA",
      image: "/images/catalog/demo2.png",
    },
    {
      name: "PLUM",
      image: "/images/catalog/demo3.png",
    },
    {
      name: "BONSAI",
      image: "/images/catalog/demo4.png",
    },
  ];

  const productPages = [
    {
      name: "PITAYA",
      image: "/images/product/demo1.png",
    },
    {
      name: "ACACIA",
      image: "/images/product/demo2.png",
    },
    {
      name: "PLUM",
      image: "/images/product/demo3.png",
    },
    {
      name: "BONSAI",
      image: "/images/product/demo4.png",
    },
  ];

  return (
    <>
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <Demos demoInfo={homeDemos} title={"Home Demos"} /> */}
      {/* <Experience title={"Best User Experience On All Devices"} /> */}
      {/* <Demos demoInfo={catalogPages} title={"Catalog Pages"} /> */}
      {/* <Demos demoInfo={productPages} title={"Product Pages"} /> */}
      <Experience title={"Flexibility for customize"} variation="v2" />
      {/* <OtherPages /> */}
      {/* <Experience title={"Mobile Version"} variation="v3" /> */}
      {/* <Benefits /> */}
      {/* <Footer /> */}
    </>
  );
}
