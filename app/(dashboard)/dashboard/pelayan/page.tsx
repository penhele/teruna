import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ReadPengurus from "@/components/admin/read-pengurus";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pelayan",
};

const PelayanPage = () => {
  return (
    <div className="">
      <Link href={"/dashboard/pelayan/create"}>
        <Button>Add New</Button>
      </Link>

      <ReadPengurus />
    </div>
  );
};

export default PelayanPage;
