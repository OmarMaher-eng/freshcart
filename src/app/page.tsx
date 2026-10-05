import Image from "next/image";
import MainSlider from "./_components/MainSlider/mainSlider";
import CategorySlider from "./_components/CategorySlider/categorySlider";
import AllProducts from "./_components/allProducts/allProducts";

export default function Home() {
  return (
   <>
   
   <MainSlider/>
    <CategorySlider/>
    <AllProducts/>
   </>
  );
}

