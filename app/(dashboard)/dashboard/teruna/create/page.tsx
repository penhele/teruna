import CreateFormTeruna from "@/components/admin/create-form-teruna";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Create Teruna",
};

const CreatePage = () => {
  return <CreateFormTeruna />;
};

export default CreatePage;
