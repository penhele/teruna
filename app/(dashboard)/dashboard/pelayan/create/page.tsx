import CreateFormPelayan from "@/components/admin/create-form-pelayan";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Create Pelayan",
};

const CreatePage = () => {
  return <CreateFormPelayan />;
};

export default CreatePage;
