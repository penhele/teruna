"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const CarouselImage = () => {
  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    }),
  );

  const imageList = [
    "/image.png",
    "/image2.png",
    "/image3.png",
    "/image3.png",
    "/image3.png",
    "/image3.png",
    "/image3.png",
  ];

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Kegiatan-kegiatan</h2>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full"
      >
        <CarouselContent>
          {imageList.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <div className="relative aspect-video w-full overflow-hidden rounded-sm">
                <Image
                  src={item}
                  alt={`image-${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselImage;
