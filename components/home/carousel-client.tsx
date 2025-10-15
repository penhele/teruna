"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

// 🧠 Tambahkan tipe props di sini
interface Kegiatan {
  id: string;
  image: string;
  title: string;
  alt: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CarouselClientProps {
  imageList: Kegiatan[];
}

const CarouselClient = ({ imageList }: CarouselClientProps) => {
  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    }),
  );

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
          {imageList.map((item) => (
            <CarouselItem key={item.id} className="md:basis-1/2">
              <div className="relative aspect-video w-full overflow-hidden rounded-sm">
                <Image
                  src={item.image}
                  alt={item.alt}
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

export default CarouselClient;
