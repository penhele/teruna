import ReadTeruna from "@/components/admin/read-teruna";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href={"/dashboard/teruna/create"}>
        <Button>Add New</Button>

        <ReadTeruna />
      </Link>
    </div>
  );
};

export default page;
