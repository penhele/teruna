import ReadTeruna from "@/components/admin/read-teruna";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Teruna",
};

const page = () => {
  return (
    <div>
      <Link href={"/dashboard/teruna/create"}>
        <Button>Add New</Button>
      </Link>

      <ReadTeruna />
    </div>
  );
};

export default page;
