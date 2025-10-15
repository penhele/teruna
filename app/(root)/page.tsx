import JadwalIbadah from "@/components/home/jadwal-ibadah";
import PelayananKategorial from "@/components/home/pelayanan-kategorial";

const HomePage = async () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="flex flex-col gap-10">
        <JadwalIbadah />

        <PelayananKategorial />
      </div>
    </div>
  );
};

export default HomePage;
