import React from "react";
import Navlink from "@/components/navbar/navlink";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex justify-between items-center px-4">
        <span>Persekutuan Teruna</span>
        <Navlink />
      </div>
    </div>
  );
};

export default Navbar;
