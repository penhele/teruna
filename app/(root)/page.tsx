import CarouselImage from "@/components/home/image-carousel";
import JadwalIbadah from "@/components/home/jadwal-ibadah";
import PelayananKategorial from "@/components/home/pelayanan-kategorial";

const HomePage = async () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-10">
        <JadwalIbadah />

        <PelayananKategorial />

        <CarouselImage />
      </div>
    </div>
  );
};

export default HomePage;
