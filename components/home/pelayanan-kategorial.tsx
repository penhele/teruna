import Image from "next/image";
import React from "react";

const PelayananKategorial = () => {
  const pelkat = [
    { image: "/logo-pelkat-pt.png", title: "Persekutuan Teruna" },
    { image: "/logo-pelkat-pt.png", title: "Persekutuan Teruna" },
    { image: "/logo-pelkat-pt.png", title: "Persekutuan Teruna" },
    { image: "/logo-pelkat-pt.png", title: "Persekutuan Teruna" },
    { image: "/logo-pelkat-pt.png", title: "Persekutuan Teruna" },
    { image: "/logo-pelkat-pt.png", title: "Persekutuan Teruna" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-semibold">Pelayanan Kategorial</h2>
      <div className="grid grid-cols-4 gap-6">
        <div className="flex flex-col gap-3 col-span-4 md:col-span-1">
          <div className="flex flex-col gap-1 items-center">
            <Image src={"/logo-pelkat-pt.png"} alt="" height={80} width={80} />
            <span>Persekutuan Teruna</span>
          </div>
          <p className="text-sm text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            tempore perspiciatis eligendi necessitatibus laboriosam quam minus
            impedit doloremque minima architecto! Vel quaerat minus illum
            reiciendis magni, eum laudantium dolores ea!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3  col-span-4  md:col-span-3 bg-gray-200 rounded-sm p-4">
          {pelkat.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 items-center justify-center transition hover:scale-105"
            >
              <Image src={item.image} alt="" height={56} width={56} />
              <span className="text-sm">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PelayananKategorial;
