import DashboardPage from "@/components/admin/home";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard Page",
};

const page = () => {
  return (
    <div>
      <DashboardPage />
    </div>
  );
};

export default page;
