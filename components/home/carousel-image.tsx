import { getKegiatan } from "@/lib/data";
import CarouselClient from "./carousel-client";

const CarouselImage = async () => {
  const imageList = await getKegiatan();
  return <CarouselClient imageList={imageList} />;
};

export default CarouselImage;
