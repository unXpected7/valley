import { CarouselHome } from "@/components/carousel-home";
import Products from "@/components/products";
import Navbar from "@/components/navbar";
import { Shortcuts } from "@/components/menu-home";
import { getBanners, getProducts, getMenus } from "@/helpers/api";

export default async function Home() {
  // Fetch the actual data using the API functions
  const bannersData = await getBanners();
  const productsData = await getProducts();
  const menusData = await getMenus();

  return (
    <div className="
      max-w-[420px]
      lg:max-w-none
      min-w-[360px]
      m-auto
      bg-white
      mb-4
      text-black">
      <Navbar/>
      {/* Pass the fetched data to the CarouselBanner component */}
      <CarouselHome banners={bannersData}/>
      <div className="px-[20px] lg:px-0 lg:w-[960px] lg:m-auto lg:mt-[40px]">
        {/* Pass the fetched data to the Shortcuts and Collections components */}
        <Shortcuts shortcuts={menusData}/>
        <Products products={productsData}/>
      </div>
    </div>
  );
}
