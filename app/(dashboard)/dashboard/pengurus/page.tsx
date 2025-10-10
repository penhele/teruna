import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ReadPengurus from "@/components/read-pengurut";

const PengurusPage = () => {
  return (
    <div className="">
      <Link href={"/dashboard/pengurus/create"}>
        <Button>Add New</Button>
      </Link>

      <ReadPengurus />
    </div>
  );
};

export default PengurusPage;
